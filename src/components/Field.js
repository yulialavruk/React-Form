import React from 'react';

const Field = props =>{
	const { 
		id, 
		labelText, 
		type, 
		placeholder, 
		value, 
		name, 
		onChange, 
		error
	} = props;
	
	return(
		<div className="form-group">
			<label htmlFor={id}>{labelText}</label>
			<input 
				type={type}
				className="form-control"
				id={id}
				placeholder={placeholder}
				//ref={node => {(this.username = node)}}
				value={value}
				name={name}
				onChange={onChange}
			/>
			{error ? ( <div className="invalid-feedback">{error}</div> ) : null}
		</div>
	);
};

export default Field;