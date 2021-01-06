import React from 'react'
import FocusItem from '../focusItem/FocusItem';
import "./FocusSection.css";
import front from "../../resources/img/frontend.png";
import back from "../../resources/img/backend.png";
import game from "../../resources/img/juego.png";
import vr from "../../resources/img/vr.png";

const FocusSection = () => {
    return (
        <section className="k-focus-section">
            <FocusItem src={front} alt="Imagen front-end" titleText="Front-end" description="Me encanta realizar interfaces usables y accesibles"></FocusItem>
            <FocusItem src={back} alt="Imagen back-end" titleText="Back-end" description="Disfruto de diseñar e implementar formas seguras de transportar la información"></FocusItem>
            <FocusItem src={game} alt="Imagen juegos" titleText="Juegos" description="Amo diseñar e implementar ideas innovadoras de juegos en campos como la educación"></FocusItem>
            <FocusItem src={vr} alt="Imagen vr" titleText="Realidad Virtual" description="Me interesa mucho realizar experiencias de realidad virtual en los que se estimulen diferentes sentidos"></FocusItem>
        </section>
    )
};

export default FocusSection;