import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/getSmurfs';
import { submit } from '../actions/submit';
import { deleteSmurf } from '../actions/deleteSmurf';
import Smurfs from './smurfs';
import Form from './form';
import './App.css';

function App(props) {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [height, setHeight] = useState('');

	useEffect(() => {
		props.getSmurfs();
	}, [props]);

	const handleSubmit = e => {
		e.preventDefault();
		props.submit({
			name: name,
			age: age,
			height: height
		});
		setName('');
		setAge('');
		setHeight('');
	};

	const handleDelete = id => {
		props.deleteSmurf(id);
	};

	const handleNameChange = e => {
		e.preventDefault();
		setName(e.target.value);
	};

	const handleAgeChange = e => {
		e.preventDefault();
		setAge(e.target.value);
	};

	const handleHeightChange = e => {
		e.preventDefault();
		setHeight(e.target.value);
	};

	return (
		<div className='App'>
			<h1>List of Smurfs</h1>
			<Form
				doSubmit={handleSubmit}
				doNameChange={handleNameChange}
				doAgeChange={handleAgeChange}
				doHeightChange={handleHeightChange}
				name={name}
				age={age}
				height={height}
			/>
			<Smurfs smurfs={props.smurfs} doDelete={handleDelete} />
		</div>
	);
}

function mapStateToProps(state) {
	return {
		smurfs: state.smurfs
	};
}

const mapDispatchToProps = {
	getSmurfs,
	deleteSmurf,
	submit
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
