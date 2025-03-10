function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Text animation for the profile section
function initTypewriterEffect() {
  const titles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Java Spring Developer",
  ];
  const typingElement = document.querySelector(".typing-text");
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100; // Delay between typing each character
  let erasingDelay = 50; // Delay between erasing each character
  let newTitleDelay = 2000; // Delay before starting to type a new title

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      // Remove a character
      typingElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = erasingDelay;
    } else {
      // Add a character
      typingElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 100;
    }

    // Change direction if we've typed the full word
    if (!isDeleting && charIndex === currentTitle.length) {
      typingDelay = newTitleDelay; // Pause at the end of the word
      isDeleting = true;
      // When we've deleted everything, move to the next title
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }

    setTimeout(type, typingDelay);
  }

  // Start the animation
  setTimeout(type, 1000);
}

// Initialize particles.js for the profile background
function initParticlesJS() {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#3a86ff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#8338ec",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
}

// Animate elements when they become visible
function handleElementsAnimation() {
  // Get all elements with the 'hidden' class
  const hiddenElements = document.querySelectorAll(".hidden");

  // Define a function to check if an element is in viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to check elements and animate them if they're visible
  function checkElements() {
    hiddenElements.forEach((el) => {
      if (isInViewport(el)) {
        // Add the animation class that corresponds to the element
        if (
          el.classList.contains("fadeInUp") ||
          el.classList.contains("fadeInLeft") ||
          el.classList.contains("fadeInRight")
        ) {
          el.style.opacity = "1";
        }
      }
    });
  }

  // Initial check
  checkElements();

  // Check on scroll
  window.addEventListener("scroll", checkElements);
}

// Function to initialize all effects
function initAllEffects() {
  // Initialize typewriter effect
  initTypewriterEffect();

  // Initialize particles.js
  initParticlesJS();

  // Initialize scroll animations
  handleElementsAnimation();

  // Manually trigger the fade-in animations for the profile section
  setTimeout(() => {
    document.querySelectorAll("#profile .hidden").forEach((el) => {
      el.style.opacity = "1";
    });
  }, 100);
}

// Initialize all effects when the DOM is loaded
document.addEventListener("DOMContentLoaded", initAllEffects);
