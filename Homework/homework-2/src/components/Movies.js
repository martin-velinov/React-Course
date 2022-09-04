import React from 'react'
import PropTypes from 'prop-types';
import '../css/Styles.css'


export const Movies= ({filmovi})=> {
  return (
    <>
    <h1>List of Movies</h1>
    <div id="movies">
            {filmovi.map((film,i)=>{
                return(
                <div key={i}>
                    <h2> {film.name}</h2>
                    <a href={film.imgUrl}><img src={film.imgUrl} alt={film.name} /></a>
                    <p><span>Year:</span> {film.year}</p>
                    <p><span>Genre:</span> {film.genre}</p>
                    <p><span>Plot:</span>{film.plot}</p>
                    <a className="link" href={film.imdbLink}> See movie </a>
                    <br/>
                </div>
                )
            })}
        </div>
        </>
  )
}

Movies.propTypes = {
  filmovi: PropTypes.arrayOf(PropTypes.object).isRequired
}