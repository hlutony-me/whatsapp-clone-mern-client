import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload
			localStorage.setItem("uid", action.payload.uid)
			localStorage.setItem("phoneNumber",action.payload.phoneNumber)
		},
		logout: (state) => {
			state.user = null
			localStorage.removeItem("uid")
			localStorage.removeItem("phoneNumber")
		}
	}
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
