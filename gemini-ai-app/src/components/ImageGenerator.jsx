import React from 'react'
import Velp from '../images/velp.jpg'


const ImageGenerator = () => {
  return (
    <div className = "ai-image-gen flex flex-col justify-center items-center mt-10">
        
        <div className="header text-5xl mb-10 ">Your Ai Image</div>
        <img className = "inage h-[300px] w-[300px]" src = {Velp} />
        <input type="text" className="searchname h-[20px] w-[50px]" />
    </div>
  )
}

export default ImageGenerator