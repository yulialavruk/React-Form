import React from 'react';

export default class App extends React.Component{
	constructor(){
		super()

		this.state = {
			username: "",
			password: "",
			repeatPassword: ""
		}
	}

	onChange = event =>{
		this.setState({
			[event.target.name]: event.target.value
		})
	};

	onSubmit = event =>{
		event.preventDefault();
		//console.log(this);
		// console.log("refs", this.username.value, this.password.value);
		console.log("state", this.state);
	};

	render(){
		return(
			<div className="form-container card">
				<form className="form card-body">
					<div className="form-group">
						<label>Username</label>
						<input 
							type="text"
							className="form-control"
							placeholder="Enter username"
							ref={node => {(this.username = node)}}
							value={this.state.username}
							name="username"
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input 
							type="text"
							className="form-control"
							placeholder="Enter password"
							ref={node => {(this.password = node)}}
							value={this.state.password}
							name="password"
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Repeat password</label>
						<input 
							type="text"
							className="form-control"
							placeholder="Enter repeat password"
							ref={node => {(this.repeatPassword = node)}}
							value={this.state.repeatPassword}
							name="repeatPassword"
							onChange={this.onChange}
						/>
					</div>
					<button type="button" className="btn btn-primary w-100" onClick={this.onSubmit}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}
