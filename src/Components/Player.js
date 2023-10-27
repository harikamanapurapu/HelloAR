
import React, { useState } from 'react';

function Player({ songs, currentSongIndex, setCurrentSongIndex, audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playNextSong = () => {
    // Calculate the index of the next song
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    playSelectedSong(nextIndex);
  };

  const playPreviousSong = () => {
    // Calculate the index of the previous song
    const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(previousIndex);
    playSelectedSong(previousIndex);
  };

  const playSelectedSong = (index) => {
    if (audioRef.current) {
      setCurrentSongIndex(index);
      audioRef.current.src = songs[index].url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginLeft: '30px' }}>
      <audio ref={audioRef} controls>
        <source src={songs[currentSongIndex]?.url} type="audio/mpeg" />
      </audio>
      <div>
        <button onClick={playPreviousSong} style={{width:"100px",height:"30px",border:"none",borderRadius:"5px",backgroundColor:"hsla(41, 98%, 57%, 1)",color:"black",textAlign:"center"}}>Previous</button>
        <button onClick={isPlaying ? () => audioRef.current.pause() : () => audioRef.current.play()} style={{width:"100px",height:"30px",border:"none",borderRadius:"5px",backgroundColor:"hsla(41, 98%, 57%, 1)",color:"black",textAlign:"center"}}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={playNextSong} style={{width:"100px",height:"30px",border:"none",borderRadius:"5px",backgroundColor:"hsla(41, 98%, 57%, 1)",color:"black",textAlign:"center"}}>Next</button>
      </div>
    </div>
  );
}

export default Player;

