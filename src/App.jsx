import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'


const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setPhotos(response.data); 
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    
      <div className="photo-gallery">
        <h1>Photo Gallery</h1>
        <div className="gallery">
          {photos.map(photo => (
            <div key={photo.id} className="photo">
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default PhotoGallery;
