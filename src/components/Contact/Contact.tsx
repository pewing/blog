import { Link } from "react-router-dom";

import angelList from 'Images/angel_logo.png';
import github from 'Images/github_logo.png';
import linkedin from 'Images/linkedin_logo.png';

import './Contact.scss';

const Contact = () => {
    return (
      <div className="contact">
        <div className="reach-me">
          Do you have any questions or comments? Email me at
          <div className="reach-me-email">
            <Link 
              to='javascript:void(0)'
              onClick={() => window.location.href = 'mailto:philip.sp.ewing@gmail.com'}
            >
              philip.sp.ewing@gmail.com
            </Link>
          </div>
        </div>
        <div className="reach-me-websites">
          Or you can reach me on one of these places:
          <div className="reach-me-websites-list">
            <ul>
              <li>
                <a href="https://github.com/pewing">
                  <img src={github} alt={"PE"} />
                  &nbsp;pewing
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/philipewing">
                  <img src={linkedin} alt={"PE"} />
                  &nbsp;philipewing
                </a>
              </li>
              <li>
                <a href="https://angel.co/philip-ewing-1">
                  <img src={angelList} alt={"PE"} />
                  &nbsp;philip-ewing-1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
export default Contact;