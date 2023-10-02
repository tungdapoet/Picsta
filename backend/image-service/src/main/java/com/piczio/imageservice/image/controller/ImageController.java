package com.piczio.imageservice.image.controller;

import com.piczio.imageservice.image.dto.ImageDto;
import com.piczio.imageservice.image.service.ImageService;
import lombok.AllArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;

@RestController
@RequestMapping("/images")
@AllArgsConstructor
public class ImageController {
    private ImageService imageService;

    @PostMapping("upload")
    public ImageDto uploadImage(@RequestPart MultipartFile file,@RequestParam("description") String description) {
        return imageService.uploadImage(file, description);
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
}
