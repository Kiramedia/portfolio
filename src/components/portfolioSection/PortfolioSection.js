import React from 'react'
import "./PortfolioSection.css";
import PortfolioItem, { ItemColor } from "../portfolioItem/portfolioItem";


const data = [
    {
        title: "Buscador API Marvel", theme: ItemColor.SECUNDARY, src: require("../../resources/img/Marvel.png").default,
        data: {
            title: "Buscador API Marvel", src: "https://www.youtube.com/embed/lj0yEUHDI48", description: "Buscador realizado en react js en el que se consume la API de Marvel para desplegar información sobre los personajes y así mismo, sobre los comics, eventos y series en los que han estado los personajes.",
            characteristics: [{ characteristic: "- Uso de la biblioteca React js." }, { characteristic: "- Consumo de API por medio de REST con claves de acceso." }],
            screenshots: [{ src: require("../../resources/img/Marvel.png").default }, { src: require("../../resources/img/Marvel1.png").default }, { src: require("../../resources/img/Marvel2.png").default }],
            get_description: "El código del proyecto lo puedes encontrar en el siguiente link de github. ", text_link: "Ir al código", link: "https://github.com/Kiramedia/React-MarvelSearch"
        }
    },
    {
        title: "Diseño para UPware-soft", theme: ItemColor.SECUNDARY, src: require("../../resources/img/Upwaresoft.png").default,
        data: {
            title: "Diseño para UPware-soft", src: "https://www.youtube.com/embed/lFURWImu9IA", description: "Desarrollo front-end en HTML/CSS y JS (en el uso de Slick), del diseño de la página de inicio de Upwaresoft. Lo anterior, con el fin de realizar el diseño y maquetación web para una empresa de software. La página actúa de forma responsiva para la correcta visualización en cualquier dispositivo.",
            characteristics: [{ characteristic: "- Diseño desde requerimientos." }, { characteristic: "- Implementación HTML/CSS y JS." }, { characteristic: "- Diseño responsivo." }],
            screenshots: [{ src: require("../../resources/img/Upwaresoft.png").default }, { src: require("../../resources/img/Upwaresoft1.png").default }, { src: require("../../resources/img/Upwaresoft2.png").default }],
            get_description: "El código del proyecto lo puedes encontrar en el siguiente link de github. ", text_link: "Ir al código", link: "https://github.com/Kiramedia/upwaresoft-design"
        }
    },
    {
        title: "Experimento diseño Crunchyroll", theme: ItemColor.SECUNDARY, src: require("../../resources/img/Crunchyroll.png").default,
        data: {
            title: "Experimento diseño Crunchyroll", src: "https://www.youtube.com/embed/Nsnb1gQnStc", description: "Desarrollo front-end en HTML/CSS y JS (en el uso de Slick), de un diseño experimental de la página Crunchyroll. Lo anterior, con el fin de experimentar en el desarrollo responsivo y con el uso de grillas. La página tiene una versión de despliegue para móviles.",
            characteristics: [{ characteristic: "- Experimentación con grillas." }, { characteristic: "- Implementación HTML/CSS y JS." }, { characteristic: "- Diseño responsivo." }],
            screenshots: [{ src: require("../../resources/img/Crunchyroll.png").default }, { src: require("../../resources/img/Crunchyroll1.png").default }, { src: require("../../resources/img/Crunchyroll2.png").default }],
            get_description: "El código del proyecto lo puedes encontrar en el siguiente link de github. ", text_link: "Ir al código", link: "https://github.com/Kiramedia/crunchyroll-little-experiment"
        }
    },
    {
        title: "UAO repositorio", theme: ItemColor.SECUNDARY, src: require("../../resources/img/UAORepositorio.png").default,
        data: {
            title: "UAO repositorio", src: "https://www.youtube.com/embed/vy3w2hzY0b8", description: "Base para el desarrollo de una plataforma de repositorios para la Universidad Autónoma de Occidente. Para lo anterior, se utiliza React js en el front-end, Lambda (Node js), DynamoDB y API Gateway de los servicios de AWS para el back-end.",
            characteristics: [{ characteristic: "- Uso de la biblioteca React js." }, { characteristic: "- Uso de servicios AWS para simular el back-end." }, { characteristic: "- Diseño responsivo." }, { characteristic: "- Integración de un inicio de sesión." }],
            screenshots: [{ src: require("../../resources/img/Crunchyroll.png").default }, { src: require("../../resources/img/Crunchyroll1.png").default }, { src: require("../../resources/img/Crunchyroll2.png").default }],
            get_description: "Proyecto en compañía de Sebastián Izquierdo e Isabella Moreno. El código del proyecto lo puedes encontrar en el siguiente link de github. ", text_link: "Ir al código", link: "https://github.com/Kiramedia/crunchyroll-little-experiment"
        }
    },
    { title: "Escape Laberint", src: require("../../resources/img/Escape Laberint.png").default },
    { title: "D’mensional Dungeon", src: require("../../resources/img/Dmensional Dungeon.jpg").default },
    { title: "Beyond death", src: require("../../resources/img/Beyond death.jpg").default },
    { title: "MoveVR", src: require("../../resources/img/MoveVR.jpg").default }
];

const PortfolioSection = () => {
    return (
        <section className="k-portfolio-section">
            {data.map((item) => {
                return <PortfolioItem theme={item.theme} title={item.title} src={item.src} data={item.data} key={item.title} />
            })}
        </section>
    )
};

export default PortfolioSection;