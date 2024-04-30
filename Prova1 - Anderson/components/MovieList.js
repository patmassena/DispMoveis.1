import React from 'react';
import { FlatList, Text } from 'react-native';

const MovieList = ({ movies }) => {
  if (!movies.length) {
    return <Text style={{ paddingLeft: 50, paddingTop: 20 }}>
        Nenhum filme encontrado para este gênero.</Text>;
  }

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => <Text key={item.titulo}>{item.titulo}</Text>}
    />
  );
};

export default MovieList;
