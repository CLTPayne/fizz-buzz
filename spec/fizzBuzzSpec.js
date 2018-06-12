describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz;
  });

  describe('Divisible by 3', function() {

    it('returns "Fizz"', function() {
      expect(fizzBuzz.play(3)).toEqual("Fizz");
    });

  });

  describe('Divisible by 5', function() {

    it('returns "Buzz"', function() {
      expect(fizzBuzz.play(5)).toEqual("Buzz");
    });

  });

  describe('Diviisble by 3 and 5', function() {

    it('returns FizzBuzz', function() {
      expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
    });

  });

  describe('Not divisle by 3 and or 5', function() {

    it('returns FizzBuzz', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    })

  });

  describe('Not divisle by 3 and or 5', function() {
    fizzBuzz = new FizzBuzz();

    it('returns the number', function() {
      expect(fizzBuzz.play(322)).toEqual(322);
    })

  });

});
