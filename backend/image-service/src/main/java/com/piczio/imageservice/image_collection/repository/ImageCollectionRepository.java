package com.piczio.imageservice.image_collection.repository;

import com.piczio.imageservice.image_collection.entity.ImageCollection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ImageCollectionRepository extends JpaRepository<ImageCollection, Long> {
    @Query("SELECT ic.image.id FROM ImageCollection ic WHERE ic.collection.id = :collectionId")
    List<Long> findImageIdsByCollectionId(@Param("collectionId") Long collectionId);
}
