package com.piczio.imageservice.image_collection.service;


import java.util.List;

public interface ImageCollectionService {
    List<Long> findImageIdsByCollectionId(Long collectionId);
}
