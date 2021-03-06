import React from "react";
import LabelInput from "../labelInput/labelInput";

export default class LoginForm extends React.Component {
	render(){
		const {email, password, onSubmit, onChange} = this.props;
		return(
			<form>
				<p>Login</p>
				<LabelInput value={email} onChange={onChange} name="email" label="Email Address" placeholder="Email Address" />
				<LabelInput value={password} onChange={onChange} name="password" label="Password" placeholder="Password" />
				<a>Forgot Password?</a>
				<button onClick={onSubmit}>Login</button>
			</form>
		);
	}
}


