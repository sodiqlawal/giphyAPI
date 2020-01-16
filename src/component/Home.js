import React, { useReducer } from "react";
import './css/Home.css'
import Card from "./Card";

const api_key= "deokzgUjxm6QHQdp3H3aca1LSZcCpucc"

const DISPLAY = "DISPLAY"

function reducer(state, action) {
  switch (action.type) {
  
  	case DISPLAY:
    	return {
        ...state,
        gif: action.payload
      }
      
    default:
      return state;
  }
}


const Home = () => {
  
  const [state, dispatch] = useReducer(reducer, { gif: [] })



  return (
    <React.Fragment>
      <Card state={state} api_key={api_key} dispatch={dispatch} DISPLAY={DISPLAY} />
    </React.Fragment>
  );
}


export default Home;