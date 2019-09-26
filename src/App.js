import React from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading : true,
    movies: []
  }

  getMovie = async () => {
    const {
      data : {
        data : { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })
  }

  componentDidMount(){
    this.getMovie();
  }
  
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? 
          (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {
                movies.map(movies => (
                  <Movie key={movies.id} 
                  id={movies.id} 
                  year={movies.year} 
                  title={movies.title} 
                  summary={movies.summary}
                  poster={movies.medium_cover_image}
                  genres={movies.genres}/>)
                )
              }
            </div>
          )}
      </section>
    );
  }
}


//component : mounting, updating, unmounting
//mountion - function 1. 2. 3.     /updating function - 1.    /unmountion - function 1.

export default App;
