import React from 'react';
import styles from './SectionDivider.css';
import classNames from 'classnames';
import Title, { TitleColor, TitleSize } from '../title/Title';

export const dividerColor = {
    PRIMARY: 'primary-color',
    SECUNDARY: 'secundary-color'
}

const SectionDivider = (props) => {
    const { text, theme, className } = props;

    const classProps = classNames(
        styles.divider,
        theme,
        className
    )

    return (
        <div className={classProps}><Title text = {text} theme={TitleColor.WHITE} size={TitleSize.MEDIUM}></Title></div>
    );
}

SectionDivider.defaultProps = {
    theme: dividerColor.PRIMARY,
    className: 'k-section-divider'
}

export default SectionDivider;