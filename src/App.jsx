import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <main>
        <Header />
        <Gallery />
      </main>
    </div>
  );
}

export default App;