import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About the Artist</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Born on June 1, 1986, I am a passionate artist dedicated to capturing the beauty 
          and emotions of life through my paintings. My work reflects both the subtle nuances 
          and bold expressions of human experience, nature, and abstract concepts.
        </p>
        <p className="mb-4">
          With years of experience in various mediums, I have developed a unique style that 
          combines traditional techniques with contemporary perspectives. Each piece is created 
          with careful attention to detail and a deep commitment to artistic excellence.
        </p>
        <p className="mb-4">
          My artwork has been featured in various exhibitions and private collections, 
          reflecting my journey as an artist and my continuous exploration of new artistic 
          possibilities.
        </p>
      </div>
    </div>
  );
}