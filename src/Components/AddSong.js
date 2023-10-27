
// AddSongForm.js
import React, { useState } from 'react';

function AddSongForm({ addSong, closeForm }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [source, setSource] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && url && source) {
      addSong({ title, url, source, thumbnail, addedOn: new Date() });
      setTitle('');
      setUrl('');
      setSource('');
      setThumbnail('');
      setImagePreview('');
      closeForm(); // Close the form after adding a song
    }
  };

  const handleThumbnailChange = (e) => {
    const imageUrl = e.target.value;
    setThumbnail(imageUrl);
    setImagePreview(imageUrl);
  };

  return (
    <div style={{ background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '500px', height: '400px', position: 'absolute', top: '100px', left: '350px', border: '1px solid black', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
      <h2>Add a Song</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Song Name" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '200px', height: '30px', border: '1px solid black', borderRadius: '5px' }} />
        <input type="text" placeholder="Song URL" value={url} onChange={(e) => setUrl(e.target.value)} style={{ width: '200px', height: '30px', border: '1px solid black', borderRadius: '5px' }} />
        <input type="text" placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} style={{ width: '200px', height: '30px', border: '1px solid black', borderRadius: '5px' }} />
        <input type="text" placeholder="Thumbnail image url" value={thumbnail} onChange={handleThumbnailChange} style={{ width: '200px', height: '30px', border: '1px solid black', borderRadius: '5px' }} />
        {imagePreview && <img src={imagePreview} alt="Thumbnail Preview" width="100" />}
        <button onClick={closeForm} style={{ width: '100px', height: '30px', border: 'none', borderRadius: '5px', backgroundColor: 'hsla(41, 98%, 57%, 1)', color: 'black', textAlign: 'center' }}>Cancel</button>
        <button type="submit" style={{ width: '100px', height: '30px', border: 'none', borderRadius: '5px', backgroundColor: 'hsla(41, 98%, 57%, 1)', color: 'black', textAlign: 'center' }}>Add Song</button>
      </form>
    </div>
  );
}

export default AddSongForm;

