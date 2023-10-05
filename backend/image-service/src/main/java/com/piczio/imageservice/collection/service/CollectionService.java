package com.piczio.imageservice.collection.service;

import com.piczio.imageservice.collection.dto.CollectionResponseDto;

public interface CollectionService {
    CollectionResponseDto getCollection(Long id);

    void createCollection(Long userId, String name, String description);
}
