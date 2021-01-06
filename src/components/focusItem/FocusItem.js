import React from 'react'
import "./FocusItem.css";
import Image, { ImageSize, ImageTheme } from '../image/Image';
import Title, { TitleColor, TitleSize } from '../title/Title';
import Text, { TextAlign } from '../text/Text';

const FocusItem = (props) => {
    const { src, alt, titleText, description } = props;
    return (
        <div className="k-focus-item">
            <Image src={src} alt={alt} themeContainer={ImageTheme.DEFAULT} size={ImageSize.SMALL}></Image>
            <Title text={titleText} theme={TitleColor.SECUNDARY} size={TitleSize.SMALL}></Title>
            <Text text={description} textAlign={TextAlign.CENTER}></Text>
        </div>
    );

};

export default FocusItem;