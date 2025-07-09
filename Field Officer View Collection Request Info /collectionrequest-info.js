function setActive(el) {
    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.remove("active");
    });
    el.classList.add("active");
  }
  
  document.querySelectorAll(".primary-btn, .secondary-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      alert(`${btn.textContent.trim()} clicked`);
    });
  });
  document.querySelectorAll(".footer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      alert(`${btn.textContent} clicked`);
    });
  });
  