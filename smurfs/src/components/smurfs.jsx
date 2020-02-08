import React from 'react';

const Smurfs = props => {
	return (
		<div>
			{props.smurfs.map((smurf, index) => {
				return (
					<div key={index}>
						<h2>Name: {smurf.name}</h2>
						<p>Age: {smurf.age}</p>
						<p>Height: {smurf.height}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Smurfs;
