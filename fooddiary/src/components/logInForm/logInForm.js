import React from "react";
import LabelInput from "../labelInput/labelInput";

export default class LoginForm extends React.Component {
	render(){
		const {email, password, onSubmit, onChange} = this.props;
		return(
			<form>
				<p>Login</p>
				<div className="label-input">
					<label>Email Address</label>
					<input placeholder="usuario@dominio.com" />
				</div>
				<div className="label-input">
					<label>Password</label>
					<input placeholder="Password" />
				</div>
				<a>Forgot Password?</a>
				<button>Login</button>
			</form>
		);
	}
}