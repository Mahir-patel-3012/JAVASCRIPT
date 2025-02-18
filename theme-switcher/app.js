const themeToggleButton = document.getElementById('theme-toggle');
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}
themeToggleButton.addEventListener('click', toggleTheme);
window.addEventListener('DOMContentLoaded', loadTheme);
