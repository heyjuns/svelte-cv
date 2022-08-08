const base = 'https://juanda-backend.herokuapp.com/';

export function getData() {
	return fetch(base);
}
