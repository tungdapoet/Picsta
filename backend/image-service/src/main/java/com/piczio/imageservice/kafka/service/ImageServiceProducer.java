package com.piczio.imageservice.kafka.service;

import com.piczio.imageservice.kafka.event.ImageMetadataRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ImageServiceProducer {
    @Autowired
    private KafkaTemplate<String, ImageMetadataRequest> kafkaTemplate;

    public void sendImageMetadataRequest(String imageUrl, LocalDateTime uploadDate) {
        kafkaTemplate.send("image-metadata-request", new ImageMetadataRequest(imageUrl, uploadDate));
    }
}
