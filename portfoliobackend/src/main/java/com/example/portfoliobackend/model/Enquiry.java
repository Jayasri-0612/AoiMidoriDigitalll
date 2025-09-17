package com.example.portfoliobackend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Enquiry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String subject;
    private String message;
}
