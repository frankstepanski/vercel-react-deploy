import React from "react";
import MoviesMenu from '../layout/MoviesMenu';
import MovieList from '../presentational/MovieList';
import styles from "./Movies.module.css";

const Movies = ({
    handleFilters,
    movies,
    addReview,
    moviesPerPage,
    paginate,
    currentPage,
    totalMovies    
}) => {

    return (
        <div className={styles.movies}>     
            <MoviesMenu 
                handleFilters = {handleFilters}
                moviesPerPage = {moviesPerPage}
                paginate = {paginate}
                currentPage = {currentPage}
                totalMovies = {totalMovies}
            />

            <div className={styles.moviesListContainer}>
                {
                     <MovieList movies={movies} addReview={addReview} />
                }
            </div>
        </div>
    )
}

export default Movies;