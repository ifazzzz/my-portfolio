import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Home/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import Project1 from "../pages/Home/Projects/Project1";
import Project2 from "../pages/Home/Projects/Project2";
import Project3 from "../pages/Home/Projects/Project3";
import Projects from "../pages/Home/Projects/Projects";

export const router = createBrowserRouter([
     {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/projects',
                element : <Projects></Projects>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : '/contact',
                element : <Contact></Contact>
            },
            {
                path : '/project1',
                element : <Project1></Project1>
            },
            {
                path : '/project2',
                element : <Project2></Project2>
            },
            {
                path : '/project3',
                element : <Project3></Project3>
            }
        ]
     }
])