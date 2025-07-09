document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' from all nav items
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    // Add 'active' to the clicked item
    item.classList.add('active');
  });
});

document.querySelectorAll(".details-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("More details coming soon!");
  });
});
