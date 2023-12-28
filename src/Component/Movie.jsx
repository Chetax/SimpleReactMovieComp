import React from "react";
import { useState } from "react";
import Emptycomp from './Emptycomp';
import { getMovies } from '../15- Starter Code/Starter Code/services/fakeMovieService'

const Movie = () => {
    const movies = getMovies(); // Call getMovies to retrieve the movies
    let c=movies.length;
    const [count,setcount]=useState(0);
    return (

        <div className="container" >
            <h3 className="mt-3" id="cont1">Showing {movies.length} movies in the database.</h3>
            <div className="row bg-secondary mt-4" id="cont2" style={{ height: '1px' }}> </div>
            <div className="row" id="cont3">
                <div className="col-4"><h3> Title </h3></div>
                <div className="col-2"><h3> Genre </h3></div>
                <div className="col-2"><h3> Stock </h3></div>
                <div className="col-2"><h3> Rate </h3></div>
                <div className="col-2"></div>
            </div>

            {movies.map((it) => (
                <>
                   <div className="row bg-secondary mt-4" id={it._id+1} style={{ height: '1px' }}> </div>
                 <div className="row mt-3 ${}" key={it._id} id={it._id}>
                    <div className="col-4"><h4>{it.title}</h4></div>
                    <div className="col-2"><h4>{it.genre.name}</h4></div>
                    <div className="col-2"><h4>{it.numberInStock}</h4></div>
                    <div className="col-2"><h4>{it.dailyRentalRate}</h4></div>
                    <div className="col-2 "><button className="btn btn-danger" onClick={()=>{
                         const moviecomp=document.getElementById(it._id);
                         const moviecomp2=document.getElementById(it._id+1);
                         moviecomp.style.display="none";
                         moviecomp2.style.display="none";
                         c--
                         if(c===0)
                         {setcount(1);
                     let x=document.getElementById('cont1');
                     let y=document.getElementById('cont2');
                     let z=document.getElementById('cont3');
                     x.style.display='none';
                     y.style.display='none';
                     z.style.display='none';
                        }
       
                    }} >delete</button></div>
                </div>
          
                </>
               
            ))}
  {count ===1 ? <Emptycomp/>  :<div></div>}
  
        </div>
    );
};

export default Movie;
