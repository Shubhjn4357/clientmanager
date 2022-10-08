import { createSlice } from '@reduxjs/toolkit'
const Data=[
    {id:"1",company:'infosys',email:'management@infosys.com',phone:'+919563214587',contact:'Vijayent Roy',facilator:'--',site:'12',tenent:'--',tenentgroup:'--',action:'!'},
    {id:"2",company:'',email:'',phone:'',contact:'',facilator:'',site:'',tenent:'',tenentgroup:'',action:''},
    ]
export const StateManager = createSlice({
  name: 'main',
  initialState: {
    data: Data,
    themeConfig:{}
  },
  reducers: {
    AddData: (state, action) => {
      return [...state,action.payload]
    },
    RemoveData: (state, action) => {
      return [state.filter((e)=>e.id!==action.index)]
    },
  },
})

// Action creators are generated for each case reducer function
export const { AddData } = StateManager.actions

export default StateManager.reducer