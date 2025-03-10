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

// Initialize the typewriter effect when the DOM is loaded
document.addEventListener("DOMContentLoaded", initTypewriterEffect);
