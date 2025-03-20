// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      console.log('Menu toggled');
    });
  } else {
    console.error('Nav toggle or nav menu elements not found');
  }

  // Handle nav link clicks (close menu when link is clicked on mobile)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
      }
    });
  });

  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  if (themeToggle) {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDarkMode = body.classList.contains('dark-mode');
      
      // Update icon based on theme
      themeToggle.innerHTML = isDarkMode 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
      
      // Save preference to localStorage
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
  }
});

  // Smooth Scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute("href"));
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Unified Theme Toggle (using dark-mode class consistently)
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  
  if (themeToggle) {
    // Set theme based on localStorage on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Theme toggle click handler
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDarkMode = body.classList.contains("dark-mode");
      themeToggle.innerHTML = isDarkMode
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });
  } else {
    console.error('Theme toggle element not found. Check if ID "theme-toggle" exists.');
  }

  // Project Filter
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const projects = document.querySelectorAll(".project");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");
      // Filter projects
      const filter = button.getAttribute("data-filter");
      projects.forEach((project) => {
        if (
          filter === "all" ||
          project.getAttribute("data-category") === filter
        ) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });

  // Fade-in Animation on Scroll
  const fadeElements = document.querySelectorAll(".fade-in");

  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    fadeElements.forEach((element) => {
      observer.observe(element);
    });
  }// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      console.log('Menu toggled');
    });
  } else {
    console.error('Nav toggle or nav menu elements not found');
  }

  // Handle nav link clicks (close menu when link is clicked on mobile)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
      }
    });
  });

  // Improved Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  
  // Debug the theme toggle element
  console.log('Theme toggle element:', themeToggle);
  
  if (themeToggle) {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    console.log('Saved theme:', savedTheme);
    
    // Apply saved theme on page load
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      // Make sure dark mode is removed if not saved as dark
      document.body.classList.remove('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Theme toggle event listener with debugging
    themeToggle.addEventListener('click', () => {
      console.log('Theme toggle clicked');
      document.body.classList.toggle('dark-mode');
      
      const isDarkMode = document.body.classList.contains('dark-mode');
      console.log('Dark mode active:', isDarkMode);
      
      // Update icon based on theme
      themeToggle.innerHTML = isDarkMode 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
      
      // Save preference to localStorage
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      console.log('Theme saved to localStorage');
    });
  } else {
    console.error('Theme toggle element not found. Make sure an element with ID "theme-toggle" exists.');
  }
});