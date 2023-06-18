displayCheckout = () => {
    let data = JSON.parse(localStorage.getItem("order"));
    let items = document.getElementById("checkoutOrder");
    let totalArea = document.getElementById("totalOut");
  
    let checkoutTotal = 0;
  
    for (let i = 0; i < data.length; i++) {
      let subName = data[i].subName;
      let subBread = data[i].subBread;
      let sauceOptions = data[i].sauceOptions;
      let toppingOptions = data[i].toppingOptions;
      let price = data[i].subPrice;
  
      checkoutTotal += price;
  
      items.innerHTML += `
        <div class="orderLine">
          <p><strong>Name:</strong> ${subName}</p>
          <p><strong>Bread:</strong> ${subBread}</p>
          <p><strong>Sauce:</strong> ${sauceOptions}</p>
          <p><strong>Toppings:</strong> ${toppingOptions}</p>
          <p><strong>Total Price:</strong> R${price}</p>
        </div>`;
  
      totalArea.innerHTML = "Total: R" + checkoutTotal.toFixed(2);
    }
  }
  
  function applyDiscount() {
    var promoCode = document.getElementById('promo').value;
  
    if (promoCode === '1234') {
      var totalElement = document.getElementById('totalOut');
      var checkoutTotal = parseFloat(totalElement.innerText.replace("Total: R", ""));
  
      if (!isNaN(checkoutTotal)) {
        var discountedTotal = checkoutTotal - (checkoutTotal * 0.1);
        totalElement.innerHTML = "Total: R" + discountedTotal.toFixed(2);
  
        console.log('Discount applied. New total:', discountedTotal);
      } else {
        console.log('Invalid total value');
      }
    } else {
      console.log('Invalid promo code');
    }
  }
  
  function makePayment() {
    var totalElement = document.getElementById('totalOut');
    var checkoutTotal = parseFloat(totalElement.innerText.replace("Total: R", ""));
  
    console.log('Payment successful. Amount:', checkoutTotal);
   
  }
  

  displayCheckout();
  