import React, { useRef, useState, useEffect } from "react";
import './css/Home.css'
import Details from "./Details";
import Search from "./Search";



const Card = ({state, api_key, dispatch, DISPLAY}) => {
  const inpuRef = useRef()
  const [index, setIndex] = useState(0)
  const [showId, setShowId] = useState("")
  const [searchTerm, setSearchTerm] = useState("sphinx");

  const {gif} = state
  console.log(gif)

  const setSearch = e => {
    setSearchTerm(e.target.value)
  }

  
  useEffect(()=> {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=25&q=${searchTerm}&offset=0&lang=en`;
    
    fetch(url)
    	.then(x => x.json())
    	.then(y => dispatch({ type: DISPLAY, payload: y.data}))
    },[searchTerm])
    
   const updateId  = id =>{
     setShowId(id)
     console.log("id", id)
   }

  return (
    <React.Fragment>
      {index === 0 ?
      <div className="container-fluid">

      {/* start header */}
      <div className="header">
        <div className='logo'>Giphy</div>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
      </div>
      {/* end header */}

      {/* start body  */}
      <div className="body">
        <h1 className="body-title">GIPHY</h1>
        <form onSubmit={e => {
          e.preventDefault();
          setSearchTerm("")
        }}
        >
        

        <Search search={setSearch} searchTerm={searchTerm} />
        
        
        <button type="submit" className="searchbtn">SEARCH</button>
        </form>
        <div className="gif-display">
        {gif.map((show,i)=>
      (  
         <div className="text-white each-gif" key={show.id} onClick={()=>{setIndex(1); updateId(show.id);}}>
           <img src={show.images.downsized.url} alt="gif"  className="image"/>
            <p><span style={{color:"purple", fontWeight:"1000"}}>Username: &nbsp; &nbsp;</span>{show.username}</p>
          </div>
      ))
      }
      </div>

      </div>
      
      

      {/* end body */}

      </div>
      :
     <Details searchTerm={searchTerm} setIndex={setIndex} id={updateId}/>

}
    </React.Fragment>
  );
}


export default Card;