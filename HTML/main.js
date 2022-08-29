const tabItem = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

// select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // add border to current tab
  this.classList.add('tab-border');
  // Grab content item from DOM 
  const tabContentItem = document.querySelector('#${this.id}-content');
  // Add show class
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItem.forEach(item => item.classList.remove('tab-border')); 
}

function removeShow() {
  tabContentItem.forEach(item => item.classList.remove('show')); 
}

// Listen for tab click
tabItem.forEach(item => item.addEventListener('click', selectItem));