import React from 'react';
import styles from './Image.css';
import classNames from 'classnames';

export const ImageTheme = {
    DEFAULT: 'default',
    FULL: 'full-container',
    CIRCLE: 'circle',
    PROFILE: 'profile'
}

export const ImageSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    MEDIUM_SQUARE: 'medium-square',
    LARGE: 'large',
    FIT: 'fit',
    FILL: 'fill'
}

const Image = (props) => {
    const { src, alt, className, theme, themeContainer, size } = props;

    const classProps = classNames(
        styles.image,
        theme,
        size
    )

    const classProps1 = classNames(
        className,
        themeContainer
    )

    return (
        <div className={classProps1}><img className={classProps} src={src} alt={alt} /></div>
    );
}

Image.defaultProps = {
    src: "https://i.imgur.com/mfACCGE.jpg",
    alt: "Imagen de ejemplo",
    theme: ImageTheme.DEFAULT,
    size: ImageSize.MEDIUM,
    className: 'k-img-cont',
    themeContainer: ""
}

export default Image;