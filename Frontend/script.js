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