package com.piczio.imageservice.image.service;

import com.piczio.imageservice.dto.MinioObjectDto;
import com.piczio.imageservice.image.dto.ImageDto;
import com.piczio.imageservice.image.entity.Image;
import com.piczio.imageservice.image.repository.ImageRepository;
import com.piczio.imageservice.service.MinioService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.InputStream;

@Service
@AllArgsConstructor
public class ImageServiceImpl implements ImageService {

    private ImageRepository imageRepository;

    private MinioService minioService;

    @Override
    @Transactional
    public ImageDto uploadImage(MultipartFile file, String description) {
        try {

            MinioObjectDto minioImage = minioService.upload(file);

            Image image = Image.builder()
                    .imageUrl(minioImage.getImageUrl())
                    .uploadDate(minioImage.getUploadDate())
                    .build();

            Image savedImage = imageRepository.save(image);

            return ImageDto.builder()
                    .imageUrl(savedImage.getImageUrl())
                    .uploadDate(savedImage.getUploadDate())
                    .description(description)
                    .build();
        } catch (Exception e) {
            throw new RuntimeException("Failed to save image data: " + e.getMessage(), e);
        }
    }

    @Override
    public InputStream downloadImage(String objectKey) {
        return minioService.downloadObject(objectKey);
    }
}
