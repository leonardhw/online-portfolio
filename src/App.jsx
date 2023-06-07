import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Interests from "./pages/Interests";
import Awards from "./pages/Awards";
import Education from "./pages/Education";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          {/* <ScrollToHashElement /> */}
          <div className="flex h-screen">
            <aside className="w-48 bg-orange-100 flex flex-col p-5">
              <ul className="flex flex-col flex-1 justify-center items-center gap-4 text-sm font-bold uppercase">
                <li className="w-full px-6">
                  <div className="rounded-full bg-orange-200 w-full aspect-square p-1.5">
                    <div className="rounded-full bg-orange-400 w-full aspect-square"></div>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-orange-700" : "text-orange-300"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/experience"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-orange-700" : "text-orange-300"
                    }
                  >
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/education"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-orange-700" : "text-orange-300"
                    }
                  >
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/skills"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-orange-700" : "text-orange-300"
                    }
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/interests"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-orange-700" : "text-orange-300"
                    }
                  >
                    Interests
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/awards"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-orange-700" : "text-orange-300"
                    }
                  >
                    Awards
                  </NavLink>
                </li>
                {/* Add more navigation links here */}
              </ul>
            </aside>

            <main className="overflow-y-auto flex-1 snap-y scroll-smooth">
              <About />
              <Experience />
              <Education />
              <Skills />
              <Interests />
              <Awards />
            </main>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
