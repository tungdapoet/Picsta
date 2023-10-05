package com.piczio.userservice.kafka.service;

import com.piczio.userservice.kafka.event.ImageUploadEvent;
import lombok.AllArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class UserServiceProducer {
    private final KafkaTemplate<String, ImageUploadEvent> kafkaTemplate;

    public void sendImageMetadata(Long userId, String description, LocalDateTime uploadDate, String imageUrl) {
        kafkaTemplate.send("image-metadata-response", new ImageUploadEvent(userId, description, uploadDate, imageUrl));
    }
}
