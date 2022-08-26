import { DotsProps } from "../Dots";

import "./Dot.scss";

const Dot = ({name, setBackgroundImages, backgroundImages}: DotProp) => {
    const onMouseEnter = () => setBackgroundImages(
        (backgroundImages) => ({...backgroundImages, [name]: true}));
    const onMouseLeave = () => setBackgroundImages(
        (backgroundImages) => ({...backgroundImages, [name]: false}));
        
    return (
        <div className={`dot dot-${name}`} id={name} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
    )
};

type DotProp = DotsProps & {
    name: string;
}

export default Dot;