package com.piczio.imageservice.image_collection.service;

import com.piczio.imageservice.image_collection.repository.ImageCollectionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ImageCollectionServiceImpl implements ImageCollectionService {

    private final ImageCollectionRepository imageCollectionRepository;
    @Override
    public List<Long> findImageIdsByCollectionId(Long collectionId) {
        return imageCollectionRepository.findImageIdsByCollectionId(collectionId);
    }
}
