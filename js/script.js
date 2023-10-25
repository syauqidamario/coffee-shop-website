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
};

// Toggle class active for shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
      shoppingCart.classList.toggle('active');
      e.preventDefault();
}


// Click outside of the element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
      if(!hm.contains(e.target) && !navbarNav.contains(e.target)){
            navbarNav.classList.remove('active');
      }
      if(!sb.contains(e.target) && !searchForm.contains(e.target)){
            navbarNav.classList.remove('active');
      }
       if(!sc.contains(e.target) && !navbarNav.contains(e.target)){
            navbarNav.classList.remove('active');
      }
});

// Box modal
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});
itemDetailButtons.onclick = (e) => {
      itemDetailModal.computedStyleMap.display = 'flex';
      e.preventDefault();
};

// Click close modal button
document.querySelector('.modal .close-icon').onclick = (e) => 
{
      itemDetailModal.style.display = 'none';
      e.preventDefault();
};

// Click outside of modal
const modal = document.querySelector('#item-detail-modal');
window.onclick = (e) =>
{
      if(e.target === modal)
      {
            modal.style.display = 'none';
      }
};