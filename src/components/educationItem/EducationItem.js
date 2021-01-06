import React from 'react'
import Title, { TitleSize } from '../title/Title';
import Text, {TextAlign} from '../text/Text';
import styles from "./EducationItem.css";
import classNames from 'classnames';

export const ItemDirection = {
    DEFAULT: '',
    INVERT: 'flex-invert'
}

export const ItemPosition = {
    DEFAULT: '',
    CENTER: 'item-center'
}

const EducationItem = (props) => {
    const { src, alt, title, description, years, theme, className, direction, position } = props;

    const classProps = classNames(
        styles.text,
        theme,
        direction,
        position,
        className
    )

    const alignText = direction === ItemDirection.INVERT ? TextAlign.RIGHT : TextAlign.DEFAULT;

    return (
        <div className={classProps}>
            <div className="k-education-image-container">
                <img src={src} alt={alt} />
            </div>
            <div className="k-education-info">
                <Title text={title} theme={theme} size={TitleSize.SMALL}/>
                <Text text={description} textAlign={alignText}/>
                <Text text={years} textAlign={alignText}/>
            </div>
        </div>
    )
};

EducationItem.defaultProps = {
    className: 'k-education-item',
    direction: ItemDirection.DEFAULT,
    position: ItemPosition.DEFAULT
}

export default EducationItem;