package com.piczio.imageservice.image.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ImageDto {
    private String imageUrl;
    private LocalDateTime uploadDate;
    private String description;
}
