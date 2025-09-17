package com.example.portfoliobackend.Repository;

import com.example.portfoliobackend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Bookingrepo extends JpaRepository<Booking, Long> {
}
