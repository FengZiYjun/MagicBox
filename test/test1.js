/**
 * describe how to test
 * @param  {[string]}  [what file to test], {[function]} [how to test]
 */
describe('prompt.js', function(){

	/**
	 * @param  {[string]}  [which function to test], {[function]} [how to test]
	 */
	describe('validatePhoneNumber', function(){

		/**
		 * A single test
		 * @param  {[string]} ) [expected result], {[function]} [how to test]
		 */
		it('should return a boolean', function(){

			var result = validatePhoneNumber('234567');
			/*
				Test the expectation
			 */
			expect(typeof result).toBe('boolean');

		});

		it('should return false', function(){
			var result = validatePhoneNumber('1360295871226');
			expect(result).toBe(false);
		});
	});
});