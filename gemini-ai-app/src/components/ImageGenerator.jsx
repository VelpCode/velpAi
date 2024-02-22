import React from 'react'
import Velp from '../images/velp.jpg'
import "./styles.css";


const ImageGenerator = () => {
  return (
    <div className = "ai-image-gen flex flex-col justify-center items-center mt-10">
        
        <div className="header text-5xl mb-10 ">Your Ai Image</div>
        <img className = "inage h-[300px] w-[300px] mb-5" src = {Velp} />
        <input type="text" className="searchname h-[20px] w-[400px] p-8 rounded-lg" />
        <button className='generate-button'>Generate</button>
    </div>
  )
}

export default ImageGenerator