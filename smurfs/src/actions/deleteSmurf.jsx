import axios from 'axios';
export const DELETE_SMURF = 'DELETE_SMURF';

export function deleteSmurf(data) {
	return dispatch => {
		dispatch({ type: DELETE_SMURF, payload: data });
		axios.delete(`http://localhost:3333/smurfs/${data}`).then(res => {
			console.log(res);
		});
	};
}
