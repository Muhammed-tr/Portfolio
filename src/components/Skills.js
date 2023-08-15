import React from 'react';
import { RiJavascriptLine, RiReactjsFill } from 'react-icons/ri';
import { BsFiletypeHtml, BsFiletypeCss } from 'react-icons/bs';

export default function Skills() {
  return (
    <div name='Skills' className='text-gray-300 bg-slate-900'>
        
      <div className='flex flex-row w-full h-screen max-w-[1000px] mx-auto items-center justify-center pb-72 md:pb-0 '>
        <div>
          <ul className=' md:flex gap-x-6  items-center justify-center'>
            <li className='flex px-24 py-2 md:px-6'>
              <RiJavascriptLine size={100} />
              <p className='text-white text-center py-2'>JAVASCRIPT</p>
            </li>

            <li className='flex px-24 py-2 md:px-6'>
              <RiReactjsFill size={100} />
              <p className='text-white text-center py-2'>REACT</p>
            </li>

            <li className='flex px-24 py-2 md:px-6'>
              <BsFiletypeHtml size={100} />
              <p className='text-white text-center py-2'>HTML</p>
            </li>

            <li className='flex px-24 py-2  md:px-6'>
              <BsFiletypeCss size={100}/>
              <p className='text-white text-center py-2'>CSS</p>
            </li>

          </ul>
          <p className=' py-4 pb-64 md:pb-0'>  natus modi voluptatum impedit vitae porro rem, quia odio nam harum explicabo accusamus illo autem iusto pariatur iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo consequatur dignissimos dolore pariatur ipsa. Illo amet quis ullam quae reiciendis recusandae numquam in qui, officia nam, unde fuga obcaecati!</p>
        </div>
      </div>
    </div>
  );
}
