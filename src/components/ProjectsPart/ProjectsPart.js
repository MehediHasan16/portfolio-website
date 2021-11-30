import React from 'react';
import './ProjectsPart.css';


const projects = [
    {
        id: 1,
        name: 'Wrish',

        img: 'https://i.ibb.co/kG3Q9P3/watch-website-11.png',
        link: 'https://niche-watch.web.app/',
        clientLink: 'https://github.com/MehediHasan16/watch-cline-site',
        serverLink: 'https://github.com/MehediHasan16/watch-server-site-',
        server: 'Server code Link',
        description: " Watch booking is dynamic. You can purchase, add products, delete, check and verify.Have an admin dashboard and user dashboard individually",
        tools: "HTML, CSS,React js , React Router, Material UI,  Node JS,  Express JS,  MongoDB, Firebase, Vs Code"

    },
    {
        id: 2,
        name: 'TravelEco',

        img: 'https://i.ibb.co/6g0BzFg/travling-website-22.png',
        link: 'https://tourism-website-a9f5d.web.app/',
        clientLink: 'https://github.com/MehediHasan16/TravelEco-client',
        serverLink: 'https://github.com/MehediHasan16/TravelEco',
        server: 'Server code Link',
        description: " Users can book any place to journey. They can cancel their booking.Adding a service is also available in the add service section. Login system using firebase authentication.",
        tools: "HTML, CSS,React js , React Router,  Bootstrap 5,  Node JS,  Express JS,  MongoDB, Firebase, Vs Code"
    },
    {
        id: 3,
        name: 'MediCare',
        img: 'https://i.ibb.co/3TzDpfK/health-website-33.png',
        link: 'https://heart-health-care.web.app',
        clientLink: 'https://github.com/MehediHasan16/-health-care-website',
        description: " Patients can make appointments for his/her specific health issues. Patients can see Login Authentication Using Firebase and Implemented Private Router",
        tools: "HTML, CSS,React js , React Router,  Bootstrap 5, Firebase, Vs Code"

    },
    {
        id: 4,
        name: 'LearnLanguages',
        img: 'https://i.ibb.co/QkJsczN/language.png',
        link: 'https://dreamy-fermat-b4740f.netlify.app/',
        clientLink: 'https://github.com/MehediHasan16/LearnLanguages',
        description: " You can Learn a different Language.Our Life-Time Courses Service is available. You Can Enroll any place. ",
        tools: "HTML, CSS,React js , React Router,  Bootstrap 5, , Vs Code"
    },
    {
        id: 5,
        name: 'Dynamic E-Commerce',
        img: 'https://i.ibb.co/NTV8BCr/e-commerce.png',
        link: ' https://peaceful-hoover-4c28e2.netlify.app',
        clientLink: 'https://github.com/MehediHasan16/e-commerce-store',
        description: "Dynamic ECommerce Store. You can find and buy a product. There will be a card with the user's purchase information",
        tools: "HTML, CSS,JavaScript ,  Bootstrap 5, Vs Code"
    },
    {
        id: 6,
        name: 'Honda CBR',
        img: 'https://i.ibb.co/ZKpFvGM/honda.png',
        link: ' https://silly-hawking-51618d.netlify.app/',
        clientLink: 'https://github.com/programming-hero-web-course2/honda-cbr-bootstrap-assignment-MehediHasan16',
        description: " Purchase modal button dynamically. CBR150R is a Featured-slider image. Add Upcoming... Bikes",
        tools: "HTML, CSS,Bootstrap 5, Vs Code"
    },
]

const ProjectsPart = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>My Projects</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    projects?.map(pd =>
                        <div className="col">
                            <div className="card h-100">
                                <div >
                                    <img src={pd?.img} className="card-img-top i ," alt="..." />

                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{pd?.name}</h5>
                                    <p className="card-text">{pd?.description}</p>
                                    <p> Tools: {pd?.tools}</p>
                                    <p>
                                        <a href={pd?.link}><button type="button" className="btn btn-outline-light m-3">Live Link</button></a>
                                        <a href={pd?.clientLink}><button type="button" className="btn btn-outline-light ">Client Code Link</button></a>
                                        {pd?.server && <a href={pd?.serverLink}><button type="button" className="btn btn-outline-light ">{pd?.server}</button></a>}
                                    </p>
                                    <p className='text-center'><button type="button" className="btn btn-outline-light ">Details</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ProjectsPart;