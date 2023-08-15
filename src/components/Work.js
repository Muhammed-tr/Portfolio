import React from 'react';
import Project1 from "../images/project1.png";
import Project2 from "../images/project2.png";
import Project3 from "../images/project3.png";
import { Document, Page, StyleSheet, Image, View, Text } from '@react-pdf/renderer';
import pdfFile from '../images/Portfolio.pdf';
export default function Work() {
    return (
<div name='Work' className='text-gray-300 bg-slate-900'>
        
      <div className='flex  flex-row  w-full h-screen max-w-[1000px] mx-auto items-center justify-center '>
        <div>
          <ul className='flex md:flex-row flex-col gap-x-6 items-center justify-center'>

            <li className=''>
               <img className='md:hover:scale-150 hover:scale-90 duration-700 ' src={Project1} alt="" />
              <p className='text-white text-center py-2'>C# OOP</p>
      
            </li>

            <li>
            <img className='md:hover:scale-150 hover:scale-90 duration-700' src={Project2} alt="" />
              <p className='text-white text-center py-2'>JAVA</p>
            </li>

            <li className='pb-24 md:pb-0'>
            <img className='md:hover:scale-150 hover:scale-90 duration-700' src={Project3} alt="" />
              <p className='text-white text-center py-2'>Phyton Data Science</p>
            </li>
            
          </ul>
          <p className='py-4 bg-slate-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Dolorem laboriosam nemo perspiciatis natus modi 
           voluptatum impedit vitae porro rem, quia odio nam harum explicabo accusamus illo autem iusto pariatur iste. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quam quo consequatur dignissimos dolore pariatur ipsa. Illo amet quis ullam quae reiciendis
             recusandae numquam in qui, officia nam, unde fuga obcaecati!</p>
    
    
        </div>

      </div>
    
    
    </div>

    );
}
