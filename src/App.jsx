import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import NowPlaying from './components/pages/NowPlaying';
import NotFound from './components/pages/NotFound';
import { getAllMovies } from "./services";

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]); 
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 5;
  const indexOfLastRecord = currentPage * moviesPerPage;
  const indexOfFirstRecord = indexOfLastRecord - moviesPerPage;
 
  const currentMovies = visibleMovies.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const addReview = (id, rating, comment) => {
   
    const _movies = [...movies];
    const index = _movies.findIndex(movie => movie.id === id);  

    _movies[index].reviews.push({
        user: `user${Math.floor(Math.random() * 99) + 1}`,
        stars: parseInt(rating),
        comment: comment,
        date: new Date().toISOString(),
    });

    setMovies(_movies);
  }

  const handleFilters = (categories) => {

    // reset movies to show all (hidden: false)
    const _movies = [...movies].map(movie => { movie.hidden = false; return movie; });
    const _categories = [];

    // reset current page to 1 (pagination)
    setCurrentPage(1);

    // convert categories to an array
    Object.entries(categories).forEach(([key, value]) => {

        if (value) {
            _categories.push(key);
        }
    });

    // If no filtered categories, send back all "reset" movies with no changes
    if (!_categories.length) { 
      setMovies(_movies); 
      setVisibleMovies(_movies.filter(movie => movie.hidden === false));
      return;
    }

    // hide movies that don't match the any of the selected categories (hidden = true); 
    _movies.forEach((movie) => {

      if (!movie.categories.some(category => _categories.includes(category))) {
          movie.hidden = true;
      } 
    });

    // send back the filtered movies (i.e. movies that match at least one of the selected categories)
    setMovies(_movies);
    setVisibleMovies(_movies.filter(movie => movie.hidden === false));
  }

  // Populating movies to be rendered in the Home and Movies component
  // FeaturedMovies are rendered in the Home component
  // VisibleMovies are rendered in the Movies component
  // Note: useEfect will only run once when the component mounts
  useEffect(() => {
    
    getAllMovies("https://api-server-xki8.onrender.com/more-movies")
        .then((data) => {
            // all movies (original data from the API)
            setMovies(data);
            // featured movies that will be rendered in the Home component
            setFeaturedMovies([...data].filter(movie => movie.featured === true));
            // movies that will be rendered in the Movies component
            setVisibleMovies([...data].filter(movie => movie.hidden === false));
            setIsLoading(false);
        }).catch(err => {
          console.log(err);
        })
  }, []);

  return (

    <PublicLayout>
        <Routes>
            <Route index element={<Home movies={featuredMovies} />} />
            <Route 
                   path='movies' 
                   element={
                             <Movies 
                                  movies={currentMovies} 
                                  handleFilters = {handleFilters}
                                  addReview={addReview}
                                  moviesPerPage={moviesPerPage}
                                  currentPage={currentPage}
                                  paginate={paginate}
                                  totalMovies={visibleMovies.length}
                              />  
                            }   
            /> 
            <Route path='now-playing' element={<NowPlaying />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </PublicLayout>

  );
}

export default App;