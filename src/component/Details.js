import React, {useState, useEffect, useReducer, useRef} from 'react'
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
   document.title = "giphy"
  console.log('details',id)

    const inpuRef = useRef()
    const [state, dispatch] = useReducer(reducer, { gif: [] })
  
    const {gif} = state

    useEffect(()=> {
      const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`
        // const url2 =`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=1&q=${searchTerm}&offset=0&lang=en&id=${id}`;
        
        fetch(url)
            .then(x => x.json())
            .then(y => dispatch({ type: DISPLAY, payload: y.data}))
          },[])

          console.log('detailsgif',gif)
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

         <div className="details-body" key={gif.id}>
           {/* <img src={gif.downsized_large.url} alt="gif"  className="details-image"/> */}
           <div>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Username: &nbsp; &nbsp;</span>{gif.username}</p>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Title: &nbsp; &nbsp;</span>{gif.title}</p>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Rating: &nbsp; &nbsp;</span>{gif.rating}</p>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Source_tld: &nbsp; &nbsp;</span>{gif.source_tld}</p>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Is_sticker: &nbsp; &nbsp;</span>{gif.is_sticker}</p>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Import_datetime: &nbsp; &nbsp;</span>{gif.import_datetime}</p>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Trending: &nbsp; &nbsp;</span>{gif.trending_datetime}</p>
            </div>
          </div>
      ))
      </div>
            </div>
        </React.Fragment>
    );
}




export default Details;
