import { useState, useEffect } from 'react';
import './Admin.css';

const ImageManager = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('/NewsLetter/newImageLink.json');
      if (!response.ok) throw new Error('Failed to fetch images');
      const data = await response.json();
      setImages(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!newImage) {
      alert('Please select an image first');
      return;
    }

    try {
      // In a real app, you would upload the file to your server here
      // For this demo, we'll simulate the upload
      const fileName = `image-${Date.now()}.${newImage.name.split('.').pop()}`;
      const imagePath = `/NewsLetter/NewsImages/${fileName}`;
      
      const newId = Math.max(...images.map(item => item.id), 0) + 1;
      const updatedImages = [...images, { id: newId, image: imagePath }];
      
      setImages(updatedImages);
      setNewImage(null);
      console.log(imagePath);
      alert(`Image would be saved to: ${imagePath} (In a real app, this would upload the file)`);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    }
  };

  const deleteImage = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedImages = images.filter(item => item.id !== id);
      setImages(updatedImages);
      // In a real app, you would also delete the actual file here
    }
  };

  if (isLoading) {
    return <div className="loading">Loading images...</div>;
  }

  return (
    <div className="image-manager">
      <div className="upload-section">
        <h2>Upload New Image</h2>
        <form onSubmit={handleUpload}>
          <div className="form-group">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Upload</button>
        </form>
      </div>
      
      <div className="image-list">
        <h2>Existing Images</h2>
        {images.length === 0 ? (
          <p>No images found</p>
        ) : (
          <div className="image-grid">
            {images.map(image => (
              <div key={image.id} className="image-item">
                <div className="image-preview">
                  <img 
                    src={image.image} 
                    alt={`Newsletter ${image.id}`} 
                    onError={(e) => {
                      e.target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                <div className="image-path">{image.image}</div>
                <button 
                  onClick={() => deleteImage(image.id)}
                  className="btn btn-delete"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageManager;