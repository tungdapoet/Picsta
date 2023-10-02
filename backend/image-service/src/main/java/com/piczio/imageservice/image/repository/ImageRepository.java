package com.piczio.imageservice.image.repository;

import com.piczio.imageservice.image.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {}
