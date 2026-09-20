document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const main = document.querySelector("main");
  const currentYear = document.getElementById("currentYear");

  // Update footer year
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Mobile navigation menu
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  }

  if (!main) return;

  // Save the original homepage content
  const homeContent = main.innerHTML;

  const collections = {
    "anime": {
      title: "Anime Animations",
      description: "Explore anime-inspired animation styles.",
      styles: [
        "Anime Character",
        "Anime Action",
        "Anime Background",
        "Anime Transformation"
      ]
    },
    "cartoon": {
      title: "Cartoon Animations",
      description: "Explore fun and colorful cartoon styles.",
      styles: [
        "2D Cartoon",
        "3D Cartoon",
        "Cute Character",
        "Funny Animation"
      ]
    },
    "3d": {
      title: "3D Animations",
      description: "Explore 3D animation styles.",
      styles: [
        "3D Character",
        "3D Environment",
        "3D Motion",
        "3D Effects"
      ]
    },
    "effects": {
      title: "Visual Effects",
      description: "Explore creative visual effects.",
      styles: [
        "Glow Effect",
        "Particle Effect",
        "Magic Effect",
        "Energy Effect"
      ]
    }
  };

  function showHome() {
    main.innerHTML = homeContent;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showCollection(collectionKey) {
    const collection = collections[collectionKey];

    if (!collection) {
      showHome();
      return;
    }

    main.innerHTML = `
      <section class="collection-page">
        <button class="back-button" id="backHome">
          ← Back to Home
        </button>

        <div class="collection-heading">
          <p class="eyebrow">ANIMATION COLLECTION</p>
          <h1>${collection.title}</h1>
          <p>${collection.description}</p>
        </div>

        <div class="style-grid">
          ${collection.styles.map((style, index) => `
            <button
              class="style-card"
              data-style="${style}"
              data-collection="${collectionKey}"
            >
              <span class="style-number">
                ${(index + 1).toString().padStart(2, "0")}
              </span>
              <h2>${style}</h2>
              <span class="style-open">Explore style →</span>
            </button>
          `).join("")}
        </div>
      </section>
    `;

    document.getElementById("backHome").addEventListener("click", showHome);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showStyle(styleName, collectionKey) {
    main.innerHTML = `
      <section class="style-preview-page">
        <button class="back-button" id="backCollection">
          ← Back to Collection
        </button>

        <div class="style-preview">
          <p class="eyebrow">STYLE PREVIEW</p>
          <h1>${styleName}</h1>
          <p>
            You selected the ${styleName} style.
            More animation features can be added here.
          </p>

          <div class="preview-placeholder">
            <span>✨</span>
            <h2>${styleName}</h2>
            <p>Your animation preview will appear here.</p>
          </div>

          <button class="primary-button" id="backToStyles">
            Explore More Styles
          </button>
        </div>
      </section>
    `;

    document.getElementById("backCollection").addEventListener("click", () => {
      showCollection(collectionKey);
    });

    document.getElementById("backToStyles").addEventListener("click", () => {
      showCollection(collectionKey);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Handle collection links without opening another HTML file
  document.addEventListener("click", (event) => {
    const collectionLink = event.target.closest(".collection-link");

    if (collectionLink) {
      const href = collectionLink.getAttribute("href") || "";
      const collectionKey = new URL(
        href,
        window.location.href
      ).searchParams.get("collection");

      if (collectionKey && collections[collectionKey]) {
        event.preventDefault();
        showCollection(collectionKey);
      }
    }

    const styleCard = event.target.closest(".style-card");

    if (styleCard) {
      const styleName = styleCard.dataset.style;
      const collectionKey = styleCard.dataset.collection;

      showStyle(styleName, collectionKey);
    }
  });

  // Spanish speech function, if used elsewhere on the site
  window.speakSpanish = function (text) {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support speech playback.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    utterance.rate = 0.85;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  };
});
