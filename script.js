// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
});

// Navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// --- COUNTER ANIMATION (kept) ---
const animateCounters = () => {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
};

// Run counters immediately (NO SCROLL TRIGGER)
animateCounters();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      navLinks.classList.remove("active");
    }
  });
});

// Contact Form Handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    const message = `Hello! I'm interested in SinoBridge Media services.
        
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Company: ${data.company || "Not provided"}
Service Interest: ${data.service}

Message: ${data.message}`;

    const whatsappURL = `https://wa.me/918586001783?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    contactForm.reset();
    alert("Thank you! Redirecting you to WhatsApp...");
  });
}

// Service cards hover effect
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector(".hero-background");
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add("loaded");
        imageObserver.unobserve(img);
      }
    });
  });

  const images = document.querySelectorAll("img");
  images.forEach((img) => imageObserver.observe(img));
}
