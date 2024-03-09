/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header';
import ShoesList from './components/ShoesList';
import GenderList from './components/GenderList';
import Kids from './components/Kids';
import Price from './components/Price';
import Size from './components/Size';
import Colour from './components/Colour';
import Display from './components/Display';



function Catalogue() {
    
    return (
        <>
        <div className='font-[Inter]'>
            <Header />
            <div className="lg:relative mt-0 lg:mr-20 lg:ml-20 lg:w-auto lg:bg-white lg:flex lg:mb-8 mb-10 pb-3">
                <div className='lg:w-1/5 pl-5'>
                    <div className='sticky lg:max-h-svh lg:top-0 lg:overflow-hidden md:overflow-hidden lg:bg-white'>
                        <div className='lg:overflow-y-scroll md:overflow-y-scroll scrollbar-webkit'>              
                            <aside className='invisible h-0 lg:visible lg:h-screen'>
                                <div className='lg:mb-16 lg:text-xl lg:leading-relaxed font-medium'>
                                <ShoesList/>                
                                </div>
                                
                                <div className="mb-10 mt-5 invisible lg:visible lg:w-11/12 lg:h-px bg-slate-300"></div>

                                <div className='lg:mb-16 lg:text-xl lg:leading-relaxed font-medium'>
                                <GenderList />
                                </div>

                                <div className="mb-10 mt-5 invisible lg:visible lg:w-11/12 lg:h-px bg-slate-300"></div>

                                <div className='lg:mb-16 lg:text-xl lg:leading-relaxed font-medium'>
                                <Kids />
                                </div>

                                <div className="mb-10 mt-5 invisible lg:visible lg:w-11/12 lg:h-px bg-slate-300"></div>

                                <div className='lg:mb-16 lg:text-xl lg:leading-relaxed font-medium'>
                                <Price />
                                </div>

                                <div className="mb-10 mt-5 invisible lg:visible lg:w-11/12 lg:h-px bg-slate-300"></div>

                                <div className='lg:mb-16 lg:text-xl lg:leading-relaxed font-medium'>
                                <Size />
                                </div>

                                <div className="mb-10 mt-5 invisible lg:visible lg:w-11/12 lg:h-px bg-slate-300"></div>

                                <div className='lg:mb-16 lg:text-xl lg:leading-relaxed font-medium'>
                                <Colour />
                                </div>             
                            </aside>            
                    </div>
                </div>
                </div>
                <section className="w-auto lg:w-4/5 lg:min-h-svh overflow-auto bg-white lg:pl-10 lg:pr-5">
                    <div className="grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-6"> 
                        <Display />
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                        <Display />       
                    </div>
                </section>
            </div>
        </div>
      
        
        
        </>
    );
}

export default Catalogue;