// add On function for memoryCost, storage and delivery

function addOn(product, price){
    const addOnCost = document.getElementById(product +'-cost');
    addOnCost.innerText = price;
    totalCost();

}

// Total Price Calculation

function totalCost(){
    const basePrice = document.getElementById('best-price');
    const bestPrice = parseInt(basePrice.innerText);
    const memoryPrice = document.getElementById('memory-cost');
    const memoryCost = parseInt(memoryPrice.innerText);
    const ssdPrice = document.getElementById('ssd-cost');
    const ssdCost = parseInt(ssdPrice.innerText);
    const deliveryPrice = document.getElementById('delivery-cost');
    const DeliveryCost = parseInt(deliveryPrice.innerText);
   const total = bestPrice + memoryCost + ssdCost + DeliveryCost
   document.getElementById('total-cost').innerText = total;
   document.getElementById('total-price').innerText = total;
}

// Discount code Function

function discountCode(code){
    const promoCode = 'stevekaku';
    if(code == promoCode){
        document.getElementById('code-btn').disabled = 'true';
       const finalTotalText = document.getElementById('total-price').innerText;
       const finalTotal = parseFloat(finalTotalText);
       let discoutPercantage = finalTotal * .2 ;
       const grandTotal = finalTotal - discoutPercantage;
       document.getElementById('total-price').innerText = grandTotal;
    }

}
// Handle discount code Button 

document.getElementById('code-btn').addEventListener('click',function(){
    const inputPromo = document.getElementById('promo-word').value
    discountCode(inputPromo);
    document.getElementById('promo-word').value = '';
})

