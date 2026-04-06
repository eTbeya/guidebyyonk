const grid = document.getElementById("postsGrid");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const searchInput = document.getElementById("search");
const categoryNav = document.getElementById("categoryNav");

let activeCategory = "all";

/* CATEGORIES */
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

/* POSTS */
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
      <h3>${post.title}</h3>
    `;

    card.onclick = () => openPost(post);

    grid.appendChild(card);
  });
}

/* MODAL */
function openPost(post) {
  modal.style.display = "flex";

  modalContent.innerHTML = `
    <span class="close-btn" onclick="closeModal()">X</span>
    <h2>${post.title}</h2>

    <div class="post-content">${post.content}</div>

    <div class="gallery">
      ${post.images.map(img => `
        <img src="${img}" class="gallery-img">
      `).join("")}
    </div>
  `;

  // 👉 ТУК е ключът
  document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
      openLightbox(img.src);
    });
  });
}

function closeModal() {
  modal.style.display = "none";
}

modal.onclick = (e) => {
  if (e.target === modal) closeModal();
};

/* LIGHTBOX */
function openLightbox(src) {
  const lb = document.createElement("div");
  lb.className = "lightbox";

  lb.innerHTML = `<img src="${src}">`;

  lb.onclick = () => lb.remove();

  document.body.appendChild(lb);
}

/* INIT */
searchInput.oninput = renderPosts;

generateCategories();
renderPosts();
