import profile_hover from 'Images/profile.jpg';
import work_hover from 'Images/work.png';
import contact_hover from 'Images/contact.png';
import nyc_hover from 'Images/nyc.jpg';
import stockholm_hover from 'Images/stockholm.jpg';
import strasbourg_hover from 'Images/strasbourg.jpg';
import geneva_hover from 'Images/geneva.jpg';
import ottawa_hover from 'Images/ottawa.jpg';
import hamilton_hover from 'Images/hamilton.jpg';
import sf_hover from 'Images/sf.jpg';

import { BackgroundImagesAll } from '../types';

import "./BackgroundImages.scss";

const BackgroundImages = (props: BackgroundImagesProps) => {
    return (
        <div className="background-images">
            {props.profile && <img src={profile_hover} alt={"Ooops :("} /> }
            {props.work && <img src={work_hover} alt={"Ooops :("} /> }
            {props.contact && <img src={contact_hover} alt={"Ooops :("} /> }
            {props.nyc && <img src={nyc_hover} alt={"Ooops :("} /> }
            {props.stockholm && <img src={stockholm_hover} alt={"Ooops :("} /> }
            {props.strasbourg && <img src={strasbourg_hover} alt={"Ooops :("} /> }
            {props.geneva && <img src={geneva_hover} alt={"Ooops :("} /> }
            {props.ottawa && <img src={ottawa_hover} alt={"Ooops :("} /> }
            {props.hamilton && <img src={hamilton_hover} alt={"Ooops :("} /> }
            {props.sf && <img src={sf_hover} alt={"Ooops :("} /> }
        </div>
    );
};

type BackgroundImagesProps = BackgroundImagesAll;

export default BackgroundImages;