package com.piczio.imageservice.image.service;

import com.piczio.imageservice.image.dto.ImageDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;

public interface ImageService {
    ImageDto uploadImage(MultipartFile file, String description);

    InputStream downloadImage(String objectKey);
}
