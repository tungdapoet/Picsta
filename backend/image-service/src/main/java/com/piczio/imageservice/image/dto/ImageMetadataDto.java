package com.piczio.imageservice.image.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ImageMetadataDto {
    private Long UserId;
    private String description;
    private String imageUrl;
    private LocalDateTime uploadDate;
}
