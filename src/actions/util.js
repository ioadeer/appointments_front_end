
function url_base(){
	if (process.env.NODE_ENV === 'production') {
		return 'https://rest-appointments-backend.herokuapp.com'
	} else {
		return 'http://127.0.0.1:8000'
	}
}
export function endpointConcat(endpoint) {
	let dest = url_base() + endpoint;
	return dest;
}
