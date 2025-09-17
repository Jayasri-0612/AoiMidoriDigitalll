package com.example.portfoliobackend.Repository;

import com.example.portfoliobackend.model.Enquiry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Enquiryrepo extends JpaRepository<Enquiry, Long> {
}
