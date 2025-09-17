package com.example.portfoliobackend.Repository;

import com.example.portfoliobackend.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Feedbackrepo extends JpaRepository<Feedback, Long> {
}
