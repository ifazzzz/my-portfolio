import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=1380&t=st=1670858172~exp=1670858772~hmac=cf425596995a132a948651f474bf52348471f5944c006a6b5acd399360574745")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white">Shoaib Ahmed</h1>
                <p className="mb-5 text-white">I'm a Highly Motivated and Dedicated junior Web Developer with both front-end and back-end skills.I design and build any kind of websites. Checkout My resume Below</p>
                <button className="btn btn-primary"><a href="https://drive.google.com/file/d/1y0BtzJkuDJpdRx9XQalyLmuWW12HPg-Z/view?usp=share_link" target="_blank" rel="noreferrer">Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;