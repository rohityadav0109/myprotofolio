import React, { useState } from 'react';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    { src: 'https://via.placeholder.com/400x300?text=Photo+1', alt: 'Photo 1', desc: 'Description 1' },
    { src: 'https://via.placeholder.com/400x300?text=Photo+2', alt: 'Photo 2', desc: 'Description 2' },
    // Add more: { src: '/images/your-photo.jpg', alt: '...', desc: '...' }
  ];

  const openModal = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#333' }}>My Photo Gallery</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                cursor: 'pointer',
                transition: 'transform 0.3s',
              }}
              onClick={() => openModal(img.src)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              {img.desc}
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            zIndex: 1000,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '100px',
          }}
          onClick={closeModal}
        >
          <span
            style={{
              position: 'absolute',
              top: '15px',
              right: '35px',
              color: '#f1f1f1',
              fontSize: '40px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={closeModal}
          >
            &times;
          </span>
          <img
            src={selectedImage}
            alt="Full size"
            style={{ maxWidth: '80%', maxHeight: '80%', borderRadius: '8px' }}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
