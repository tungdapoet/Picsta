package com.piczio.imageservice.service;

import com.piczio.imageservice.dto.MinioObjectDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.time.ZonedDateTime;

public interface MinioService {
    MinioObjectDto upload(MultipartFile file);

    InputStream downloadObject(String objectKey);

    ZonedDateTime getUploadDate(String bucketName, String objectName) throws Exception;
}
