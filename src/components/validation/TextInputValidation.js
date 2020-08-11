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
			case 'checkEmailValidity': isValid =
					isValid && emailValid(value);
				break;
			default:
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

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailValid = (value) => {
	return	EMAIL_REGEX.test(value);
}
