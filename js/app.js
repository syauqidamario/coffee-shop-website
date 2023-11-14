document.addEventListener('alpine:init', () => {
      Alpine.data('products', () => ({
            items: [
                  { id: 1, name: 'Robusta Brazil', img: 'images/products/RobustaBrazil.jpg', price: 10000 },
                  { id: 2, name: 'Arabica Blend', img: 'images/products/ArabicaBlend.jpg', price: 20000 },
            ],
      }));
      Alpine.store('cart', {
            items:[],
            total:0,
            quantity:0,
            add(newItem)
            {
                  this.items.push(newItem);
                  this.quantity++;
                  this.total += newItem.price;
                  console.log(this.total);
            },
      });
});



// konversi ke Rupiah
const rupiah = (number) =>
{
      return new Intl.NumberFormat('id-ID',
      {
            style:'currency',
            currency:'IDR',
            minimumFractionDigits:0,
      }).format(number);
};