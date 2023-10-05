package com.piczio.imageservice.minio.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class MinioObjectDto {
    private String imageUrl;
    private LocalDateTime uploadDate;
}
