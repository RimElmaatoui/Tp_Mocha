
module.exports = {
    reverseString: function(str) {
        return str.split('').reverse().join('');
    },
    capitalizeWords: function(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    },
    countVowels: function(str) {
        
        const matches = str.match(/[aeiou]/gi);
        return matches ? matches.length : 0;
    }
};
