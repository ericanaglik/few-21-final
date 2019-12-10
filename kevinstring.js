String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
 }

String.prototype.allCaps = function() {
    return this.toUpperCase()
}

String.prototype.capitalizeWords = function() {
    return this.split(' ').map((word) => {
        return word.capitalize()
    }).join(' ')
}

String.prototype.removeExtraSpaces = function() {
    return this.trim()
}

String.prototype.kabobCase = function() {
    return this.removeExtraSpaces().toLowerCase().split(' ').join('-')
}

String.prototype.snakeCase = function() {
    return this.removeExtraSpaces().toLowerCase().split(' ').join('_')
}

String.prototype.camelCase = function () {
    var tempWordList = this.removeExtraSpaces().capitalizeWords().split(' ');
    tempWordList[0] = tempWordList[0].toLowerCase();
    return tempWordList.join('');
};