function cekDomain() {
    const domain = document.getElementById("domainInput").value.trim().toLowerCase();
    const ext = document.getElementById("extension").value;
    const fullDomain = domain + ext;
    const result = document.getElementById("result");

    // Validate domain input
    if (domain === "") {
        result.innerHTML = "⚠️ Masukkan nama domain terlebih dahulu";
        result.style.color = "#fbbf24";
        return;
    }

    // Check for invalid characters
    const validPattern = /^[a-z0-9-]{1,}$/;
    if (!validPattern.test(domain)) {
        result.innerHTML = "⚠️ Domain hanya boleh berisi huruf, angka, dan tanda hubung";
        result.style.color = "#fbbf24";
        return;
    }

    // Check if domain starts or ends with hyphen
    if (domain.startsWith("-") || domain.endsWith("-")) {
        result.innerHTML = "⚠️ Domain tidak boleh dimulai atau diakhiri dengan tanda hubung";
        result.style.color = "#fbbf24";
        return;
    }

    const takenDomains = ["google.com", "facebook.com", "github.com", "dopal.com"];

    if (takenDomains.includes(fullDomain)) {
        result.innerHTML = "❌ Domain sudah digunakan";
        result.style.color = "#ef4444";
    } else {
        result.innerHTML = "✅ Domain tersedia: <strong>" + fullDomain + "</strong>";
        result.style.color = "#10b981";
    }
}

 // Initialize Lucide Icons
if (window.lucide) {
    lucide.createIcons();
} else {
    console.warn("Lucide icons library not loaded");
}

// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const isActive = mobileNav.classList.contains('active');
        // Change icon based on state
        if (isActive) {
            mobileBtn.innerHTML = '<i data-lucide="x"></i>';
        } else {
            mobileBtn.innerHTML = '<i data-lucide="menu"></i>';
        }
        if (window.lucide) {
            lucide.createIcons(); // Re-initialize icons
        }
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileBtn.innerHTML = '<i data-lucide="menu"></i>';
            if (window.lucide) {
                lucide.createIcons();
            }
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});