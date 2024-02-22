import React, { useState, useRef } from 'react'
import Velp from '../images/velp.jpg'
import "./styles.css";



const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return;
    }
    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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",
            "User-Agent": "Chrome", // Corrected syntax
          },
          body: JSON.stringify({
            prompt: `${inputRef.current.value}`,
            n: 1,
            size: "512x512",
          }),
        }
      );
      const data = await response.json();
      // Set the image URL based on the response
      // This assumes the API returns a URL; adjust as needed based on actual API response structure
      setImage_url(data.image_url); // Placeholder; adjust to actual API response
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };


  return (
    <div className = "ai-image-gen flex flex-col justify-center items-center mt-10">
        
        <div className="header text-5xl mb-10 ">Your Ai Image</div>
        <img className = "inage h-[300px] w-[300px] mb-5" src = {image_url==="/"?default_image:image_url} />

        <div className="searchbox flex mb-10">
          <input type="text" ref={inputRef} className="searchname h-[20px] w-[400px] p-8 rounded-lg" />
          <button className='generate-button ml-5' onClick={() => {imageGenerator}}>Generate</button>
        </div>
    </div>
  )
}

export default ImageGenerator