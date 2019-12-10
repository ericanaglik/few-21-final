// Challenge 1 - Add a new property to Number that is the Golden Ratio

Number.prototype.constructor.goldenRatio = 1.61803398875

// Challenge 2 - Number Methods: round, floor, ceil

Number.prototype.round = function() {
    return Math.round(this)
}

Number.prototype.floor = function() {
    return Math.floor(this)
}

Number.prototype.ceil = function() {
    return Math.ceil(this)
}

// Challenge 3 - pads Number with x Os before and y Os after

Number.prototype.pad = function(x,y) {
    let n = this.toString().split('.')
    result = ""
    for(let i = 0; i < x - n[0].length; i++) {
        result += "0"
    }
    result += n[0] + "." + n[1]
    for(let i = 0; i < y - n[1].length; i++) {
        result += "0"
    }
    return result
}

// Challenge 4 - Converts radians to degrees

Number.prototype.degToRad = function() {
    return this * (Math.PI / 180)
}

// Challenge 5 - Converts degrees to radians 

Number.prototype.radToDeg = function() {
    return (this * (180 / Math.PI))
}

// Challenge 6 - Formatting Money 

Number.prototype.toDollars = function() {
    return "$" + this.toFixed(2)
}

// Challenge 7 - Returns the tax amount

Number.prototype.tax = function(rate) {
    return (this * rate) + this
}

// Challenge 8 - Calculate interest over time

Number.interest = function(rate,months) {
    return Number(this * (1 + ((rate / 100) * months))).toFixed(2);
}

// Challenge 9 - Calculate Mortgage 

Number.mortgage = function(startingLoanAmount, totalPayments, interestRate) {
    let interestRatePerMonth = interestRate / 12;
    return startingLoanAmount * interestRatePerMonth * (Math.pow(1 + interestRatePerMonth, totalPayments)) / (Math.pow(1 + interestRatePerMonth, totalPayments) - 1);
}

// Challenge 10 - Int to Hex 

Number.prototype.intToHex = function() {
    return this.toString(16)
}