// import React from 'react';
// import { useNavigate, Routes, Route } from 'react-router-dom';
// import Login from './Components/Login/Login';
// import VerifyOTP from './Components/OTP/Otp';
// import Player from './Components/Home/Home';

// function App() {
//   const navigate = useNavigate();

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Login navigate={navigate} />} />
//         <Route path="/verify-otp" element={<VerifyOTP />} />
//         <Route path='/home' element={<Player />}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import SongList from './Components/Songlist';
// import AddSongForm from './Components/AddSong';
// import Player from './Components/Player';

// import songsData from './data/Songs'; // Import your songs data

// function App() {
//   const [songs, setSongs] = useState(songsData); // Initialize with your songs data
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);

//   const addSong = (newSong) => {
//     setSongs([...songs, newSong]);
//   };

//   return (
//     <div>
//       <h1>Music Player App</h1>
//       <AddSongForm addSong={addSong} />
//       <Player
//         songs={songs}
//         currentSongIndex={currentSongIndex}
//         setCurrentSongIndex={setCurrentSongIndex}
//       />
//       <SongList songs={songs} setCurrentSongIndex={setCurrentSongIndex} />
//     </div>
//   );
// }

// export default App;
import React from 'react';

import { useNavigate, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import VerifyOTP from './Components/OTP/Otp';

import "./Components/Sidebar.css"

import Page from './Components/Page';

// Import your songs data

function App() {
  const navigate=useNavigate()


  return (
        <div className="App">
      <Routes>
        <Route path="/" element={<Login navigate={navigate} />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path='/home' element={<Page />}/>
      </Routes>
    </div>

  );
}

export default App;








