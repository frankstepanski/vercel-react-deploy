import Filters from '../containers/Filters'
import Pagination from '../containers/Pagination';
import styles from "./MoviesMenu.module.css";

const MoviesMenu = ({
                        handleFilters,
                        moviesPerPage,
                        paginate,
                        totalMovies,    
                    }) => {

    return (

        <div className={styles.moviesMenu}>
            <Filters handleFilters = {handleFilters} totalMovies={totalMovies} />
            <Pagination 
                moviesPerPage = {moviesPerPage}
                paginate = {paginate}
                totalMovies = {totalMovies} 
            />
        </div>
    );
}

export default MoviesMenu;