// --- 1. Portfolio Data ---
const portfolioData = [
  {
    id: 1,
    title: "High-Retention TikTok Hacks",
    category: "short-form",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Tech Startup Brand Story",
    category: "long-form",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Valorant Montage #4",
    category: "gaming",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Champions League Highlights",
    category: "football",
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Sneaker Drop Campaign",
    category: "ecommerce",
    img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "The Artisan's Craft",
    category: "documentary",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 7,
    title: "Cinematic Forest LUT Pack",
    category: "color-grading",
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 8,
    title: "AMV Edit - Demon Slayer",
    category: "anime",
    img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 9,
    title: "Fitness App Launch",
    category: "ads",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 10,
    title: "Reels Viral Format",
    category: "short-form",
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

// --- 2. DOM Elements ---
const gridContainer = document.getElementById("portfolioGrid");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("videoModal");
const modalIframe = document.getElementById("modalVideoIframe");
const closeModal = document.querySelector(".close-modal");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// --- 3. Responsive Menu Navigation ---
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close nav menu on small links navigation
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// --- 4. Render Portfolio Items ---
function renderPortfolio(items) {
  gridContainer.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "portfolio-item show";
    card.setAttribute("data-category", item.category);
    const displayCategory = item.category.replace("-", " ");

    card.innerHTML = `
            <div class="item-thumb">
                <img src="${item.img}" alt="${item.title}" loading="lazy">
                <i class="fas fa-play-circle play-icon"></i>
            </div>
            <div class="item-info">
                <span class="item-category">${displayCategory}</span>
                <h3 class="item-title">${item.title}</h3>
            </div>
        `;

    card.addEventListener("click", () => {
      modalIframe.src = item.videoUrl;
      modal.style.display = "block";
    });

    gridContainer.appendChild(card);
  });
}

// Initial render
renderPortfolio(portfolioData);

// --- 5. Filtering Logic ---
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    if (filterValue === "all") {
      renderPortfolio(portfolioData);
    } else {
      const filteredData = portfolioData.filter(
        (item) => item.category === filterValue,
      );
      renderPortfolio(filteredData);
    }
  });
});

// --- 6. Modal Lightbox Logic ---
function stopModalVideo() {
  modal.style.display = "none";
  modalIframe.src = "";
}

closeModal.addEventListener("click", stopModalVideo);
window.addEventListener("click", (e) => {
  if (e.target === modal) stopModalVideo();
});

// Smooth Scrolling Layout Setup
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// --- 7. Google Sheets Backend Automation Forms API Pipeline ---
const GOOGLE_SCRIPT_WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycbzKnS2GC6iQMdH_7SeJ-MxXu-tlxOH0CikKxK7Bt0ACVZbxbd6uq1oIO-Yq8P1FNFrp/exec";

function handleFormSubmission(formId, statusId) {
  const formElement = document.getElementById(formId);
  const statusElement = document.getElementById(statusId);

  if (!formElement) return;

  formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    statusElement.textContent = "Processing subscription...";
    statusElement.className = "form-status";

    // if (GOOGLE_SCRIPT_WEBAPP_URL === 'https://script.google.com/macros/s/AKfycbzKnS2GC6iQMdH_7SeJ-MxXu-tlxOH0CikKxK7Bt0ACVZbxbd6uq1oIO-Yq8P1FNFrp/exec') {
    //     statusElement.textContent = "Form code active! Connect Google Apps Script URL to log data.";
    //     statusElement.className = "form-status success";
    //     formElement.reset();
    //     return;
    // }

    const formData = new FormData(formElement);
    // Inject sheet contextual identities into the payload parsing engine
    formData.append("formIdentifier", formId);

    fetch(GOOGLE_SCRIPT_WEBAPP_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          statusElement.textContent = "Data recorded successfully. Thank you!";
          statusElement.className = "form-status success";
          formElement.reset();
        } else {
          throw new Error(data.error);
        }
      })
      .catch((error) => {
        console.error("Submission Error:", error);

        statusElement.textContent = "Submission Error: " + error.message;

        statusElement.className = "form-status error";
      });
  });
}

// Map forms pipelines to listeners
handleFormSubmission("emailCollectorForm", "newsletterStatus");
handleFormSubmission("contactForm", "contactStatus");
