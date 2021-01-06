import React from 'react'
import styles from "./AbilitieItem.css";
import classNames from 'classnames';
import Title, { TitleSize } from '../title/Title';
import AbilitieAttribute from "../abilitieAttribute/AbilitieAttribute";

export const ItemColor = {
    PRIMARY: 'primary-color',
    SECUNDARY: 'secundary-color',
}

const AbilitieItem = (props) => {
    const { title, data, theme, className } = props;

    const classProps = classNames(
        styles.item,
        theme,
        className
    )


    return (
        <div className={classProps}>
            <Title text={title} theme={theme} size={TitleSize.SMALL} />
            {
                data.map((abilitie) => {
                    return <AbilitieAttribute text={abilitie.text} percentage={abilitie.percentage} key={abilitie.text} theme={theme} />
                })
            }
        </div>
    )
};

AbilitieItem.defaultProps = {
    className: 'k-abilitie-item',
    theme: ItemColor.PRIMARY
}

export default AbilitieItem;