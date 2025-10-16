import React from 'react'
import Lottie from "lottie-react";
import LoadingAnimation from '../assets/Loading_ex.json';

function MyLoadingAnimation() {
  return (
    <div style={{ width: 200, height:200, margin: "0 auto"}}>
      <Lottie 
        animationData={LoadingAnimation} 
        loop={true} 
        autoplay={true} 
      />
    </div>
  )
}

export default MyLoadingAnimation