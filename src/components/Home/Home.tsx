import logo from 'Images/logo_hole.png';

import './Home.scss';

const Home = () => {
    return (
      <div className="home">
        We'll be back soon!
        <img src={logo} alt={"Ooops :("} />
      </div>
    );
  };
  
export default Home;