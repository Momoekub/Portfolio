// ===== Mobile Navigation Toggle =====
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  // Toggle mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking on nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenuBtn.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// ===== Parallax: translate layers on scroll =====
console.log('Parallax script loaded');   
document.addEventListener('scroll', () => {
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  parallaxLayers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const yPos = window.scrollY * speed;
    layer.style.transform = `translateY(${yPos}px)`;
  });
});

// ===== Reveal Animation =====
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(element => {
  observer.observe(element);
});

// ===== Animate skill bars when visible =====
document.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.bar i');
  skillBars.forEach(bar => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        bar.style.width = bar.getAttribute('data-width');
        observer.disconnect();
      }
    });
    observer.observe(bar);
  });
});

// ===== Job title rotation animation =====
document.addEventListener("DOMContentLoaded", () => {
  const jobTitles = [
    "Head of Development — Team Leadership & Solutions",
    "Full-stack Developer — Web & Cloud",
    "Backend Developer — Node & Kotlin", 
    "Frontend Developer — React & Next.js",
    "Data Scientist — Python & ML",
    "DevOps Engineer — Docker & CI/CD"
  ];

  const jobTitleElement = document.getElementById("job-title");
  let index = 0;

  function changeJobTitle() {
    // fade out
    jobTitleElement.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % jobTitles.length;
      jobTitleElement.textContent = jobTitles[index];
      // fade in
      jobTitleElement.style.opacity = 1;
    }, 400);
  }

  setInterval(changeJobTitle, 3000); // เปลี่ยนทุก 3 วินาที
});

// ===== Enhanced GitHub card interactions =====
document.addEventListener('DOMContentLoaded', () => {
  const githubCard = document.querySelector('.github-card');
  const githubBtn = document.querySelector('.github-btn');
  
  if (githubCard) {
    // Add mouse move effect for GitHub card (only on desktop)
    if (window.innerWidth > 768) {
      githubCard.addEventListener('mousemove', (e) => {
        const rect = githubCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        githubCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.01)`;
      });
      
      githubCard.addEventListener('mouseleave', () => {
        githubCard.style.transform = '';
      });
    }
  }
  
  // GitHub button click effect
  if (githubBtn) {
    githubBtn.addEventListener('click', (e) => {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = githubBtn.getBoundingClientRect();
      const size = Math.max(rect.height, rect.width);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
      `;
      
      githubBtn.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  }
});

// ===== Add typing effect to GitHub description =====
document.addEventListener('DOMContentLoaded', () => {
  const githubDesc = document.querySelector('.github-content p');
  if (githubDesc) {
    const originalText = githubDesc.textContent;
    githubDesc.textContent = '';
    
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        typeText(githubDesc, originalText, 30);
        observer.disconnect();
      }
    });
    
    observer.observe(githubDesc);
  }
});

function typeText(element, text, delay) {
  let index = 0;
  
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, delay);
    }
  }
  
  type();
}

// ===== Add smooth scroll behavior for navigation =====
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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

// ===== Add loading animation for GitHub stats =====
document.addEventListener('DOMContentLoaded', () => {
  const statItems = document.querySelectorAll('.stat-item');
  
  statItems.forEach((item, index) => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          item.style.animation = `slideInFromLeft 0.6s ease forwards`;
        }, index * 200);
        observer.disconnect();
      }
    });
    
    observer.observe(item);
  });
});

// ===== Add particle effect to GitHub icon on hover =====
document.addEventListener('DOMContentLoaded', () => {
  const githubIcon = document.querySelector('.github-icon');
  
  if (githubIcon) {
    githubIcon.addEventListener('mouseenter', () => {
      createParticles(githubIcon);
    });
  }
});

function createParticles(container) {
  for (let i = 0; i < 6; i++) {
    const particle = document.createElement('div');
    const randomX = Math.random() * 100 - 50;
    const randomY = Math.random() * 100 - 50;
    
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      pointer-events: none;
      top: 50%;
      left: 50%;
      --random-x: ${randomX}px;
      --random-y: ${randomY}px;
      animation: particleFloat 1.5s ease-out forwards;
    `;
    
    container.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 1500);
  }
}

// ===== Handle window resize for responsive behavior =====
window.addEventListener('resize', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (window.innerWidth > 768) {
    // Reset mobile menu state on desktop
    mobileMenuBtn.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ===== Add intersection observer for fade-in animations =====
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.card, .skill, .github-card');
  
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    fadeObserver.observe(element);
  });
});

// ===== Add navbar scroll effect =====
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) {
    nav.style.background = 'linear-gradient(180deg, rgba(15,23,36,0.9), rgba(11,18,32,0.8))';
    nav.style.backdropFilter = 'blur(12px)';
  } else {
    nav.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))';
    nav.style.backdropFilter = 'blur(6px)';
  }
});

// ===== Add loading state for form submission =====
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const submitBtn = form.querySelector('button[type="submit"]');
  
  if (form && submitBtn) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Add loading state
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
      
      // Simulate sending (replace with actual form handling)
      setTimeout(() => {
        submitBtn.textContent = '✓ Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
          submitBtn.style.background = '';
          form.reset();
        }, 2000);
      }, 1500);
    });
  }
});