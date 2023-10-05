package com.piczio.imageservice.kafka.event;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
public class ImageMetadataRequest {
    private String imageUrl;
    private LocalDateTime uploadDate;
}
