import React from 'react';
import countries from '../data/countries';

export default class App extends React.Component{
	constructor(){
		super()

		this.state = {
			username: "",
			password: "",
			repeatPassword: "",
			country: "1",
			gender: "female",
			agree: true,
			avatar: "",
			age: 16,
			errors: {
				username: false,
				password: false,
				repeatPassword: false,
				age: false
			}
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

	onChangeAvatar = event =>{
		const reader = new FileReader();
		reader.onload = event =>{
			this.setState({
				avatar: event.target.result
			})
		}

		reader.readAsDataURL(event.target.files[0])
	};

	incrementAge = ()=>{
		this.setState(
			(prevState, prevProps) => ({
				age: prevState.age + 1
			}), 
			() => {
				this.setState({
					errors: { 
						age: this.state.age > 18? false: 'Must be more 18'
					}
				})
			}
		) 
		
		// this.setState((prevState, prevProps) => ({
		// 	age: prevState.age + 1
		// })) 
		// this.setState((prevState, prevProps) => ({
		// 	age: prevState.age + 1
		// })) 
	};

	decrementAge = ()=>{
		this.setState({
			age: this.state.age - 1
		},
		() => {
			this.setState({
				errors: { 
					age: this.state.age > 18? false: 'Must be more 18'
				}
			})
		}) 
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

		const errors = {};
		if (this.state.username.length < 5) {
			errors.username = 'Must be 5 characters or more'
		}
		if(this.state.password.length <3){
			errors.password = 'Must be 3 characters or more'
		}
		if(this.state.password !==this.state.repeatPassword){
			errors.repeatPassword = 'Must be equal password'
		}
		if(Object.keys(errors).length > 0){
			this.setState({
				errors: errors
			})
		}
		// if(this.state.username.length < 5){
		// 	this.setState({
		// 		errors:{
		// 			username: 'error'
		// 		}
		// 	})
		// }
		// console.log(this);
		// console.log("refs", this.username.value, this.password.value);
		else{
			this.setState({
				errors: {}
			})
			console.log("state", this.state);
		}
	};

	render(){
		console.log(this.state.age);
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
						{this.state.errors.username ? (
							<div className="invalid-feedback">
								{this.state.errors.username}
							</div>
						) : null}
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
						{this.state.errors.password ? (
							<div className="invalid-feedback">
								{this.state.errors.password}
							</div>
						) : null}
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
						{this.state.errors.repeatPassword ? (
							<div className="invalid-feedback">
								{this.state.errors.repeatPassword}
							</div>
						) : null}
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
					<div className="form-group">
						<label htmlFor="avatar">Avatar</label>
						<input 
							type="file"
							className="form-control-file"
							id="avatar"
							name="avatar"
							onChange={this.onChangeAvatar}
						/>
					</div>
					<div className="form-group">
			            <div>
			              	<label>Age</label>
			            </div>
			            <div className="btn-group">
			              	<button
			                	className="btn btn-secondary"
			                	type="button"
			                	onClick={this.decrementAge}
			              	>
			                	-
			              	</button>
			              	<input
			                	type="number"
			                	className="form-control"
			                	placeholder="Enter age"
			                	name="age"
			                	value={this.state.age}
			                	onChange={this.onChange}
			              	/>
			              	<button
			                	className="btn btn-secondary"
			                	type="button"
			                	onClick={this.incrementAge}
			              	>
			                	+
			              	</button>
			            </div>
				            {this.state.errors.age ? (
				              <div className="invalid-feedback">{this.state.errors.age}</div>
				            ) : null}
			         </div>
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
					  	<label className="form-check-label" htmlFor="agree">Confirm the processing of data</label>
					</div>
					<button type="button" className="btn btn-primary w-100" onClick={this.onSubmit}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}
