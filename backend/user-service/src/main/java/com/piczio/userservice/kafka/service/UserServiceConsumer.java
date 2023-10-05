package com.piczio.userservice.kafka.service;

import lombok.AllArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class UserServiceConsumer {

    private final UserServiceProducer userServiceProducer;

    @KafkaListener(topics = "image-metadata-request", groupId = "user-service-group")
    public void sendImageMetadataResponse (Long userId, String description, LocalDateTime uploadDate, String imageUrl) {
        userServiceProducer.sendImageMetadata(userId, description, uploadDate, imageUrl);
    }
}
