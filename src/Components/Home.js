import React, { useState } from 'react';
import AddSongForm from './AddSongForm';
import SongList from './Songlist';

function Home() {
  const [songs, setSongs] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility

  const addSong = (newSong) => {
    setSongs([...songs, newSong]);
    closeForm(); // Close the form after adding a song
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <button onClick={openForm}>Add Song</button>
      {isFormOpen && (
        <AddSongForm addSong={addSong} closeForm={closeForm} />
      )}
      <SongList songs={songs} />
    </div>
  );
}

export default Home;
