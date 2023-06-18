let subOrder = [];

makeSub = () =>{

    let subTotal = 0;

    let subName = document.getElementById("inputName").value;
    let bread = document.getElementById("bread").value;


    if(bread === "Rye"){
        subTotal = subTotal + 35;
    } else if(bread === "White"){
        subTotal = subTotal + 20;
    } else if(bread === "Brown"){
        subTotal = subTotal + 20;
    } else if(bread === "Ciabatta"){
    subTotal = subTotal + 40;
    } else if(bread === "Low-GI"){
    subTotal = subTotal + 35;
    }


          // Get Radio Options
    let sauceOptions = document.getElementsByName("baseRadio");
    let sauceValue; 
    for(let i = 0; i < sauceOptions.length; i++){
        if(sauceOptions[i].checked){
            sauceValue = sauceOptions[i].value
            subTotal = subTotal + +sauceOptions[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            topArray.push(toppingOptions[i].value);
            subTotal = subTotal + +toppingOptions[i].dataset.cost
        }
    }

    subOrder.push({
        subName: subName,
        subBread: bread,
        sauceOptions: sauceValue,
        toppingOptions: topArray,
        subPrice: subTotal
    });
    

    console.log(subOrder)

    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("subForm").reset();

}

realTimeCost = () => {

    realTimePrice = 0; 

    let bread = document.getElementById("bread").value;
    if(bread === "Rye"){
        realTimePrice = realTimePrice + 35;
    } else if(bread === "White"){
        realTimePrice = realTimePrice + 20;
    } else if(bread === "Brown"){
        realTimePrice = realTimePrice + 20;
    } else if(bread === "Ciabatta"){
        realTimePrice = realTimePrice + 40;
    } else if(bread === "Low-GI"){
        realTimePrice = realTimePrice + 40;
    }

    let sauceOptions = document.getElementsByName("baseRadio"); 
    for(let i = 0; i < sauceOptions.length; i++){
        if(sauceOptions[i].checked){
            realTimePrice = realTimePrice + +sauceOptions[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost
        }
    }

    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"

}

displayOrder = () => {
    let area = document.getElementById("orders");
    let total = document.getElementById("orderTotal");

    area.innerHTML = "";
    let overallTotal = 0;

    for (let i = 0; i < subOrder.length; i++) {
      let subName = subOrder[i].subName;
      let subBread = subOrder[i].subBread; 
      let sauceOptions = subOrder[i].sauceOptions;
      let toppingOptions = subOrder[i].toppingOptions; 
      let price = subOrder[i].subPrice;

      overallTotal += price;

      area.innerHTML += `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${subName}</h5>
            <div class="line"></div>
            <p class="card-text"><strong>Sauce:</strong> ${sauceOptions}</p>
            <p class="card-text"><strong>Bread:</strong> ${subBread}</p>
            <p class="card-text"><strong>Toppings:</strong> ${toppingOptions}</p>
            <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
          </div>
        </div>`;
    }

    total.innerHTML = "R" + overallTotal + ".00";
}

checkOut = () => {
    let data = JSON.stringify(subOrder);
    localStorage.setItem('order', data);
    window.location.href = '/pages/checkout.html';
}
  
  
  
