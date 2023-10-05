package com.piczio.imageservice.image.types;

import lombok.*;

import java.util.List;

@Getter
@Setter
public class Pagination<T> {
    private List<T> data;
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;

    public Pagination(List<T> data, int page, int size) {
        this.data = data;
        this.page = page;
        this.size = size;
    }
}
