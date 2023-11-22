
const expect = require('chai').expect;
const stringManipulator = require('../stringManipulator');


describe('String Manipulator', function() {
  // Test for reverseString function
  describe('reverseString', function() {
    it('should reverse the string', function() {
      expect(stringManipulator.reverseString('hello')).to.equal('olleh');
    });
    
  });

  // Test for capitalizeWords function
  describe('capitalizeWords', function() {
    it('should capitalize the first letter of each word', function() {
      expect(stringManipulator.capitalizeWords('hello world')).to.equal('Hello World');
    });

  });

  // Test for countVowels function
  describe('countVowels', function() {
    it('should return the correct vowel count', function() {
      expect(stringManipulator.countVowels('hello')).to.equal(2);
    });
    it('should return 0 when there are no vowels', function() {
      expect(stringManipulator.countVowels('bcdfg')).to.equal(0);
    });
    
  });
});
