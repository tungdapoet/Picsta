package com.piczio.imageservice.image.controller;

import com.piczio.imageservice.image.dto.ImageDto;
import com.piczio.imageservice.image.dto.ImageUploadRequestDto;
import com.piczio.imageservice.image.service.ImageService;
import com.piczio.imageservice.image.types.Pagination;
import com.piczio.imageservice.kafka.service.ImageServiceProducer;
import lombok.AllArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.time.LocalDateTime;

@RestController
@RequestMapping("api/v1/images")
@AllArgsConstructor
public class ImageController {

    private final ImageService imageService;

    private final ImageServiceProducer imageServiceProducer;

    @GetMapping
    public Pagination<ImageDto> getImageList(int page, int size) {
        return imageService.getImageList(page, size);
    }

    @PostMapping("upload")
    public LocalDateTime uploadImage(@RequestPart MultipartFile file) {
        ImageUploadRequestDto imageDto = imageService.uploadImage(file);
        imageServiceProducer.sendImageMetadataRequest(imageDto.getImageUrl(), imageDto.getUploadDate());
        return imageDto.getUploadDate();
    }

    @GetMapping("/download/{fileName}")
    public ResponseEntity<Resource> downloadImage(@PathVariable String fileName) {
        try {
            InputStream is = imageService.downloadImage(fileName);
            String contentType = is.getClass().getMethod("getContentType").invoke(is).toString();
            Resource resource = new InputStreamResource(is);

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .body(resource);

        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteImage(@RequestParam Long imageId) throws ChangeSetPersister.NotFoundException {
        imageService.deleteImage(imageId);
        return ResponseEntity.ok().build();
    }
}
