package com.piczio.imageservice.image.entity;

import com.piczio.imageservice.image_collection.entity.ImageCollection;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Image {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String imageUrl;

    @Column(nullable = false)
    private LocalDateTime uploadDate;

    @Column(name="user_id", nullable = false)
    private Long userId;

    @Column(nullable = false)
    private String description;

    @OneToMany(mappedBy="image")
    private List<ImageCollection> imageCollections;
}