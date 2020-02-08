import axios from 'axios';
export const GET_SMURFS = 'GET_SMURFS';

export function getSmurfs() {
	return dispatch => {
		axios
			.get('http://localhost:3333/smurfs')
			.then(res => {
				dispatch({ type: GET_SMURFS, payload: res.data });
			})
			.catch(resp => {
				console.log(resp);
			});
	};
}
