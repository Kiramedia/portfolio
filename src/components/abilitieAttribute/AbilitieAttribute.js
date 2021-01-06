import React from 'react'
import styles from "./AbilitieAttribute.css";
import classNames from 'classnames';
import Text from "../text/Text";

export const ItemColor = {
    PRIMARY: 'primary-color',
    SECUNDARY: 'secundary-color',
}

const AbilitieItem = (props) => {
    const { text, percentage, className, theme } = props;

    const classProps = classNames(
        styles.item,
        className,
        theme
    )

    const style = {
        width: percentage
    }

    return (
        <div className='k-abilitie-attribute'>
            <div className="k-abilitie-info"><Text text={text} />
                <Text text={percentage} /></div>
            <div className="k-attribute-bar">
                <div className={classProps} style={style} />
            </div>
        </div>
    )
};

AbilitieItem.defaultProps = {
    className: 'k-attribute-percent',
    theme: ItemColor.PRIMARY
}

export default AbilitieItem;