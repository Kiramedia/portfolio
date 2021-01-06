import React from 'react'
import Image, { ImageSize, ImageTheme } from '../image/Image';
import Text, { TextColor } from '../text/Text';
import Title, { TitleColor } from '../title/Title';
import "./modal.css";

const Modal = (props) => {
    const { title, src, description, characteristics, screenshots, get_description, text_link, link } = props;
    return (
        <section className="k-modal" >
            <div className="k-card-back" onClick={props.clickHandler} />
            <div className="k-card-modal">
                <button onClick={props.clickHandler}>x</button>
                <div className="k-card-info">
                    <iframe title={title} src={src} allowFullScreen />
                    <div className="k-card-description">
                        <Title text={title} theme={TitleColor.SECUNDARY} />
                        <Text text={description} />
                        <Text text="Características:" theme={TextColor.SECUNDARY} className="k-bold" />
                        {characteristics.map((item) => {
                            return <Text text={item.characteristic} key={item.characteristic} />
                        })}
                    </div>
                </div>
                <div className="k-screenshots">
                    <Text text="Capturas de pantalla" theme={TextColor.SECUNDARY} className="k-bold" />
                    <div className="k-screenshots-container">
                        {screenshots.map((item) => {
                            return <a className="k-screen-image" href={item.src} target="_blank" rel="noreferrer" key={item.src}>
                                <Image size={ImageSize.FILL} src={item.src} themeContainer={ImageTheme.FULL} key={item.src}/>
                            </a>
                        })}
                    </div>
                </div>
                <div className="k-get-project">
                    <Text text="¿Dónde encontrarlo?" theme={TextColor.SECUNDARY} className="k-bold" />
                    <div className="k-get-link"><Text text={get_description}/><a href={link} target="_blank" rel="noreferrer">{text_link}</a></div>
                </div>
            </div>
        </section>
    )
};

const data = {
    title: "Ejemplo", src: "https://www.youtube.com/embed/lj0yEUHDI48", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet lectus id nunc cursus consectetur. Nam velit mauris, egestas vitae euismod eu, convallis sed turpis. Phasellus tempus ipsum turpis, a malesuada justo euismod eget. Vivamus volutpat vitae urna eu accumsan. Sed consectetur pulvinar dolor, ut auctor felis iaculis et. In ut velit sed nisl porttitor dignissim. Cras eget mauris ut orci rhoncus aliquam. Nulla a ullamcorper sem. Praesent vitae lacus in libero gravida vestibulum. Nullam laoreet ligula vel tortor sagittis, in condimentum mauris rhoncus. Etiam placerat elit mi, vitae tempor mi condimentum eu. Proin eu mauris arcu. Proin id mi at dui placerat venenatis id quis tortor.",
    characteristics: [{ characteristic: "- Lorem ipsum dolor sit amet, consectetur adipiscing elit." }, { characteristic: "- Lorem ipsum dolor sit amet, consectetur adipiscing elit." }],
    screenshots: [{ src: require("../../resources/img/Marvel.png").default }, { src: require("../../resources/img/Marvel1.png").default }, { src: require("../../resources/img/Marvel2.png").default }],
    get_description: "El código del proyecto lo puedes encontrar en el siguiente link de github. ", text_link: "Ir al código", link: "https://github.com/Kiramedia/React-MarvelSearch"
}

Modal.defaultProps = data;

export default Modal;