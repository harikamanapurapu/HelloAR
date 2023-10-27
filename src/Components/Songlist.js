
import React from 'react';
import Delete from '../assets/delete.png';
import play from '../assets/play.png';

function SongList({ songs, setCurrentSongIndex, onDelete }) {
  const playSong = (index) => {
    setCurrentSongIndex(index);
  };

  return (
    <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <table style={{ width: '80%', height: '70vh', marginLeft: '20px' }}>
        <thead style={{ width: '80%', marginLeft: '30px' }}>
          <tr>
            <th>Song Name</th>
            <th>Source</th>
            <th>Added On</th>
          </tr>
        </thead>
        <tbody style={{ width: '80%', marginLeft: '30px' }}>
          {songs.map((song, index) => (
            <tr key={index}>
              <td style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '20px' }}>
                <img src={song.Imageurl} alt="" width="50" height="50" />
                {song.title}
              </td>
              <td>YouTube</td>
              <td>{song.AddedOn}</td>
              <td>
                <img src={play} alt="" onClick={() => playSong(index)} />
              </td>
              <td>
                <img src={Delete} alt="Delete" onClick={() => onDelete(index)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SongList;





