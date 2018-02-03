import React from "react";
import LabelInput from "../labelInput/labelInput";

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = (e) => {
        this.setState({
			[e.target.name]: e.target.value
		})
		console.log(this.state)
	}
	
	onSubmit(e) {
		e.preventDefault();
		console.log('done')
		this.setState({ value: ''})
	}

	render(){
		const {onSubmit} = this.props;

		return(
			<div>
			<form>
				<p>Sign Up</p>
				<LabelInput value={this.state.email} onChange={this.handleChange} name="email" label="Email Address" placeholder="Email Address" />
				<LabelInput value={this.state.password} onChange={this.handleChange} name="password" label="Password" placeholder="Password" />
				<button onClick={onSubmit}>Sign Up</button>
				</form>
			</div>
		);
	}
}


