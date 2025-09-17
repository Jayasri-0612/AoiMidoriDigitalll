package com.example.portfoliobackend.Controller;

import com.example.portfoliobackend.model.*;
import com.example.portfoliobackend.Repository.*;
import com.example.portfoliobackend.Services.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5500", "http://127.0.0.1:5500"})
public class Controller {

    @Autowired private Feedbackrepo feedbackrepo;
    @Autowired private Enquiryrepo enquiryrepo;
    @Autowired private Bookingrepo bookingrepo;
    @Autowired private EmailService emailService;

    // ---------- FEEDBACK ----------
    @GetMapping("/feedback")
    public List<Feedback> getAllFeedback() {
        return feedbackrepo.findAll();
    }

    @PostMapping("/feedback")
    public Feedback saveFeedback(@RequestBody Feedback feedback) {
        Feedback saved = feedbackrepo.save(feedback);
        try {
            emailService.sendEmail(
                "jayasrimurugan200@gmail.com",
                "New Feedback from " + feedback.getName(),
                "Name: " + feedback.getName() + "\nEmail: " + feedback.getEmail() + "\nMessage:\n" + feedback.getMessage()
            );
        } catch (Exception e) {
            System.err.println("Failed to send feedback email: " + e.getMessage());
        }
        return saved;
    }

    // ---------- ENQUIRY ----------
    @GetMapping("/enquiry")
    public List<Enquiry> getAllEnquiries() {
        return enquiryrepo.findAll();
    }

    @PostMapping("/enquiry")
    public Enquiry saveEnquiry(@RequestBody Enquiry enquiry) {
        Enquiry saved = enquiryrepo.save(enquiry);
        try {
            emailService.sendEmail(
                "jayasrimurugan200@gmail.com",
                "New Enquiry from " + enquiry.getName(),
                "Name: " + enquiry.getName() + "\nEmail: " + enquiry.getEmail() +
                "\nSubject: " + enquiry.getSubject() + "\nMessage:\n" + enquiry.getMessage()
            );
        } catch (Exception e) {
            System.err.println("Failed to send enquiry email: " + e.getMessage());
        }
        return saved;
    }

    // ---------- BOOKING ----------
    @GetMapping("/booking")
    public List<Booking> getAllBookings() {
        return bookingrepo.findAll();
    }

    @PostMapping("/booking")
    public Booking saveBooking(@RequestBody Booking booking) {
        Booking saved = bookingrepo.save(booking);
        try {
            emailService.sendEmail(
                "jayasrimurugan200@gmail.com",
                "New Booking from " + booking.getName(),
                "Name: " + booking.getName() + "\nEmail: " + booking.getEmail() +
                "\nService: " + booking.getService() + "\nDate: " + booking.getDate() +
                "\nTime: " + booking.getTime() + "\nMessage:\n" + booking.getMessage()
            );
        } catch (Exception e) {
            System.err.println("Failed to send booking email: " + e.getMessage());
        }
        return saved;
    }
}