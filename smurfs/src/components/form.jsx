import React from 'react';

const Form = props => {
	return (
		<form onSubmit={props.doSubmit}>
			<input
				type='text'
				placeholder='Name'
				value={props.name}
				onChange={props.doNameChange}
			/>
			<input
				type='number'
				placeholder='Age'
				value={props.age}
				onChange={props.doAgeChange}
			/>
			<input
				type='text'
				placeholder='Height (in cm)'
				value={props.height}
				onChange={props.doHeightChange}
			/>
			<button onClick={props.doSubmit}>Submit</button>
		</form>
	);
};

export default Form;
