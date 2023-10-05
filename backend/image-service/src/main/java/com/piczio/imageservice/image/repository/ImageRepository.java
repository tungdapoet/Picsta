package com.piczio.imageservice.image.repository;

import com.piczio.imageservice.image.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findAllById(List<Long> imageIds);
}
