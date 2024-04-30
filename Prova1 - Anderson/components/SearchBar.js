import React from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [genre, setGenre] = React.useState('');

  const handleSubmit = () => {
    onSearch(genre);
  };

  return (
    <View style={{ padding: 10, paddingTop: 100 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Digite o gênero, em inglês (Horror pode ser em pt mesmo)"
        onChangeText={(text) => setGenre(text)}
        value={genre}
      />
      <Button title="Buscar" onPress={handleSubmit} />
    </View>
  );
};

export default SearchBar;
