const grid = document.getElementById("postsGrid");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const searchInput = document.getElementById("search");
const categoryNav = document.getElementById("categoryNav");

let activeCategory = "all";

/* ================= CATEGORIES ================= */

function generateCategories() {
  const categories = [...new Set(posts.map(p => p.category))];

  categoryNav.innerHTML = "";

  const all = document.createElement("div");
  all.textContent = "All";
  all.className = "category-item active";

  all.onclick = () => {
    activeCategory = "all";
    setActive(all);
    renderPosts();
  };

  categoryNav.appendChild(all);

  categories.forEach(cat => {
    const el = document.createElement("div");
    el.textContent = cat;
    el.className = "category-item";

    el.onclick = () => {
      activeCategory = cat;
      setActive(el);
      renderPosts();
    };

    categoryNav.appendChild(el);
  });
}

function setActive(el) {
  document.querySelectorAll(".category-item")
    .forEach(i => i.classList.remove("active"));

  el.classList.add("active");
}

/* ================= POSTS ================= */

function renderPosts() {
  const search = searchInput.value.toLowerCase();
  grid.innerHTML = "";

  posts.forEach(post => {

    if (
      !post.title.toLowerCase().includes(search) &&
      !(post.content || "").toLowerCase().includes(search)
    ) return;

    if (activeCategory !== "all" && post.category !== activeCategory) return;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${post.cover}">
      <div class="card-content">
        <h3>${post.title}</h3>
        <div class="card-category">${post.category}</div>
      </div>
    `;

    card.onclick = () => openPost(post);

    grid.appendChild(card);
  });
}

/* ================= MODAL ================= */

function openPost(post) {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  modalContent.innerHTML = `
    <div class="post-header">
      <span class="post-title">${post.title}</span>
      <span class="close-btn" id="closeBtn">✕</span>
    </div>

    <div class="progress-bar">
      <div id="progressFill"></div>
    </div>

    <div class="post-content">
      ${post.content}
    </div>

    <div class="gallery">
      ${(post.images || []).map(img => `
        <img src="${img}">
      `).join("")}
    </div>
  `;

  // CLOSE BUTTON
  document.getElementById("closeBtn").onclick = closeModal;

  // ================= PROGRESS BAR =================
  modal.onscroll = () => {
    const scrollTop = modal.scrollTop;
    const scrollHeight = modal.scrollHeight - modal.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    const fill = document.getElementById("progressFill");
    if (fill) fill.style.width = progress + "%";
  };

  

  // ================= IMAGES =================
  const allImages = [];
  const images = modalContent.querySelectorAll("img");

  images.forEach(img => {
    allImages.push(img.src);
  });

  images.forEach((img, index) => {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {
      openLightbox(index, allImages);
    });
  });
}

/* ================= CLOSE ================= */

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

modal.onclick = (e) => {
  if (e.target === modal) closeModal();
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ================= LIGHTBOX ================= */

let currentImages = [];
let currentIndex = 0;

function openLightbox(startIndex, imagesArray) {
  currentImages = imagesArray;
  currentIndex = startIndex;

  const lb = document.createElement("div");
  lb.className = "lightbox";

  lb.innerHTML = `
    <span class="lb-arrow left">&#10094;</span>
    <img src="${currentImages[currentIndex]}" id="lightbox-img">
    <span class="lb-arrow right">&#10095;</span>
  `;

  document.body.appendChild(lb);

  const img = document.getElementById("lightbox-img");

  lb.onclick = (e) => {
    if (e.target === lb) {
      lb.remove();
      document.onkeydown = null;
    }
  };

  lb.querySelector(".left").onclick = (e) => {
    e.stopPropagation();
    prevImage(img);
  };

  lb.querySelector(".right").onclick = (e) => {
    e.stopPropagation();
    nextImage(img);
  };

  let startX = 0;

  img.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  img.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (endX - startX > 50) prevImage(img);
    if (startX - endX > 50) nextImage(img);
  });

  document.onkeydown = (e) => {
    if (e.key === "ArrowRight") nextImage(img);
    if (e.key === "ArrowLeft") prevImage(img);
    if (e.key === "Escape") lb.remove();
  };
}

function nextImage(img) {
  currentIndex = (currentIndex + 1) % currentImages.length;
  img.src = currentImages[currentIndex];
}

function prevImage(img) {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;

  img.src = currentImages[currentIndex];
}

/* ================= INIT ================= */

searchInput.oninput = renderPosts;

generateCategories();
renderPosts();
