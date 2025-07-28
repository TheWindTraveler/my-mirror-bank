
import React from 'react'
import backgroundImage from './assets/background.jpg'

// I showed up today!

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 bg-black bg-opacity-50">
        <h1 className="text-2xl font-bold">MyMirrorBank</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
export default App
