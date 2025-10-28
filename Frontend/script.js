// ====== FEEDBACK ======
function sendFeedback(feedbackData) {
    console.log("Sending feedback:", feedbackData);
    
    fetch("http://localhost:8080/api/feedback", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(feedbackData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert("✅ Feedback submitted successfully!");
        console.log("Feedback saved:", data);
        document.getElementById("feedbackForm").reset();
    })
    .catch(err => {
        console.error("Error saving feedback:", err);
        alert("❌ Error submitting feedback. Check console for details.");
    });
}

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const feedbackData = {
        name: document.getElementById("feedbackName").value,
        email: document.getElementById("feedbackEmail").value,
        message: document.getElementById("feedbackMessage").value
    };
    sendFeedback(feedbackData);
});

// ====== ENQUIRY ======
function sendEnquiry(enquiryData) {
    console.log("Sending enquiry:", enquiryData);
    
    fetch("http://localhost:8080/api/enquiry", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(enquiryData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert("✅ Enquiry submitted successfully!");
        console.log("Enquiry saved:", data);
        document.getElementById("enquiryForm").reset();
    })
    .catch(err => {
        console.error("Error saving enquiry:", err);
        alert("❌ Error submitting enquiry. Check console for details.");
    });
}

document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const enquiryData = {
        name: document.getElementById("enquiryName").value,
        email: document.getElementById("enquiryEmail").value,
        subject: document.getElementById("enquirySubject").value,
        message: document.getElementById("enquiryMessage").value
    };
    sendEnquiry(enquiryData);
});

// ====== BOOK A SLOT ======
function sendBooking(bookingData) {
    console.log("Sending booking:", bookingData);
    
    fetch("http://localhost:8080/api/booking", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert("✅ Slot booked successfully!");
        console.log("Booking saved:", data);
        document.getElementById("bookingForm").reset();
    })
    .catch(err => {
        console.error("Error saving booking:", err);
        alert("❌ Error booking slot. Check console for details.");
    });
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const bookingData = {
        name: document.getElementById("bookingName").value,
        email: document.getElementById("bookingEmail").value,
        service: document.getElementById("bookingService").value,
        date: document.getElementById("bookingDate").value,
        time: document.getElementById("bookingTime").value,
        message: document.getElementById("bookingMessage").value
    };
    sendBooking(bookingData);
});

// Project Filtering with Client Overview
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const clientsOverview = document.getElementById('clientsOverview');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter timeline items
            timelineItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
            
            // Show/hide clients overview for digital marketing
            if (filter === 'marketing') {
                clientsOverview.classList.remove('hidden');
            } else {
                clientsOverview.classList.add('hidden');
            }
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
