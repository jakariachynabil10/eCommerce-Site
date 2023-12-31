import React from "react";
import "./App.css";
import Banner from "./Components/Banner";
import CollegeCard from "./Components/CollegeCardSection/CollegeCard";
import CollegeGallery from "./Components/CollegeGallery/CollegeGallery";
import NewsEvent from "./Components/NewsEvent/NewsEvent";
import Testamonial from "./Components/Testamonial";

function App() {
  return (
    <>
      <div className="max-w-full">
        <Banner></Banner>
      </div>
      <CollegeCard></CollegeCard>
      <CollegeGallery></CollegeGallery>
      <NewsEvent></NewsEvent>
      <Testamonial></Testamonial>
    </>
  );
}

export default App;
