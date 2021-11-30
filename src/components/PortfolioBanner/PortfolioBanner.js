import React from 'react';
import "./PortfolioBanner.css"
import Me from '../img/maher-pic3-removebg-preview.png'
const PortfolioBanner = () => {
    return (
        <div className='i '>
            <div className='i-left'>
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My name is </h2>
                    <h1 className='i-name'>Mehedi Hasan</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                Junior Font-End Developer
                            </div>
                            <div className="i-title-item">
                                React Js
                            </div>
                            <div className="i-title-item">
                                Node js
                            </div>
                            <div className="i-title-item">
                                Boostrap
                            </div>
                            <div className="i-title-item">
                                Tailwind
                            </div>

                        </div>
                    </div>
                    {/* <div className='i-description'>
                        An aspiring MERN Stack Developer.I lost myself when I dive into the codes. I am a professional web designer and developer.No
                    </div> */}
                    <a href="https://drive.google.com/uc?export=download&id=1nMf-DVHW2wxz-MxxJ5ZReIxUr3mM-xLW">
                        <button type="button" style={{ fontSize: '15px', color: 'whitesmoke', fontWeight: 600, margin: '20px', }} class="btn btn-info">My Resume</button>
                    </a>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={Me} alt="" className='i-img' />
            </div>
        </div>
    );
};

export default PortfolioBanner;