// Wait for typing to finish, then show subtitle
document.addEventListener("DOMContentLoaded", () => {
  const headline = document.getElementById("headline");
  const subtitle = document.getElementById("subtitle");
  const text = "Astitcode";
  
  // Start typing animation
  headline.textContent = text;

  // Wait for typing to finish
  setTimeout(() => {
    subtitle.classList.add("show");
  }, 2700); // Matches typing duration (2.5s + small buffer)
});
