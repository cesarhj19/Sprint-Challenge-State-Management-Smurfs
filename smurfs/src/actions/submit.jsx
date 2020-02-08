import axios from 'axios';
export const SUBMIT = 'SUBMIT';

export function submit(data) {
	return dispatch => {
		dispatch({ type: SUBMIT, payload: data });
		axios.post('http://localhost:3333/smurfs', data).then(res => {
			console.log(res);
		});
	};
}
