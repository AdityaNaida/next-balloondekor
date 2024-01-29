"use client";
import { useState, useRef } from 'react';
import Hero from "@/components/homepage/Hero";
import Heromobile from "@/components/homepage/Heromobile";
import Explorecategory from "@/components/homepage/Explorecategory";
import Forsection from "@/components/homepage/Forsection";
import Themes from "@/components/homepage/Themes";
import Familymembers from "@/components/homepage/Familymembers";
import AgeNumber from "@/components/homepage/AgeNumber";
import Testimonials from "@/components/homepage/Testimonials";

const Home=()=>{
  const ageSlideRef = useRef(null);
  const testimonialSliderRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleRigthArrowClick=()=>{
    if(ageSlideRef.current){
      const newScrollLeft = scrollLeft + 600;
      ageSlideRef.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  }
  const handleLeftArrowClick=()=>{
    if(ageSlideRef.current){
    const newScrollLeft = scrollLeft - 600;
    ageSlideRef.current.scrollLeft = newScrollLeft;
    setScrollLeft(newScrollLeft)
  }
  }
const TestRightBtn=()=>{
  if(testimonialSliderRef.current){
    const newScrollLeft = scrollLeft + 600;
     testimonialSliderRef.current.scrollLeft = newScrollLeft;
     setScrollLeft(newScrollLeft);
  }
}
const TestLeftBtn=()=>{
  if(testimonialSliderRef.current){
    const newScrollLeft = scrollLeft - 600;
    testimonialSliderRef.current.scrollLeft = newScrollLeft;
    setScrollLeft(newScrollLeft);
  }
}

  return(
    <>
   <Hero />
   <Heromobile />
   <Explorecategory />
   <Forsection />
   <Themes />
   <Familymembers />
   <AgeNumber slider={ageSlideRef} rightClick={handleRigthArrowClick} leftClick={handleLeftArrowClick}/>
   <Testimonials  testSlider={testimonialSliderRef} rightTestClick={TestRightBtn} leftTestClick={TestLeftBtn}/>
    </>
  )
}
export default Home;