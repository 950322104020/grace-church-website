import React from 'react';

const Gallery = () => {
  return (
    <div style={{ padding: '4rem 10%', minHeight: '70vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: '#1a2530' }}>Our Gallery</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>Glimpses of grace from our church family.</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {/* Placeholders for images */}
        <div style={{ height: '200px', backgroundColor: '#e0e0e0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>Image 1</div>
        <div style={{ height: '200px', backgroundColor: '#e0e0e0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>Image 2</div>
        <div style={{ height: '200px', backgroundColor: '#e0e0e0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>Image 3</div>
        <div style={{ height: '200px', backgroundColor: '#e0e0e0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>Image 4</div>
      </div>
    </div>
  );
};

export default Gallery;