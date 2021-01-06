import React from 'react'
import EducationItem, {ItemDirection, ItemPosition} from '../educationItem/EducationItem';
import "./EducationSection.css";

import { TitleColor} from '../title/Title';

import primary from "../../resources/img/primaria.png";
import secundary from "../../resources/img/secundaria.png";
import university from "../../resources/img/universidad.png";

const EducationSection = () => {
    return (
        <section className="k-education-section">
            <EducationItem src={primary} alt="Imagen de educación primaria" title="Parroquial San Joaquín" description="Graduado de primaria" years="2004 - 2009" theme={TitleColor.PRIMARY}/>
            <EducationItem src={secundary} alt="Imagen de educación secundaria" title="Colegio Los Ángeles del Norte" description="Graduado de bachillerato" years="2009 - 2015" theme={TitleColor.PRIMARY} direction={ItemDirection.INVERT} position={ItemPosition.CENTER}/>
            <EducationItem src={university} alt="Imagen de educación universitaria" title="Universidad Autónoma de Occidente" description="Ingeniería Multimedia" years="2015 - actualidad" theme={TitleColor.SECUNDARY}/>
        </section>
    )
};

export default EducationSection;