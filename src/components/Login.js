import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import React, { useState } from "react"
import { app, auth } from "../firebase"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

import "./Login.css"
import { useDispatch } from "react-redux"
import { login } from "../features/userSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [mynumber, setnumber] = useState("")
	const [otp, setotp] = useState("")
	const [show, setshow] = useState(false)
	const [final, setfinal] = useState("")

	const generateRecapcha = () => {
		window.recaptchaVerifier = new RecaptchaVerifier(
			"recaptcha-container",
			{
				size: "invisible",
				callback: (response) => {
					// reCAPTCHA solved, allow signInWithPhoneNumber.
					//onSignInSubmit()
				}
			},
			auth
		)
	}
	// Sent OTP
	const signin = () => {
		if (mynumber === "" || mynumber.length < 10) return

		setshow(true)
		generateRecapcha()

		let appVerifier = window.recaptchaVerifier
		signInWithPhoneNumber(auth, mynumber, appVerifier)
			.then((confirmationResult) => {
				alert("Code sent.")
				window.confirmationResult = confirmationResult
				// ...
			})
			.catch((error) => {
				alert(
					"Failed to send code. Please check your number and click send button"
				)
			})
	}

	// Validate OTP
	const ValidateOtp = () => {
		if (otp === null || otp.length !== 6) return alert("Please enter valid OTP")

		const confirmationResult = window.confirmationResult
		confirmationResult
			.confirm(otp)
			.then((result) => {
				// User signed in successfully.
				const user = result.user
				dispatch(login(user))
				navigate("/")
				console.log(user)
				// ...
			})
			.catch((error) => {
				alert("Code id incorrect")
				setshow(false)
				setnumber("")
				setotp("")
			})
	}

	return (
		<div className="login__container">
			<h1 className="login__title">Login in with your phone number</h1>
			<div className="login__contents">
				<div style={{ display: !show ? "block" : "none" }}>
					<PhoneInput
						className="login__numberInput"
						placeholder="Enter phone number"
						defaultCountry="CA"
						value={mynumber}
						onChange={setnumber}
					/>

					<div id="recaptcha-container"></div>
					<button onClick={signin}>Send OTP</button>
				</div>
				<div style={{ display: show ? "block" : "none" }}>
					<input
						type="text"
						placeholder={"Enter your OTP"}
						onChange={(e) => {
							setotp(e.target.value)
						}}
					></input>

					<button onClick={ValidateOtp}>Verify</button>
				</div>
			</div>
		</div>
	)
}

export default Login
