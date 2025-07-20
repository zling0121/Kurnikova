console.log("Kurnikova Research Group site loaded.");

document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('searchInput');
    const items = document.querySelectorAll('.publication-item');
  
    input.addEventListener('input', function () {
      const query = input.value.toLowerCase();
  
      items.forEach(function (item) {
        const text = item.textContent.toLowerCase();
        const originalHTML = item.innerHTML;
  
        if (query === "") {
          item.innerHTML = originalHTML; // reset
          item.style.display = "";
          return;
        }
  
        if (text.includes(query)) {
          const regex = new RegExp(`(${query})`, "gi");
          item.innerHTML = item.textContent.replace(regex, '<span class="highlight">$1</span>');
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
  
