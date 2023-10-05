package com.piczio.imageservice.image.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
public class ImageDto {
    private Long id;
    private Long UserId;
    private String description;
    private String imageUrl;
    private LocalDateTime uploadDate;
}
