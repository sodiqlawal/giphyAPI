import React, {useState, useEffect, useReducer, useRef} from 'react'
import { BrowserRouter as Link } from "react-router-dom"
import './css/Details.css'

const DISPLAY = "DISPLAY"

const api_key= "deokzgUjxm6QHQdp3H3aca1LSZcCpucc"

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


const Details = ({searchTerm, setIndex, id}) => {

    const inpuRef = useRef()
    // const [searchTerm, setSearchTerm] = useState("sphinx");
    const [state, dispatch] = useReducer(reducer, { gif: [] })
  
    const {gif} = state

    useEffect(()=> {
        const url =`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=25&q=${searchTerm}&offset=0&lang=en&id=${id}`;
        
        fetch(url)
            .then(x => x.json())
            .then(y => dispatch({ type: DISPLAY, payload: y.data}))
          },[searchTerm])



    return (
        <React.Fragment>
            <div className="details-container">
      {/* start header */}
      <div className="header">
        <div className='logo'>Giphy</div>
        <nav>
          <ul>
            <li onClick={()=>setIndex(0)}>Home</li>
          </ul>
        </nav>
      </div>
      {/* end header */}

        <div className="details-display">
        {gif.map((show,i)=>
      (  
         <div className="details-body" key={show.id}>
           <img src={show.images.downsized.url} alt="gif"  className="details-image"/>
           <div>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Username: &nbsp; &nbsp;</span>{show.username}</p>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Title: &nbsp; &nbsp;</span>{show.title}</p>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Rating: &nbsp; &nbsp;</span>{show.rating}</p>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Source_tld: &nbsp; &nbsp;</span>{show.source_tld}</p>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Is_sticker: &nbsp; &nbsp;</span>{show.is_sticker}</p>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Import_datetime: &nbsp; &nbsp;</span>{show.import_datetime}</p>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Trending: &nbsp; &nbsp;</span>{show.trending_datetime}</p>
            </div>
          </div>
      ))
      }
      </div>
            </div>
        </React.Fragment>
    );
}




export default Details;
