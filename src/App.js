// App.js
import React, { useState } from 'react';
import './App.css';
import StringCalculator from './components/StringCalculator';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <StringCalculator />
      </div>
    </div>
  );
}

export default App;
