import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from './components/SearchBar.js';
import MovieList from './components/MovieList';

const App = () => {
  const [genre, setGenre] = React.useState('');
  const [movies, setMovies] = React.useState([]);

  const handleSearch = (genre) => {
    setGenre(genre);
    fetch(`http://localhost:3000/filmes?genero=${genre}`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </View>
  );
};

export default App;
