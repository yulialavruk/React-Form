import React from 'react';
import countries from '../data/countries';

export default class App extends React.Component{
	constructor(){
		super()

		this.state = {
			username: "",
			password: "",
			repeatPassword: "",
			country: "3",
			gender: "female",
			agree: true
		}
	}

	onChange = event =>{
		this.setState({
			[event.target.name]: event.target.value
		})
		//console.log(event.target.name, event.target.value, event.target.checked)
	};

	onChangeAgree = event =>{
		this.setState({
			[event.target.name]: event.target.checked
			//[event.target.name]: !event.target.value not work
			//[event.target.name]: event.target.value === "true" ? false : true
		})
		//console.log(event.target.name, event.target.value, event.target.checked)
	};

	getOptionsItems = items =>{
		return items.map(item =>(
			<option key={item.id} value={item.id}>
				{item.name}
			</option>
		))
	};

	onSubmit = event =>{
		event.preventDefault();
		// console.log(this);
		// console.log("refs", this.username.value, this.password.value);
		console.log("state", this.state);
	};

	render(){
		return(
			<div className="form-container card">
				<form className="form card-body">
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input 
							type="text"
							className="form-control"
							id="username"
							placeholder="Enter username"
							ref={node => {(this.username = node)}}
							value={this.state.username}
							name="username"
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input 
							type="text"
							className="form-control"
							id="password"
							placeholder="Enter password"
							ref={node => {(this.password = node)}}
							value={this.state.password}
							name="password"
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="repeatPassword">Repeat password</label>
						<input 
							type="text"
							className="form-control"
							id="repeatPassword"
							placeholder="Enter repeat password"
							ref={node => {(this.repeatPassword = node)}}
							value={this.state.repeatPassword}
							name="repeatPassword"
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
					    <label htmlFor="country">Country</label>
					    <select 
					    	className="form-control" 	
					    	id="country"
					    	value={this.state.country}
					    	name="country"
					    	onChange={this.onChange}
					    >
					    	{this.getOptionsItems(countries)}
					    </select>
					</div>
					<fieldset className="form-group">
					    <div>Gender</div>
				        <div className="form-check">
				        	<input 
				        		className="form-check-input" 
				        		type="radio" 
				        		name="gender" 
				        		id="female" 
				        		value = "female"
				        		checked={this.state.gender === "female"}
				        		onChange={this.onChange}
				        	/>
				        	<label className="form-check-label" htmlFor="female">
				            	Female
				        	</label>
				        </div>
				        <div className="form-check">
				        	<input 
				        		className="form-check-input" 
				        		type="radio" 
				        		name="gender" 
				        		id="male" 
				        		value="male"
				        		checked={this.state.gender === "male"}
				        		onChange={this.onChange}
				        	/>
				        	<label className="form-check-label" htmlFor="male">
				            	Male
				        	</label>
				        </div>
					</fieldset>
					<div className="form-check">
					  	<input 
					  		className="form-check-input" 
					  		type="checkbox" 
					  		id="agree" 
					  		name="agree"
					  		value={this.state.agree}
					  		checked={this.state.agree}
					  		onChange={this.onChangeAgree}
					  	/>
					  	<label className="form-check-label" htmlFor="agree">Agree</label>
					</div>
					<button type="button" className="btn btn-primary w-100" onClick={this.onSubmit}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}
