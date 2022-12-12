import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyWorks from '../MyWorks/MyWorks';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyWorks></MyWorks>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;