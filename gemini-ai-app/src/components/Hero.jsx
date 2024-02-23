import React from 'react'
import Venushead from '../assets/Frame 3.png'
import Midjour from '../assets/Logo.png'
import Openai from '../assets/openai.png'
import "./Hero.css"


const Hero = () => {
  return (
    <div>

        <div className="herosec flex justify-around items-center mt-20">
            <div className="heroleft">
                <div className="imagesec flex">
                <img className ="absolute h-[60px] w-[60px] rotate-[40deg] top-[200px] left-[400px] shadow-sm" src = {Midjour}></img>
                <img className ="absolute h-[50px] w-[50px] top-[150px] rotate-[-20deg] shadow-lg" src = {Openai}></img>
                </div>
                <h1 className='fah text-8xl font-bold mb-3'><span className="gradient-text">Visuals</span> <br/>from Venus</h1>
                <h3 className='f text-lg font-regular text-gray-600'>Using the power of AI to visualize your creative thoughts & ideas <br/> in the form of illustrations, 3d art and diagrams.</h3>
                <button className='b rounded-xl bg-gray-950 text-gray-50 text-xs shadow-2xl mt-4 p-[10px] font-semibold'>Get Started</button>
            </div>

            <div className="heroright">

            <img className = "venushead h-[400px] w-[500px]" src = {Venushead}/>

            </div>
        </div>



    </div>
  )
}

export default Hero