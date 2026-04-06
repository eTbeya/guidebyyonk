const grid = document.getElementById("postsGrid");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const searchInput = document.getElementById("search");
const categoryNav = document.getElementById("categoryNav");

let activeCategory = "all";

/* ---------------- CATEGORIES ---------------- */

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

/* ---------------- POSTS ---------------- */

function renderPosts() {
  const search = searchInput.value.toLowerCase();

  grid.innerHTML = "";

  posts.forEach(post => {
    const matchSearch =
      post.title.toLowerCase().includes(search) ||
      post.content.toLowerCase().includes(search);

    const matchCategory =
      activeCategory === "all" || post.category === activeCategory;

    if (!matchSearch || !matchCategory) return;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${post.cover}" />
      <h3>${post.title}</h3>
      <p>${post.category}</p>
    `;

    card.onclick = () => openPost(post);

    grid.appendChild(card);
  });
}

/* ---------------- MODAL ---------------- */

function openPost(post) {
  modal.style.display = "flex";

  modalContent.innerHTML = `
    <div class="modal-header">
      <span class="close-btn" onclick="closeModal()">✕</span>
      <h2>${post.title}</h2>
    </div>

    <div class="post-content">${post.content}</div>

    <div class="gallery ${post.images.length === 1 ? 'single' : ''}">
      ${post.images.map(img => `
        <img src="${img}" onclick="openLightbox('${img}')"/>
      `).join("")}
    </div>
  `;

  modalContent.style.transform = "translateY(0)";
}

function closeModal() {
  modal.style.display = "none";
  modalContent.style.transform = "translateY(0)";
}

/* click outside */
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

/* ESC */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});


/* ---------------- LIGHTBOX ---------------- */

function openLightbox(src) {
  const lb = document.createElement("div");
  lb.className = "lightbox";

  lb.innerHTML = `<img src="${src}" />`;

  lb.onclick = () => lb.remove();

  document.body.appendChild(lb);
}

/* ---------------- EVENTS ---------------- */

searchInput.oninput = renderPosts;

/* ---------------- INIT ---------------- */

generateCategories();
renderPosts();
