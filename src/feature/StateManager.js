import { createSlice } from '@reduxjs/toolkit'
const Data=[
    {id:"1",company:'infosys',email:'management@infosys.com',phone:'+919563214587',contact:'Vijayent Roy',facilator:'--',site:'12',tenent:'--',tenentgroup:'--',action:'!'},
    {id:"2",company:'',email:'',phone:'',contact:'',facilator:'',site:'',tenent:'',tenentgroup:'',action:''},
    ]
export const StateManager = createSlice({
  name:'main',
  initialState:{
    data:Data,
  },
  reducers:{
    local: (state) =>{
      console.warn(state)
    },
    addData: (state) => {
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
    removeData: (state) => {
      return ""
    },
  },
  
})
// Action creators are generated for each case reducer function
export const { addData,local,removeData } = StateManager.actions
export default StateManager.reducer