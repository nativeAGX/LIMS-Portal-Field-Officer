document.getElementById("monthSelect").addEventListener("change", function () {
  const selected = this.value;
  const stats = document.getElementById("statsContent");

  if (selected === "jul25") {
    stats.innerHTML = `
      <p>Assigned Area: Panvel</p>
      <p>No. of Working Days: 22/30</p>
      <p>No. of Soil Sample Collection Requests: 28</p>
      <p>No. of Soil Samples Collected and Delivered: 20</p>
      <p>Completion Rate: 71.42%</p>
      <p>Avg Collection Time: 3 hrs/sample</p>
    `;
  } else if (selected === "jun25") {
    stats.innerHTML = `
      <p>Assigned Area: Karjat</p>
      <p>No. of Working Days: 25/30</p>
      <p>No. of Soil Sample Collection Requests: 30</p>
      <p>No. of Soil Samples Collected and Delivered: 25</p>
      <p>Completion Rate: 83.33%</p>
      <p>Avg Time: 2.8 hrs/sample</p>
    `;
  } else {
    stats.innerHTML = `<p>No data for this month.</p>`;
  }
});

document.querySelector(".footer-btn")?.addEventListener("click", () => {
  alert("Done clicked");
});

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' from all nav items
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    // Add 'active' to the clicked item
    item.classList.add('active');
  });
});

