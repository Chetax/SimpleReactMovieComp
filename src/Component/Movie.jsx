import React, { useState } from "react";
import { getMovies } from '../15- Starter Code/Starter Code/services/fakeMovieService'

const Movie = () => {
    const movies = getMovies(); // Call getMovies to retrieve the movies
    const [premovie, setmovie] = useState(movies);

    const handleDelete = movieToDelete => {
        const newMovies = premovie.filter(movie => movie._id !== movieToDelete._id);
        setmovie(newMovies);
    }
    if(premovie.length===0)
    {
       return  <div className="container">
    <h3 className="mt-5">No data found in the databse</h3 > 
    </div>
    }
    return (
 
        <div className="container">
            <h3 className="text-center">{premovie.length} Movie data found in the databse</h3 > 
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {premovie.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={() => handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Movie;
