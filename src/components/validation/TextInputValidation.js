export const validateTextInput = (value, rules) => {
	let isValid = true;

	for(let rule in rules) {
		switch(rule){
			case 'minLength': isValid = 
					isValid && minLengthValidator(value, rules[rule]);
				break;
			case 'isRequired': isValid = 
					isValid && requiredValidator(value);
				break;
		}
	}

	return isValid;
}

/**
 * minLength Val
 * @param value
 * @param minLength
 * @return
 */
const minLengthValidator = (value, minLength) => {
	return value.length >= minLength;
}

/**
 * Field is required 
 * @param value 
 * @return
 */
const requiredValidator = value => {
	return value.trim() !== '';
}
