// navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  navbar.innerHTML = `
    <div class="top-bar">
      <div class="logo"><img src="Logo.png" alt="Logo" /></div>
      <div class="menu-button" onclick="toggleMenu()">☰</div>
    </div>
    <div class="menu-popup" id="menuPopup">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="projects.html">Projects</a>
      <a href="blog.html">Blog</a>
      <a href="updates.html">Updates</a>
      <a href="contact.html">Contact</a>
    </div>
    <script>
      function toggleMenu() {
        const menu = document.getElementById("menuPopup");
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
      }
      document.addEventListener("click", (e) => {
        const menu = document.getElementById("menuPopup");
        const button = document.querySelector(".menu-button");
        if (!menu.contains(e.target) && !button.contains(e.target)) {
          menu.style.display = "none";
        }
      });
    <\/script>
  `;
});
