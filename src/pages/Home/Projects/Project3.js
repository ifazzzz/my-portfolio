import React from 'react';

const Project3 = () => {
    return (
        <div>
           
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col lg:flex-row">
                    <div className="max-w-xl pr-16 mx-auto mb-10">
                    <h5 className="mb-6 text-3xl font-extrabold leading-none">
                        Code Olympiad
                    </h5>
                    <p className="mb-6 text-white">
                    Test your knowledge and experience about web programming
                    </p>
                    <div className="flex items-center">
                        <button
                        type="submit"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-secondary focus:shadow-outline focus:outline-none"
                        >
                        <a href="https://code-olympiad-79dd65.netlify.app" target="_blank" rel="noopener noreferrer">Live Site</a>
                        </button>
                        <a
                        href="https://github.com/programming-hero-web-course2/b6-quiz-crackerz-ifazzzz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-primary hover:text-secondary"
                        >
                        Code
                        </a>
                        
                    </div>
                    </div>
                    <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Feature 1</h6>
                        <p className="text-sm text-white">
                        A User can Take quizzes on various Web Technologies.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Feature 2</h6>
                        <p className="text-sm text-white">
                        The quiz taker can look at the answer by clicking at the eye button.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Feature 3</h6>
                        <p className="text-sm text-white">
                        View the statistics about the topics in the statistics route.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Feature 4</h6>
                        <p className="text-sm text-white">
                        Single page application and responsive in any device.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Project3;