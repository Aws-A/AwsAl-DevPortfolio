// Add 'active' class based on current URL
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Rotate title after 2 seconds
  setTimeout(function () {
    document.getElementById("title").style.transform = "rotate(-20deg)";
  }, 1000);
});

// Apply gradient fill after 3 seconds
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const text = document.getElementById("title");
    if (text) {
      text.setAttribute("fill", "url(#gradient)");
    }
  }, 2000);
});

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const h2 = document.querySelector(".hero h2");  // Target only the h2 inside .hero

    if (!h2) {
      console.log("h2 element not found!");
      return;
    }
    
    // Make h2 visible by changing opacity to 1 after 3 seconds
    h2.style.opacity = "1";
  }, 2000); // Delay for 3 seconds before showing h2
});

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const p = document.querySelector(".hero p");  // Target only the p inside .
    // hero
    p.style.opacity = "1";
    if (!p) {
      console.log("p element not found!");
      return;
    }

    // Split the p text into words
    const words = p.textContent.trim().split(/\s+/);  // Split by whitespace
    p.innerHTML = "";  // Clear the p content

    // Loop through the words and add animation
    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.classList.add("word");
      span.textContent = word;

      // Add space after each word
      const space = document.createTextNode(" ");

      // Add delay for each word animation
      span.style.animationDelay = `${index * 0.1}s`;
      p.appendChild(span);
      p.appendChild(space);
    });
  }, 3000);  // Wait for 3 seconds before starting animation
});

document.addEventListener("DOMContentLoaded", () => {
  const wheel = document.querySelector(".wheel");
  const image = document.querySelector(".image-skills");
  const wheelText = document.querySelector(".wheel-text");
  const h3 = document.querySelector(".reveal-title");
  const wheelContainer = document.querySelector(".wheel-container");

  let hasRotated = false;
  let rotation = 0;

  const steps = [
    {
      label: "Research",
      gradient: "linear-gradient(to right, #005c97, black)",
      imgSrc: "images/researchPorto.png",
      h3Text: "I dive deep into user needs, behaviors, and market trends <br> to uncover key insights.",
    },
    {
      label: "Analysis",
      gradient: "linear-gradient(to right, #0075be, black)",
      imgSrc: "images/analysisPorto.png",
      h3Text: "I examine user behaviours and data to identify patterns and chances for optimizing designs.",
    },
    {
      label: "Ideation",
      gradient: "linear-gradient(to right, #1e9cd7, black)",
      imgSrc: "images/ideationPorto.png",
      h3Text: "I embrace creative thinking and imagination to generate innovative ideas that enhance user experiences.",
    },
    {
      label: "Design",
      gradient: "linear-gradient(to right, #41b792, black)",
      imgSrc: "images/designPorto.png",
      h3Text: "I craft wireframes, prototypes, illustrations, and animations to elevate both user experience and interface design.",
    },
    {
      label: "Development",
      gradient: "linear-gradient(to right, #49c14c, black)",
      imgSrc: "images/developmentPorto.png",
      h3Text: "I bring design concepts to life by developing functional and smooth solutions that blend creativity with technology.",
    },
  ];

  const resetStep = {
    label: "Swirl Me",
    gradient: "linear-gradient(to right, #bababa, black)",
  };

  function updateWheel(step) {
    wheelText.textContent = step.label;
    wheelText.style.background = step.gradient;
    wheelText.style.backgroundClip = "text";
    wheelText.style.webkitBackgroundClip = "text";
    wheelText.style.color = "transparent";
    wheelText.style.webkitTextFillColor = "transparent";

    if (step.h3Text) {
      // Use innerHTML to allow the <br> tag to work
      h3.innerHTML = step.h3Text;  // <-- This is where the change is!
      h3.style.display = "block";
    }

    if (step.imgSrc) {
      image.src = step.imgSrc;
      image.style.display = "block";
    }
  }

    wheelContainer.addEventListener("click", () => {
    if (hasRotated) return;
    hasRotated = true;

    // Show elements
    image.style.display = "block";
    h3.style.display = "block";

    // Set transition always
    wheel.style.transition = "transform 0.2s ease";

    // Helper: get current rotation in degrees
    const getCurrentRotation = (el) => {
      const transform = window.getComputedStyle(el).transform;
      if (transform === "none") return 0;
      const values = transform.match(/matrix\(([^)]+)\)/)[1].split(", ");
      const a = parseFloat(values[0]);
      const b = parseFloat(values[1]);
      return Math.round(Math.atan2(b, a) * (180 / Math.PI));
    };

    const rotationIncrement = 360;
    let rotation = getCurrentRotation(wheel); // get actual current rotation

    // Start the swirl
    steps.forEach((step, index) => {
      setTimeout(() => {
        rotation += rotationIncrement;
        wheel.style.transform = `rotate(${rotation}deg)`;
        updateWheel(step);
      }, index * 5000); // Every 5 seconds
    });

    // After all steps, reset
    setTimeout(() => {
      rotation += rotationIncrement;
      wheel.style.transform = `rotate(${rotation}deg)`;

      // Update to "Swirl Me"
      wheelText.textContent = resetStep.label;
      wheelText.style.background = resetStep.gradient;
      wheelText.style.backgroundClip = "text";
      wheelText.style.webkitBackgroundClip = "text";
      wheelText.style.color = "transparent";
      wheelText.style.webkitTextFillColor = "transparent";

      // Hide h3 and image
      h3.style.display = "none";
      image.style.display = "none";

      hasRotated = false; // Allow click again!
    }, steps.length * 5000);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const eventoImg = document.querySelector('.evento');
  const mindquotaImg = document.querySelector('.mindquota');

  if (eventoImg) {
    eventoImg.addEventListener('mouseover', () => {
      eventoImg.src = 'images/eventoHover.png';
    });
    eventoImg.addEventListener('mouseout', () => {
      eventoImg.src = 'images/eventoNav.png';
    });
    eventoImg.addEventListener('click', () => {
      window.location.href = 'evento.html';
    });
  }

  if (mindquotaImg) {
    mindquotaImg.addEventListener('mouseover', () => {
      mindquotaImg.src = 'images/mindquotaHover.png';
    });
    mindquotaImg.addEventListener('mouseout', () => {
      mindquotaImg.src = 'images/mindquotaNav.png';
    });
    mindquotaImg.addEventListener('click', () => {
      window.location.href = 'mindquota.html';
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const eventoProjectImg = document.querySelector('#eventoProjectImg');
  const mindquotaProjectImg = document.querySelector('#mindquotaProjectImg');

  if (eventoProjectImg) {
    eventoProjectImg.addEventListener('mouseover', () => {
      eventoProjectImg.src = 'images/eventoProjectH.png';
    });
    eventoProjectImg.addEventListener('mouseout', () => {
      eventoProjectImg.src = 'images/eventoProject.png';
    });
    eventoProjectImg.addEventListener('click', () => {
      window.location.href = 'evento.html';
    });
  }

  if (mindquotaProjectImg) {
    mindquotaProjectImg.addEventListener('mouseover', () => {
      mindquotaProjectImg.src = 'images/mindquotaProjectH.png';
    });
    mindquotaProjectImg.addEventListener('mouseout', () => {
      mindquotaProjectImg.src = 'images/mindquotaProject.png';
    });
    mindquotaProjectImg.addEventListener('click', () => {
      window.location.href = 'mindquota.html';
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const linkedin = document.querySelector('.linkedin');
  const instagram = document.querySelector('.instagram');
  const ii = document.querySelector('.ii');

  if (linkedin) {
    linkedin.addEventListener('mouseover', () => {
      linkedin.src = 'images/linkedin-H.svg';
    });
    linkedin.addEventListener('mouseout', () => {
      linkedin.src = 'images/linkedin.svg';
    });
  }

  if (instagram) {
    instagram.addEventListener('mouseover', () => {
      instagram.src = 'images/instagram-H.svg';
    });
    instagram.addEventListener('mouseout', () => {
      instagram.src = 'images/instagram.svg';
    });
  }

  if (ii) {
    ii.addEventListener('mouseover', () => {
      ii.src = 'images/ii-H.svg';
    });
    ii.addEventListener('mouseout', () => {
      ii.src = 'images/ii.svg';
    });
  }
});

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const paragraphs = document.querySelectorAll('.myAreas p');
      const headings = document.querySelectorAll('h3');

      paragraphs.forEach(p => p.style.opacity = '1');
      headings.forEach(h => h.style.opacity = '1');
    }, 3000); // 3 seconds delay
  });

  document.addEventListener('DOMContentLoaded', () => {
    const projectsLink = document.getElementById("projects-link");
    const projectImages = document.querySelector(".project-images");
    const eventoImg = document.querySelector(".evento");
    const mindquotaImg = document.querySelector(".mindquota");
  
    // Function to toggle project images visibility
    const toggleProjectImages = () => {
      if (window.innerWidth < 600) {
        const isHidden = window.getComputedStyle(projectImages).display === "none";
        projectImages.style.display = isHidden ? "flex" : "none"; // Show or hide
      }
    };
  
    // Toggle project images visibility when "Projects" link is clicked (only for small screens)
    if (projectsLink && projectImages) {
      projectsLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior
        toggleProjectImages(); // Call the toggle function
      });
    }
  
    // Function to handle image click behavior
    const handleImageClick = (imgElement, hoverImageSrc) => {
      imgElement.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent click from propagating to the parent element
        if (!imgElement.dataset.clicked) {
          imgElement.src = hoverImageSrc; // Change to hover image
          imgElement.style.width = "25%"; // Set width to 25%
          imgElement.dataset.clicked = "true"; // Mark it as clicked to avoid repeated clicks
        }
      });
    };
  
    // Function to apply click behavior based on window width
    const applyClickBehavior = (imgElement, hoverImageSrc) => {
      if (window.innerWidth < 600) {
        handleImageClick(imgElement, hoverImageSrc);
      }
    };
  
    // Apply click behavior on page load and window resize
    if (eventoImg) {
      applyClickBehavior(eventoImg, "images/eventoHover.png");
      window.addEventListener('resize', () => {
        applyClickBehavior(eventoImg, "images/eventoHover.png");
      });
    }
  
    if (mindquotaImg) {
      applyClickBehavior(mindquotaImg, "images/mindquotaHover.png");
      window.addEventListener('resize', () => {
        applyClickBehavior(mindquotaImg, "images/mindquotaHover.png");
      });
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    const images = [
      { id: 'ux-img', onSrc: 'images/ux-on.png' },
      { id: 'dev-img', onSrc: 'images/dev-on.png' }
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const newSrc = images.find(i => i.id === img.id)?.onSrc;

          if (newSrc) {
            // Delay 2 seconds after this specific image is seen
            setTimeout(() => {
              img.src = newSrc;
            }, 2000);
          }

          // Stop observing this one image
          observer.unobserve(img);
        }
      });
    });

    images.forEach(({ id }) => {
      const imgElement = document.getElementById(id);
      if (imgElement) observer.observe(imgElement);
    });
  });