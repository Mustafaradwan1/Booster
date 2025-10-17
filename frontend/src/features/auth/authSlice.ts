import { createSlice } from "@reduxjs/toolkit"
interface AuthState {
  message: string
}
const initialState: AuthState = {
  message: "bad",
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    click:(state,action)=>{
      state.message = action.payload
    }
  },
})
export const { click } = authSlice.actions;
export default authSlice.reducer