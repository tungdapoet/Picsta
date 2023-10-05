package com.piczio.imageservice.image.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
public class ImageUploadRequestDto {
    private String imageUrl;
    private LocalDateTime uploadDate;
}
