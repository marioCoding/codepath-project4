import { useState } from 'react'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import './App.css';

function App() {
  const [catImage, setCatImage] = useState('');

  const fetchCatImage = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const catData = await response.json();
      const catImageUrl = catData[0].url;
      setCatImage(catImageUrl);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  return (
    <div>
      <h1>Veni Vici!</h1>
      <h2>Discover cats from your wildest dreams!</h2>
      <button onClick={fetchCatImage}>Get New Cat</button>
      {catImage && <img src={catImage} alt="Cat" style={{ maxWidth: '100%' }} />}
    </div>
  );
}

export default App;