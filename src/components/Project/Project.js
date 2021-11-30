import React from 'react';
import "./Project.css";

const Project = ({ item }) => {
    const { link, img } = item;
    return (
        <div className='p-card p-5 '>
            <div className='p-browser'>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel='noreferrer'>
                <img src={img} alt="" className='p-img ' />
            </a>
        </div>
    );
};

export default Project;