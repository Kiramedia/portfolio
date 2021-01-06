import './App.css';
import EducationSection from './components/educationSection/EducationSection';
import FocusSection from './components/focusSection/FocusSection';
import Header from './components/header/Header';
import SectionDivider, {dividerColor} from './components/sectionDivider/SectionDivider';
import AbilitiesSection from './components/abilitiesSection/AbilitiesSection';
import PortfolioSection from './components/portfolioSection/PortfolioSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionDivider text = "Enfoque" theme={dividerColor.PRIMARY} />
      <FocusSection/>
      <SectionDivider text = "Educación" theme={dividerColor.SECUNDARY} />
      <EducationSection/>
      <SectionDivider text = "Habilidades" theme={dividerColor.PRIMARY} />
      <AbilitiesSection/>
      <SectionDivider text = "Portafolio" theme={dividerColor.SECUNDARY} />
      <PortfolioSection/>
    </div>
  );
}

export default App;
