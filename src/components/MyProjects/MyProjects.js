import React from 'react';
import Project from '../Project/Project';
import './MyProjects.css';

import NavItem from '@restart/ui/esm/NavItem';
const projects = [
    {
        id: 1,
        img: 'https://i.ibb.co/16kShGf/watch-website.png',
        link: 'https://niche-watch.web.app/'
    },
    {
        id: 2,
        img: 'https://i.ibb.co/16kShGf/watch-website.png',
        link: 'https://tourism-website-a9f5d.web.app/'
    },
    {
        id: 3,
        img: 'https://i.ibb.co/16kShGf/watch-website.png',
        link: 'https://niche-watch.web.app/'
    },
    {
        id: 4,
        img: 'https://i.ibb.co/16kShGf/watch-website.png',
        link: 'https://niche-watch.web.app/'
    },
    {
        id: 5,
        img: 'https://i.ibb.co/16kShGf/watch-website.png',
        link: 'https://niche-watch.web.app/'
    },
    {
        id: 6,
        img: 'https://i.ibb.co/16kShGf/watch-website.png',
        link: 'https://niche-watch.web.app/'
    },
]

const MyProjects = () => {
    return (
        <div className='projects'>
            <div className='projects-texts'>
                <h2>My Projects</h2>
            </div>
            <div className='projects-list'>
                {projects.map((item) => (
                    <Project
                        key={item.id}
                        item={item}

                    />
                ))}
            </div>

        </div>
    );
};

export default MyProjects;