import React from 'react';
import { Header } from './components/Header';
import { Features } from './components/Features';
import { MadeOnZapt } from './components/MadeOnZapt';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />
        <Features />
        <MadeOnZapt />
      </div>
    </div>
  );
}