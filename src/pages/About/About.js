import React from 'react';

const About = () => {
    return (
        <div>
            <section className="bg-neutral text-white">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-600">
                                <h3 className="text-3xl font-semibold">Shoaib Ahmed</h3>
                                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">Web Developer</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Skills</h3>
                                    <time className="text-xs tracking-wide uppercase text-gray-600"></time>
                                    <p className="mt-3">
                                    ● Expertise : HTML5 , CSS3, Bootstrap, Tailwind CSS, Javascript, React.js , Express.js, Rest API, Firebase<br/>
                                    ● Familiar : Node.js, Material UI, Typescript, Next.js, MongoDB, Redux<br/>
                                    ● Tools : Vs code, Git , Chrome developer tools, Sass , Npm, Netlify, Vercel<br/>
                                    ● Extra : Photoshop , illustrator, Microsoft Office
                                    </p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Personal Information</h3>
                                    <time className="text-xs tracking-wide uppercase text-gray-600"></time>
                                    <p className="mt-3">
                                        Email : shoaibahmedifaz@gmail.com<br/>
                                        Contact : +8801794366083<br/>
                                        Location : Netrokona, Bangladesh<br/>
                                        LinkedIn : https://www.linkedin.com/in/shoaib-ahmed-ifaz-8965b3259/<br/>
                                        Github : https://github.com/ifazzzz
                                    </p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Education
                                    </h3>
                                    <time className="text-xs tracking-wide uppercase text-gray-400">2021-present</time>
                                    <p className="mt-3">BSS honours in Economics<br/>
                                    Sheikh Hasina University, Netrokona
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;