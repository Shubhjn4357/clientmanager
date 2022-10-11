import { createSlice } from '@reduxjs/toolkit'
const Data=[
    {id:"1",company:'infosys',email:'management@infosys.com',phone:'+919563214587',contact:'Vijayent Roy',facilator:'--',site:'12',tenent:'--',tenentgroup:'--',action:'!'},
    {id:"2",company:'',email:'',phone:'',contact:'',facilator:'',site:'',tenent:'',tenentgroup:'',action:''},
    ]
export const StateManager = createSlice({
  name: 'main',
  initialState: {
    data: Data,
    local:{}
  },
  reducers: {
    Local:(state,action)=>{
      console.log(state)
    },
    AddData: (state, action) => {
     console.log(state)
  /*   return [...state,
     state.map((i,index)=>{
       console.log(i)
        if(i[index].company===action.payload.name){
           return {...i,
           [action.payload.name]:action.payload
           }
        }
        return action.payload
      })]
    */  
  },
    RemoveData: (state, action) => {
      return ""
    },
  },
  
})
// Action creators are generated for each case reducer function
export const { AddData,Local } = StateManager.actions

export default StateManager.reducer