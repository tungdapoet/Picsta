package com.piczio.imageservice.kafka.service;

import com.piczio.imageservice.image.dto.ImageMetadataDto;
import com.piczio.imageservice.image.service.ImageService;
import lombok.AllArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class ImageServiceConsumer {

    private final ImageService imageService;

    @KafkaListener(topics = "image-metadata-response", groupId = "image-service-group")
    public void saveImage(Long userId, String description, LocalDateTime uploadDate, String imageUrl) {
        imageService.saveImage(
                ImageMetadataDto.builder()
                        .UserId(userId)
                        .imageUrl(imageUrl)
                        .description(description)
                        .uploadDate(uploadDate)
                        .build()
        );
    }
}
