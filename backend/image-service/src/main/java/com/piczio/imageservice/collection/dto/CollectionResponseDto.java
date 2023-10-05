package com.piczio.imageservice.collection.dto;

import com.piczio.imageservice.image.entity.Image;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class CollectionResponseDto {
    private Long id;
    private Long userId;
    private String name;
    private String description;
    private List<Image> imageList;
}
