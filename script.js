

//  increaseButton1
const increaseButton1 = document.getElementById('increaseButton1');
increaseButton1.addEventListener('click', function () {
    //Product1 Increases by quantity
    const inputItem1 = document.getElementById('inputItem1').value;
    const inputNumberItem1 = parseFloat(inputItem1);
    const numberStr = 1;                                        
    const number = parseFloat(numberStr);
    const totalIncrease = inputNumberItem1 + number;
    document.getElementById('inputItem1').value = totalIncrease;

     //Product1 price increases followed by quantity
    const fixedPrice1 = 1219;
    const fixedNumberPrice = parseFloat(fixedPrice1);
    const newPriceItem1 = fixedPrice1 * totalIncrease;         
    document.getElementById('priceItem1').innerText = newPriceItem1;

    //Subtotal prices Increases followed by quantity
    const subtotalCost = document.getElementById("subtotalCost").innerText;
    const subtotalNumberCost = parseFloat(subtotalCost);
    const newSubtotal = subtotalNumberCost + fixedNumberPrice;    
    document.getElementById('subtotalCost').innerText = newSubtotal;

    // Tax increases
    const taxCost = document.getElementById('taxCost').innerText;
    const taXNumberCost = parseFloat(taxCost);
    const parTax = 5;
    const parNumberTax = parseFloat(parTax);
    const newTaxCost = taXNumberCost + parNumberTax;             
    document.getElementById('taxCost').innerText = newTaxCost;

    //Final Total
    const newTotalCost = newSubtotal + newTaxCost;
    document.getElementById('totalCost').innerText = newTotalCost;      
})

//  decreaseButton1
//Product1 decrease by quantity
const decreaseButton1 = document.getElementById('decreaseButton1');
decreaseButton1.addEventListener('click', function () {
    const inputItem1 = document.getElementById('inputItem1').value;
    const inputNumberItem1 = parseFloat(inputItem1);
    const numberStr = 1;
    const number = parseFloat(numberStr);
    const totalDecrease = inputNumberItem1 - number;
    document.getElementById('inputItem1').value = totalDecrease;
//Porduct1 price decrease followed by quantity
    const fixedPrice1 = 1219;
    const fixedNumberPrice = parseFloat(fixedPrice1);
    const newPriceItem1 = fixedPrice1 * totalDecrease;
    document.getElementById('priceItem1').innerText = newPriceItem1;
//Subtotal price decreases followed by quantity
    const subtotalCost = document.getElementById("subtotalCost").innerText;
    const subtotalNumberCost = parseFloat(subtotalCost);
    const newSubtotal = subtotalNumberCost - fixedNumberPrice;
    document.getElementById('subtotalCost').innerText = newSubtotal;
//Tax decreases followed by quantity
    const taxCost = document.getElementById('taxCost').innerText;
    const taXNumberCost = parseFloat(taxCost);
    const parTax = 5;
    const parNumberTax = parseFloat(parTax);
    const newTaxCost = taXNumberCost - parNumberTax;
    document.getElementById('taxCost').innerText = newTaxCost;
//Final Total
    const newTotalCost = newSubtotal - newTaxCost;
    document.getElementById('totalCost').innerText = newTotalCost;
})

//  increaseButton2
const increaseButton2 = document.getElementById('increaseButton2');
increaseButton2.addEventListener('click', function () {
    const inputItem2 = document.getElementById('inputItem2').value;
    const inputNumberItem2 = parseFloat(inputItem2);
    const numberStr = 1;
    const number = parseFloat(numberStr);
    const totalIncrease = inputNumberItem2 + number;
    document.getElementById('inputItem2').value = totalIncrease;

    const fixedPrice2 = 59;
    const fixedNumberPrice = parseFloat(fixedPrice2);
    const newPriceItem2 = fixedPrice2 * totalIncrease;
    document.getElementById('priceItem2').innerText = newPriceItem2;

    const subtotalCost = document.getElementById("subtotalCost").innerText;
    const subtotalNumberCost = parseFloat(subtotalCost);
    const newSubtotal = subtotalNumberCost + fixedNumberPrice;
    document.getElementById('subtotalCost').innerText = newSubtotal;

    const taxCost = document.getElementById('taxCost').innerText;
    const taXNumberCost = parseFloat(taxCost);
    const parTax = 5;
    const parNumberTax = parseFloat(parTax);
    const newTaxCost = taXNumberCost + parNumberTax;
    document.getElementById('taxCost').innerText = newTaxCost;

    const newTotalCost = newSubtotal + newTaxCost;
    document.getElementById('totalCost').innerText = newTotalCost;
})

// decreaseButton2
const decreaseButton2 = document.getElementById('decreaseButton2');
decreaseButton2.addEventListener('click', function () {
    const inputItem2 = document.getElementById('inputItem2').value;
    const inputNumberItem2 = parseFloat(inputItem2);
    const numberStr = 1;
    const number = parseFloat(numberStr);
    const totalDecrease = inputNumberItem2 - number;
    document.getElementById('inputItem2').value = totalDecrease;

    const fixedPrice2 = 59;
    const fixedNumberPrice = parseFloat(fixedPrice2);
    const newPriceItem2 = fixedPrice2 * totalDecrease;
    document.getElementById('priceItem2').innerText = newPriceItem2;

    const subtotalCost = document.getElementById("subtotalCost").innerText;
    const subtotalNumberCost = parseFloat(subtotalCost);
    const newSubtotal = subtotalNumberCost - fixedNumberPrice;
    document.getElementById('subtotalCost').innerText = newSubtotal;

    const taxCost = document.getElementById('taxCost').innerText;
    const taXNumberCost = parseFloat(taxCost);
    const parTax = 5;
    const parNumberTax = parseFloat(parTax);
    const newTaxCost = taXNumberCost - parNumberTax;
    document.getElementById('taxCost').innerText = newTaxCost;

    const newTotalCost = newSubtotal - newTaxCost;
    document.getElementById('totalCost').innerText = newTotalCost;
})

document.getElementById("checkout").addEventListener("click", function () {
    var cart = document.getElementById("cart");
    cart.style.display = "none";
    var checkoutSection = document.getElementById("checkoutSection");
    checkoutSection.style.display = "block";
})
