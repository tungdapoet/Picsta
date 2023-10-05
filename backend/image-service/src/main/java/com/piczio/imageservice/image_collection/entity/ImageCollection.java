package com.piczio.imageservice.image_collection.entity;

import com.piczio.imageservice.collection.entity.Collection;
import com.piczio.imageservice.image.entity.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ImageCollection {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name="collection_id")
    private Collection collection;

    @ManyToOne
    @JoinColumn(name="image_id")
    private Image image;
}
