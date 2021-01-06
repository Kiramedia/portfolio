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
            screenshots: [{ src: require("../../resources/img/UAORepositorio.png").default }, { src: require("../../resources/img/UAORepositorio1.png").default }, { src: require("../../resources/img/UAORepositorio2.png").default }],
            get_description: "Proyecto en compañía de Sebastián Izquierdo e Isabella Moreno. El código del proyecto lo puedes encontrar en el siguiente link de github. ", text_link: "Ir al código", link: "https://github.com/Kiramedia/uao-repository.git"
        }
    },
    {
        title: "D’mensional Dungeon", src: require("../../resources/img/Dmensional Dungeon.jpg").default,
        data: {
            title: "D’mensional Dungeon", src: "https://www.youtube.com/embed/MGXGIl8KVEc", description: "Es el desarrollo de un videojuego 2D realizado en Unity, el proceso de ideación y de desarrollo progresivo es registrado en la página del juego. A los jugadores de Roguelike les encantan los desafíos, pero estos se limitan a complementar la experiencia con elementos aleatorios y que son repetitivos. ¿Por qué no unirlo con el entorno de un rpg? así se crearía una experiencia de evolución, aventura y al mismo tiempo de desafío, eso es lo que se quiere lograr con D'mensional Dungeon. ",
            characteristics: [{ characteristic: "- Uso del entorno de desarrollo 2D Unity." }, { characteristic: "- Creación de interfaces de usuario." }, { characteristic: "- Mecánica de combate y de nivel." }],
            screenshots: [{ src: require("../../resources/img/Dmensional Dungeon.jpg").default }, { src: require("../../resources/img/Dmensional Dungeon1.png").default }, { src: require("../../resources/img/Dmensional Dungeon2.png").default }],
            get_description: "La información del proyecto la puedes encontrar en el siguiente link. ", text_link: "Ir a la página del proyecto", link: "https://kevinrondon7.wixsite.com/dmensionaldungeon"
        }
    },
    {
        title: "Beyond death", src: require("../../resources/img/Beyond death.jpg").default,
        data: {
            title: "Beyond death", src: "https://www.youtube.com/embed/J_bURPVpUZw", description: "Es el desarrollo de una experiencia transmedia que dio como resultado un prototipo desarrollado en Unity 2D. En Beyond death experimentas la vida de Amelia y observas como las decisiones afectan el entorno. Por lo tanto, representaría a un videojuego 2D RPG multilineal.",
            characteristics: [{ characteristic: "- Uso del entorno de desarrollo 2D Unity." }, { characteristic: "- Creación de interfaces de usuario." }, { characteristic: "- Mecánica en desarrollo de combate por turnos." }],
            screenshots: [{ src: require("../../resources/img/Beyond death.jpg").default }, { src: require("../../resources/img/Beyond death1.png").default }, { src: require("../../resources/img/Beyond death2.png").default }],
            get_description: "La información del proyecto la puedes encontrar en el siguiente link. ", text_link: "Ir a la página del proyecto", link: "https://sites.google.com/uao.edu.co/biblia-produccion-transmedia/inicio?authuser=0"
        }
    },
    { title: "MoveVR", src: require("../../resources/img/MoveVR.jpg").default,
    data: {
        title: "[En desarrollo] MoveVR", src: "https://www.youtube.com/embed/fPBv0lzqzr0", description: "Es el desarrollo de una experiencia interactiva 3D de realidad virtual, enfocada en apoyar a los pacientes de la empresa Move Therapy a realizar los ejercicios de estiramiento de una manera diferente. Para ello la experiencia administra la información del paciente y de sus sesiones, permitiendole al terapeuta escoger los ejercicios y al usuario escoger el lugar en el cual prefiere vivir la experiencia, el proyecto se encuentra en progreso pero es de sumo interés para mí.",
        characteristics: [{ characteristic: "- Uso del entorno de desarrollo 3D Unity." }, { characteristic: "- Administración de datos de pacientes." }, { characteristic: "- Uso de realidad virtual." }],
        screenshots: [{ src: require("../../resources/img/MoveVR.jpg").default }, { src: require("../../resources/img/MoveVR1.png").default }, { src: require("../../resources/img/MoveVR2.png").default }],
        get_description: "El proyecto se encuentra en curso, por lo que no se puede encontrar en alguna parte aún.", text_link: "", link: ""
    } }
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