import React from 'react';
import styles from './Text.css';
import classNames from 'classnames';

export const TextColor = {
    DEFAULT: 'base-color',
    PRIMARY: 'primary-color',
    SECUNDARY: 'secundary-color',
    WHITE: 'white'
}

export const TextAlign = {
    JUSTIFY: 'align-justify',
    LEFT: 'align-left',
    RIGHT: 'align-right',
    CENTER: 'align-center'
}

const Text = (props) => {
    const { text, className, theme, textAlign} = props;

    const classProps = classNames(
        styles.text,
        theme,
        textAlign,
        className
    )

    return (
        <p className={classProps}>{text}</p>
    );
}

Text.defaultProps = {
    theme: TextColor.DEFAULT,
    className: '',
    themeContainer: "",
    textAlign: TextAlign.JUSTIFY
}

export default Text;