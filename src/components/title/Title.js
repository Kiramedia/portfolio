import React from 'react';
import styles from './Title.css';
import classNames from 'classnames';

export const TitleColor = {
    DEFAULT: 'base-color',
    PRIMARY: 'primary-color',
    SECUNDARY: 'secundary-color',
    WHITE: 'white'
}

export const TitleSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
}

const Title = (props) => {
    const { text, className, theme, size } = props;

    const classProps = classNames(
        styles.title,
        theme,
        size,
        className
    )

    return (
        <h1 className={classProps}>{text}</h1>
    );
}

Title.defaultProps = {
    theme: TitleColor.DEFAULT,
    size: TitleSize.MEDIUM,
    className: '',
    themeContainer: ""
}

export default Title;