// Script that handles the fuctionality of the mobile Hamburger menu

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});