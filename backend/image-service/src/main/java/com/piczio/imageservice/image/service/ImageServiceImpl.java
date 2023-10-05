package com.piczio.imageservice.image.service;

import com.piczio.imageservice.image.dto.ImageDto;
import com.piczio.imageservice.image.dto.ImageMetadataDto;
import com.piczio.imageservice.image.types.Pagination;
import com.piczio.imageservice.minio.dto.MinioObjectDto;
import com.piczio.imageservice.image.dto.ImageUploadRequestDto;
import com.piczio.imageservice.image.entity.Image;
import com.piczio.imageservice.image.repository.ImageRepository;
import com.piczio.imageservice.minio.service.MinioService;
import lombok.AllArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.InputStream;
import java.net.URL;
import java.util.List;

@Service
@AllArgsConstructor
public class ImageServiceImpl implements ImageService {

    private ImageRepository imageRepository;

    private MinioService minioService;

    String getObjectNameFromUrl(String imageUrl) {
        try {
            URL url = new URL(imageUrl);
            String path = url.getPath();

            if(path.startsWith("/")) {
                path = path.substring(1);
            }

            String[] parts = path.split("/");

            return parts[parts.length - 1];
        } catch (Exception e) {
            throw new RuntimeException("Invalid image URL: " + imageUrl, e);
        }
    }

    @Override
    @Transactional
    public ImageUploadRequestDto uploadImage(MultipartFile file) {
        try {

            MinioObjectDto minioImage = minioService.upload(file);

            return ImageUploadRequestDto.builder()
                    .imageUrl(minioImage.getImageUrl())
                    .uploadDate(minioImage.getUploadDate())
                    .build();
        } catch (Exception e) {
            throw new RuntimeException("Failed to upload image: " + e.getMessage(), e);
        }
    }

    @Override
    public void saveImage(ImageMetadataDto imageMetadataDto) {
        try {
            imageRepository.save(Image.builder()
                    .userId(imageMetadataDto.getUserId())
                    .description(imageMetadataDto.getDescription())
                    .imageUrl(imageMetadataDto.getImageUrl())
                    .uploadDate(imageMetadataDto.getUploadDate())
                    .build());
        } catch (Exception e) {
            throw new RuntimeException("Failed to save image information: " + e.getMessage(), e);
        }
    }

    @Override
    public Pagination<ImageDto> getImageList(int page, int size) {
        List<Image> images = imageRepository.findAll(PageRequest.of(page-1, size)).getContent();

        List<ImageDto> imageDtos = images.stream()
                .map(image -> new ImageDto(image.getId(), image.getUserId(), image.getDescription(), image.getImageUrl(), image.getUploadDate()))
                .toList();
        return new Pagination<>(imageDtos, page, size);
    }

    @Override
    public List<Image> findAllById(List<Long> imageIds) {
        return imageRepository.findAllById(imageIds);
    }

    @Override
    public InputStream downloadImage(String objectKey) {
        return minioService.downloadObject(objectKey);
    }

    @Override
    public void deleteImage(Long imageId) throws ChangeSetPersister.NotFoundException {
        Image image = imageRepository.findById(imageId)
                .orElseThrow(ChangeSetPersister.NotFoundException::new);

        String objectName = getObjectNameFromUrl(image.getImageUrl());

        minioService.deleteObject(objectName);

        imageRepository.deleteById(imageId);
    }
}
