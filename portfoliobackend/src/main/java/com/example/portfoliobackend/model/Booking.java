package com.example.portfoliobackend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String service;
    private String date;
    private String time;
    private String message;
}
