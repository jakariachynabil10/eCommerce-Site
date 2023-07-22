import React from 'react';
import './App.css'
import Banner from './Components/Banner';
import CollegeCard from './Components/CollegeCardSection/CollegeCard';
import CollegeGallery from './Components/CollegeGallery/CollegeGallery';


function App() {
  return (
    <>
      <Banner></Banner>
      <CollegeCard></CollegeCard>
      <CollegeGallery></CollegeGallery>
    </>
  )
}

export default App
