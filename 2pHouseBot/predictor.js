function predictPrice() {
    // Coefficients
    var coefficients = [100000, 75000, 300, -1500];
    var intercept = 200000;

    // User inputs
    var bedrooms = parseFloat(document.getElementById('bedrooms').value);
    var bathrooms = parseFloat(document.getElementById('bathrooms').value);
    var squareFeet = parseFloat(document.getElementById('squareFeet').value);
    var age = parseFloat(document.getElementById('age').value);
    var hood = parseFloat(document.getElementById('hood').value);
    
    // Validate inputs
    if (isNaN(bedrooms) || isNaN(bathrooms) || isNaN(squareFeet) || isNaN(age) || isNaN(hood)) {
        document.getElementById('priceOutput').innerHTML = "Please enter valid numbers for all fields.";
        return;
    }
    
    var price = getPrice(bedrooms, bathrooms, squareFeet, age, hood, intercept, coefficients); // setting price variable to what getPrice function returns
    document.getElementById('priceOutput').innerHTML = `Estimated House Price in Toronto: $${price.toFixed(2)}`;
    
}

function getPrice(bedrooms, bathrooms, squareFeet, age, hood, intercept, coefficients) {
    var base = (intercept + 
                (coefficients[0] * bedrooms) + 
                (coefficients[1] * bathrooms) + 
                (coefficients[2] * squareFeet) + 
                (coefficients[3] * age));
    var price = base * hood;
    return price;
}