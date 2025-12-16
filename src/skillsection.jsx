import React from "react";
import "./skillsection.css";
import Heading from './Heading'

const Skillsection = () => {
  return (
    <div className="techstack-wrapper">

     
       <Heading bgText="Tools" overlayText="Tech Stack"/>

      <div className="outer-div">

        {/* Row 1 */}
        <div className="row">
          <div className="box"></div>
          <div className="box"></div>

          {/* HTML */}
          <div className="box" data-tech="html">
            <span className="perma-glow glow-html"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
            </div>
          </div>

          {/* CSS */}
          <div className="box" data-tech="css">
            <span className="perma-glow glow-css"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
            </div>
          </div>

          {/* JS */}
          <div className="box" data-tech="javascript">
            <span className="perma-glow glow-javascript"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            </div>
          </div>

          {/* React */}
          <div className="box" data-tech="react">
            <span className="perma-glow glow-react"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            </div>
          </div>

          <div className="box"></div>
          <div className="box"></div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="box"></div>
          <div className="box"></div>

          {/* MongoDB */}
          <div className="box" data-tech="mongodb">
            <span className="perma-glow glow-mongodb"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
            </div>
          </div>

          {/* Git */}
          <div className="box" data-tech="git">
            <span className="perma-glow glow-git"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
            </div>
          </div>

          {/* GitHub */}
          <div className="box" data-tech="github">
            <span className="perma-glow glow-github"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            </div>
          </div>

          {/* Express */}
          <div className="box" data-tech="express">
            <span className="perma-glow glow-express"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
            </div>
          </div>

          {/* NPM
          <div className="box" data-tech="npm">
            <span className="perma-glow glow-npm"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" />
            </div>
          </div> */}

          <div className="box"></div>
          <div className="box"></div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="box"></div>
          <div className="box"></div>

          {/* Postman */}
          <div className="box" data-tech="postman">
            <span className="perma-glow glow-postman"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" />
            </div>
          </div>

          {/* VS Code */}
          <div className="box" data-tech="vscode">
            <span className="perma-glow glow-vscode"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
            </div>
          </div>

          {/* Bootstrap */}
          <div className="box" data-tech="bootstrap">
            <span className="perma-glow glow-bootstrap"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
            </div>
          </div>

          {/* Tailwind */}
          <div className="box" data-tech="tailwind">
            <span className="perma-glow glow-tailwind"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" />
            </div>
          </div>

          <div className="box"></div>
          <div className="box"></div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="box"></div>
          <div className="box"></div>

          {/* Java */}
          <div className="box" data-tech="java">
            <span className="perma-glow glow-java"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
            </div>
          </div>

          {/* Python */}
          <div className="box" data-tech="python">
            <span className="perma-glow glow-python"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            </div>
          </div>

          {/* Firebase */}
          <div className="box" data-tech="firebase">
            <span className="perma-glow glow-firebase"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
            </div>
          </div>

          {/* MySQL */}
          <div className="box" data-tech="mysql">
            <span className="perma-glow glow-mysql"></span>
            <div className="icon-shadow-wrap">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
            </div>
          </div>

          <div className="box"></div>
          <div className="box"></div>
        </div>

      </div>
    </div>
  );
};

export default Skillsection;
