const gridContainer = document.getElementById('grid-container');


function createGridItems(numItems) {
  gridContainer.innerHTML = ''; 
  for (let i = 1; i <= numItems; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.textContent = `Item ${i}`;
    gridContainer.appendChild(gridItem);
  }
}


function adjustGridLayout() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1200) {
    gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'; 
  } else if (screenWidth >= 768) {
    gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)'; 
  } else if (screenWidth >= 480) {
    gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 columns for small devices
  } else {
    gridContainer.style.gridTemplateColumns = '1fr';
  }
}


window.addEventListener('DOMContentLoaded', () => {
  createGridItems(12); 
  adjustGridLayout();    
});
window.addEventListener('resize', adjustGridLayout);
