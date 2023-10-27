import React from "react";
import SongList from '../Components/Songlist';
import AddSongForm from '../Components/AddSong';
import grid from "../assets/grid.png"
import arrow from "../assets/arrow.png"
import  { useState, useRef } from 'react';
import songsData from '../data/Songs'; 
import { useNavigate } from 'react-router-dom';
import Player from "./Player"


function Page(){

    const navigate = useNavigate();
    const [songs, setSongs] = useState(songsData); // Initialize with your songs data
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isAddSongFormVisible, setAddSongFormVisibility] = useState(false);
    const audioRef = useRef(null);
  
    const addSong = (newSong) => {
      setSongs([...songs, newSong]);
      setAddSongFormVisibility(false); // Close the form after adding a song
    };
  
    const playSelectedSong = (index) => {
      setCurrentSongIndex(index);
  
      if (audioRef.current) {
        audioRef.current.load(); // Reset the audio element
        audioRef.current.play(); // Play the selected song
      }
    };


    return(
        <div>
            <div style={{display:"flex"}}>
                <div className="Sidebar">
                <div>
                <h1 className="Sidebar-header">LOGO</h1>
                <h1 style={{display:"inline-flex",gap:"5px",marginLeft:"10px",fontSize:"25px"}}><img src={grid} alt='' style={{width:"24px",height:"24px"}}/>Songs</h1>
                </div>
                <p className="logout"><img src={arrow} alt="" className="img" onClick={()=>{navigate("/")}}/>Logout</p>
            </div>
            <div style={{display:"flex",flexDirection:"column", width:"80%",height:"100vh"}}>
                <div style={{display:"flex",justifyContent:"space-between",margin:"20px"}}>
                    <p style={{fontSize:"20px",fontFamily:"Roboto"}}>Songs</p>
                    <button onClick={() => setAddSongFormVisibility(!isAddSongFormVisible)} style={{width:"100px",height:"30px",border:"none",borderRadius:"5px",backgroundColor:"hsla(41, 98%, 57%, 1)",color:"black",textAlign:"center"}}>
                    {isAddSongFormVisible ? 'Close Add Song Form' : 'Add Song'}
                    </button>
                </div>
                {isAddSongFormVisible && (
                <AddSongForm addSong={addSong} closeForm={() => setAddSongFormVisibility(false)} />
                )}
                <SongList
                songs={songs}
                setCurrentSongIndex={playSelectedSong} // Update to play the selected song
                currentSongIndex={currentSongIndex} // Pass current song index
                />
                <Player
                songs={songs}
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                audioRef={audioRef} // Pass the audio reference to the Player
                />
            </div>
            </div>
        </div>
    )

}

export default Page