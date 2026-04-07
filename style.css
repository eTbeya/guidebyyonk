/* ================= BASE ================= */
body {
  margin: 0;
  font-family: Arial;
  background:
    radial-gradient(circle at 20% 30%, rgba(0,240,255,0.08), transparent),
    radial-gradient(circle at 80% 70%, rgba(255,0,200,0.08), transparent),
    #0a0a12;
  color: white;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

:root {
  --navbar-height: 90px;
}

::selection {
  background: #ff00c8;
  color: white;
}

/* ================= NAVBAR ================= */
.topbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(10px);

  z-index: 1000;
}

/* SEARCH */
#search {
  padding: 12px 14px;
  width: 280px;

  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.08);

  background: rgba(255,255,255,0.05);
  color: white;

  transition: 0.25s;
}

#search:focus {
  outline: none;
  box-shadow:
    0 0 10px #00f0ff,
    0 0 20px #ff00c8;
}

/* ================= CATEGORY ================= */
.category-nav {
  display: flex;
  gap: 15px;
  margin-top: 5px;
  flex-wrap: wrap;
  justify-content: center;
}

.category-item {
  cursor: pointer;
  opacity: 0.6;
  transition: 0.2s;
  white-space: nowrap;
}

.category-item.active,
.category-item:hover {
  opacity: 1;
  text-shadow: 0 0 8px #00f0ff, 0 0 15px #ff00c8;
}

/* ================= HERO ================= */
.hero {
  margin-top: 110px;
  text-align: center;
  padding: 100px 20px;
  position: relative;
}

.hero-content {
  max-width: 700px;
  margin: auto;
}

.logo {
  font-size: 38px;
  font-weight: bold;
  background: linear-gradient(90deg, #00f0ff, #ff00c8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 3s infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 0 10px #00f0ff; }
  to { text-shadow: 0 0 30px #ff00c8; }
}

.subtitle {
  margin-top: 15px;
  font-size: 16px;
  color: rgba(255,255,255,0.7);
}

.cta-btn {
  margin-top: 25px;
  padding: 12px 22px;

  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;

  background: linear-gradient(45deg, #00f0ff, #ff00c8);
  color: black;

  transition: 0.25s;
}

.cta-btn:hover {
  transform: scale(1.08);
  box-shadow:
    0 0 20px #00f0ff,
    0 0 40px #ff00c8;
}

/* ================= GRID ================= */
.grid {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
  gap: 18px;
}

/* ================= CARD ================= */
.card {
  position: relative;
  background: rgba(255,255,255,0.04);
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;

  backdrop-filter: blur(12px);

  border: 1px solid rgba(255,255,255,0.06);

  transition: 0.35s;

  box-shadow: 0 10px 30px rgba(0,0,0,0.6);
}

.card img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2));
}

.card::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: 18px;
  background: linear-gradient(45deg, #00f0ff, #ff00c8);
  opacity: 0;
  transition: 0.3s;
  z-index: 1;
}

.card-content {
  position: absolute;
  bottom: 0;
  padding: 12px;
  z-index: 2;
}

.card-content h3 {
  margin: 0;
  font-size: 18px;
}

.card-category {
  font-size: 12px;
  opacity: 0.6;
  margin-top: 4px;
}

.card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow:
    0 0 30px rgba(0,240,255,0.3),
    0 0 60px rgba(255,0,200,0.2);
}

.card:hover::before {
  opacity: 1;
}

/* ================= MODAL ================= */
.modal {
  position: fixed;
  inset: 0;

  display: none;
  justify-content: center;
  align-items: flex-start;

  background: rgba(0,0,0,0.9);



  overflow-y: auto;
  overscroll-behavior: contain;
}

/* SCROLLBAR */
.modal::-webkit-scrollbar {
  width: 6px;
}
.modal::-webkit-scrollbar-thumb {
  background: linear-gradient(#00f0ff, #ff00c8);
  border-radius: 10px;
}

/* ================= MODAL CONTENT ================= */
.modal-content {
  width: 100%;
  max-width: 700px;

  padding: 20px 20px 100px;
  border-radius: 14px;

  background: rgba(20,20,30,0.85);
  backdrop-filter: blur(14px);

  border: 1px solid rgba(255,255,255,0.06);

  box-shadow:
    0 0 0 1px rgba(0,240,255,0.05),
    0 20px 60px rgba(0,0,0,0.8),
    0 0 40px rgba(0,240,255,0.08);

  animation: fadeIn 0.3s ease;
}

/* ================= TEXT ================= */
.modal-content h1 {
  text-align: center;
  text-shadow:
    0 0 10px #00f0ff,
    0 0 20px #ff00c8;
}

.modal-content h2 {
  font-size: 22px;
  margin-bottom: 12px;
  position: relative;
  padding-bottom: 6px;

  background: linear-gradient(90deg, #00f0ff, #ff00c8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.modal-content h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;

  width: 60px;
  height: 2px;

  background: linear-gradient(90deg, #00f0ff, #ff00c8);
  box-shadow: 0 0 10px #00f0ff;
}

.post-content {
  line-height: 1.55;
  font-size: 14.5px;
  max-width: 600px;
  margin: auto;
}

.post-content br {
  display: block;
  margin: 6px 0;
}

.post-content h2 {
  font-size: 18px;
  margin-top: 22px;
  display: flex;
  align-items: center;
}

.post-content h2::after {
  content: "";
  flex: 1;
  height: 1px;
  margin-left: 10px;
  background: linear-gradient(90deg, #00f0ff, transparent);
}

.modal-content b {
  display: block;
  margin-top: 18px;
  color: #00f0ff;
  transition: 0.2s;
}

.modal-content b:hover {
  color: #ff00c8;
}

.modal-content i {
  color: rgba(255,255,255,0.6);
}

.modal-content ul {
  padding-left: 20px;
}

.modal-content li {
  margin-bottom: 8px;
}

/* ================= HIGHLIGHT ================= */
.modal-content .highlight {
  margin: 12px 0;
  padding: 12px;

  border-left: 3px solid #ff00c8;

  background: linear-gradient(
    90deg,
    rgba(255,0,200,0.12),
    transparent
  );

  border-radius: 8px;
}

/* ================= IMAGES ================= */
.post-img {
  width: 100%;
  max-width: 420px;
  margin: 14px auto;
  display: block;

  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.08);

  box-shadow: 0 0 15px rgba(0,240,255,0.15);
}

/* ================= GALLERY ================= */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  margin-top: 15px;
}

.gallery img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;

  border-radius: 10px;
  cursor: pointer;

  border: 1px solid rgba(255,255,255,0.06);
  transition: 0.25s;
}

.gallery img:hover {
  transform: scale(1.05);
}

/* ================= LIGHTBOX ================= */
.lightbox {
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0,0,0,0.9);
  backdrop-filter: blur(12px);
  z-index: 9999;
}

.lightbox img {
  max-width: 95vw;
  max-height: 95vh;
  border-radius: 10px;
}

.lb-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  font-size: 40px;
  cursor: pointer;

  padding: 10px 15px;
  border-radius: 10px;

  background: rgba(0,0,0,0.4);
}

.lb-arrow.left { left: 20px; }
.lb-arrow.right { right: 20px; }

/* ================= ANIMATION ================= */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ================= STICKY HEADER ================= */
.post-header {
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 15px;
  margin: -20px -20px 10px;

  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(10px);

  border-bottom: 1px solid rgba(255,255,255,0.08);

  z-index: 10;
}

.post-title {
  font-size: 14px;
  opacity: 0.8;
}

.close-btn {
  cursor: pointer;
  font-size: 16px;
}

/* ================= PROGRESS BAR ================= */
.progress-bar {
  position: sticky;
  top: 42px;

  height: 3px;
  background: rgba(255,255,255,0.08);

  margin: -10px -20px 10px;
  z-index: 9;
}

#progressFill {
  height: 100%;
  width: 0%;

  background: linear-gradient(90deg, #00f0ff, #ff00c8);

  transition: width 0.1s;
}


.topbar {
  height: var(--navbar-height);
}

.modal {
  padding: calc(var(--navbar-height)) 20px 40px;
}
