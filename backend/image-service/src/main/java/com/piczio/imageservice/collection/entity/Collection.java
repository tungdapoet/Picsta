package com.piczio.imageservice.collection.entity;

import com.piczio.imageservice.image_collection.entity.ImageCollection;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Collection {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(name="user_id", nullable = false)
    private Long userId;

    @OneToMany(mappedBy="collection")
    private List<ImageCollection> imageCollections;
}
