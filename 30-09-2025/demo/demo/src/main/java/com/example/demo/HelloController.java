package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    // This injects the value from application.yaml
    @Value("${app.message}")
    private String message;

    @GetMapping("/hello")
    public String hello() {
        return message;
    }
    
}
