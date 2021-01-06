import React from 'react'
import Image, { ImageSize, ImageTheme } from '../image/Image';
import Title, { TitleColor, TitleSize } from '../title/Title';
import Text, { TextColor, TextAlign } from '../text/Text';
import "./Header.css";
import SocialIcon from '../socialIcon/SocialIcon';

//Importaciones de las imagenes de los iconos
import faceIcon from '../../resources/img/facebook.png';
import gitIcon from '../../resources/img/github.png';
import linkedIcon from '../../resources/img/linkedin.png';
import youtubeIcon from '../../resources/img/youtube.png';

var description = "Entusiasta de la tecnología y el conocimiento. Enfocado en mejorar sus habilidades en el desarrollo web y en la realización de experiencias interactivas. Centrado en asegurar la calidad de la experiencia de usuario y en la generación de valor.";

const Header = () => (

    <header className="k-header">
        <Image src="https://i.imgur.com/mfACCGE.jpg" alt="Imagen de perfil de Kevin Stiwar Rondon" themeContainer={ImageTheme.PROFILE} size={ImageSize.MEDIUM_SQUARE}></Image>
        <div className="k-header-info"><Title text="KEVIN RONDÓN" theme={TitleColor.WHITE} size={TitleSize.LARGE}></Title>
            <Title text="Ingeniero Multimedia y Desarrollador web" theme={TitleColor.WHITE} size={TitleSize.SMALL}></Title>
            <Text text={description} theme={TextColor.WHITE}></Text>
        </div>
        <div className="k-header-contact">
            <div className="k-social-media">
                <SocialIcon src={gitIcon} alt="Github de Kevin Rondón" link="https://github.com/Kiramedia?tab=repositories"></SocialIcon>
                <SocialIcon src={linkedIcon} alt="Linkedin de Kevin Rondón" link="https://www.linkedin.com/in/kevin-stiwar-rondon-mu%C3%B1oz-833626163/"></SocialIcon>
                <SocialIcon src={youtubeIcon} alt="Youtube de Kevin Rondón" link="https://www.youtube.com/channel/UCPStn_RJPuHEXpvBA5HIoGw"></SocialIcon>
                <SocialIcon src={faceIcon} alt="Facebook de Kevin Rondón" link="https://www.facebook.com/kevinstiwar20/"></SocialIcon>
            </div>
            <Text text="Kevin.rondon@uao.edu.co" theme={TextColor.WHITE} textAlign = {TextAlign.RIGHT}></Text>
            <Text text="+57 300 232 4813" theme={TextColor.WHITE} textAlign = {TextAlign.RIGHT}></Text>
            <Text text="Valle del cauca, Cali" theme={TextColor.WHITE} textAlign = {TextAlign.RIGHT}></Text>
        </div>
    </header>

);

export default Header;