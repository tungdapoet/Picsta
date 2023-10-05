package com.piczio.imageservice.collection.repository;

import com.piczio.imageservice.collection.entity.Collection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollectionRepository extends JpaRepository<Collection, Long> {
}
