import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../Assests/images/code-olympiad.png';
import img2 from '../../../Assests/images/it-learner.png';
import img3 from '../../../Assests/images/readers-port.png';
const Projects = () => {
    return (
        <div className="container mx-auto my-24 text-white">
            <h1 className="text-4xl font-bold text-center py-7 mb-16">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-full" src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">
                    Readers-port 
                    </h2>
                    <p>E-commerce Website for buying and selling used books</p>
                    <div className="card-actions justify-end">
                    <Link to='/project1'><div className="badge badge-outline">See Details</div></Link> 
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-full" src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">
                    It-Learner 
                    </h2>
                    <p>Educational Website providing IT-based skills</p>
                    <div className="card-actions justify-end">
                    <Link to='/project2'><div className="badge badge-outline">See Details</div></Link>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-full" src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">
                    Code Olympiad 
                    </h2>
                    <p>Test your knowledge and experience about web programming</p>
                    <div className="card-actions justify-end">
                    <Link to='/project3'><div className="badge badge-outline">See Details</div></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Projects;