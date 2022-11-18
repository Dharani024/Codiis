import { useState } from 'react';
import axios from 'axios'
import './App.css';

export default function Register() {
// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [phone,setPhone]=useState('')

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);

};
const handlePhone = (e) => {
	setPhone(e.target.value);
	setSubmitted(false);

};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	console.log(email,password,phone,name)
    regserver()
	}
	
async function regserver(){
	axios.post('http://localhost:2000/api/customers/create',{
		name:name ,
		email:email,
		password:password,
		phone:phone   
	 
	 }).then(res=>console.log(res.data))
  }

};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>User Registration</h1>


	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		<label className="label">Name </label>
		<input onChange={handleName} className="input"
		value={name} type="text" /><br></br><br></br>

 		<label className="label">Email </label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" /><br></br><br></br>

		<label className="label">Password </label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" /><br></br><br></br>

       <label className="label">Phone </label>
		<input onChange={handlePhone} className="input"
		value={phone} type="phone" /><br></br><br></br>

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	</div>
	</div>
);
}
