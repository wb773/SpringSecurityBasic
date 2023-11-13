package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestAccessController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello!";
    }

    @GetMapping("/auth/test")
    public String authTest() {
        return "This is an authenticated test endpoint.";
    }

    @GetMapping("/private")
    public String privateEndpoint() {
        return "This is a private endpoint.";
    }

    @GetMapping("/login")
    public String login() {
        return "This is a login endpoint. No authentication required.";
    }

}