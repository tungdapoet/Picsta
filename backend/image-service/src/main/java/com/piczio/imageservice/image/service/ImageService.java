package com.piczio.imageservice.image.service;

import com.piczio.imageservice.image.dto.ImageDto;
import com.piczio.imageservice.image.dto.ImageUploadRequestDto;
import com.piczio.imageservice.image.dto.ImageMetadataDto;
import com.piczio.imageservice.image.entity.Image;
import com.piczio.imageservice.image.types.Pagination;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.List;

public interface ImageService {
    ImageUploadRequestDto uploadImage(MultipartFile file);

    void saveImage(ImageMetadataDto imageMetadataDto);

    Pagination<ImageDto> getImageList(int page, int size);

    List<Image> findAllById(List<Long> imageIds);

    InputStream downloadImage(String objectKey);

    void deleteImage(Long imageId) throws ChangeSetPersister.NotFoundException;
}
