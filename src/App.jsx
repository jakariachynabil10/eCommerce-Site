import React from 'react';
import './App.css'
import Banner from './Components/Banner';
import CollegeCard from './Components/CollegeCardSection/CollegeCard';
import CollegeGallery from './Components/CollegeGallery/CollegeGallery';
import NewsEvent from './Components/NewsEvent/NewsEvent';


function App() {
  return (
    <>
      <Banner></Banner>
      <CollegeCard></CollegeCard>
      <CollegeGallery></CollegeGallery>
      <NewsEvent></NewsEvent>
    </>
  )
}

export default App
