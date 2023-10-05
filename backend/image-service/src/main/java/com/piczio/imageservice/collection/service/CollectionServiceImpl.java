package com.piczio.imageservice.collection.service;

import com.piczio.imageservice.collection.dto.CollectionResponseDto;
import com.piczio.imageservice.collection.entity.Collection;
import com.piczio.imageservice.collection.repository.CollectionRepository;
import com.piczio.imageservice.image.entity.Image;
import com.piczio.imageservice.image.service.ImageService;
import com.piczio.imageservice.image_collection.service.ImageCollectionService;
import lombok.AllArgsConstructor;
import org.apache.kafka.common.errors.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CollectionServiceImpl implements CollectionService {

    private final CollectionRepository collectionRepository;

    private final ImageCollectionService imageCollectionService;

    private final ImageService imageService;

    @Override
    public CollectionResponseDto getCollection(Long id) {
        Collection collection = collectionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Collection not found with Id: " + id));

        List<Long> ImageIds = imageCollectionService.findImageIdsByCollectionId(id);

        List<Image> images = imageService.findAllById(ImageIds);

        return CollectionResponseDto.builder()
                .description(collection.getDescription())
                .id(id)
                .imageList(images)
                .name(collection.getName())
                .userId(collection.getUserId())
                .build();
    }

    @Override
    public void createCollection(Long userId, String name, String description) {
        collectionRepository.save(Collection.builder()
                .userId(userId)
                .name(name)
                .description(description)
                .imageCollections(null)
                .build());
    }
}
