import React from 'react';
import './SocialIcon.css';
import icon from '../../resources/img/github.png';

const SocialIcon = (props) => {
    const { src, link, alt } = props;

    return (
        <a className="k-social-icon" href={link} target="_blank" rel="noreferrer"><img src={src} alt={alt} /></a>
    );
}

SocialIcon.defaultProps = {
    src: icon,
    alt: "icono de red social",
    link: '',
    className: '',
}

export default SocialIcon;