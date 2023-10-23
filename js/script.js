// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// When the hamburger menu is clicked
document.querySelector('#hamburger-menu').onclick = () => {
      navbarNav.classList.toggle("active");
};

// Toggle class active for the search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = () => 
{
      searchForm.classList.toggle('active');
      searchBox.focus();
      e.preventDefault();
}


// Click outside of the element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
      if(!hm.contains(e.target) && !navbarNav.contains(e.target)){
            navbarNav.classList.remove('active');
      }
      if(!sb.contains(e.target) && !searchForm.contains(e.target)){
            navbarNav.classList.remove('active');
      }
});