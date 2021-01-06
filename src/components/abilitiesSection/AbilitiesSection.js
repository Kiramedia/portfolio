import React from 'react'
import AbilitieItem, {ItemColor} from '../abilitieItem/AbilitieItem';
import "./AbilitiesSection.css";

const profesionalData = [
    {text: "Diseño UI/UX", percentage: "80%"},
    {text: "React Js", percentage: "75%"},
    {text: "HTML/CSS", percentage: "90%"},
    {text: "Javascript", percentage: "80%"},
    {text: "Node js", percentage: "75%"},
    {text: "Servicios AWS", percentage: "55%"},
    {text: "Unity", percentage: "75%"},
];

const personalData = [
    {text: "Puntualidad", percentage: "95%"},
    {text: "Liderazgo", percentage: "90%"},
    {text: "Comunicativo", percentage: "80%"},
    {text: "Amor al aprendizaje", percentage: "95%"},
    {text: "Tolerancia al estrés", percentage: "90%"},
    {text: "Flexibilidad", percentage: "70%"},
];

const languageData = [
    {text: "Español (nativo)", percentage: "95%"},
    {text: "Inglés (intermedio)", percentage: "60%"},
];

const EducationSection = () => {
    return (
        <section className="k-abilities-section">
            <AbilitieItem data={profesionalData} title="Profesional" theme={ItemColor.SECUNDARY}/>
            <AbilitieItem data={personalData} title="Personal" theme={ItemColor.PRIMARY}/>
            <AbilitieItem data={languageData} title="Idiomas" theme={ItemColor.PRIMARY}/>
        </section>
    )
};

export default EducationSection;