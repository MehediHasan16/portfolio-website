import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import Porfile from './components/Home/Porfile';
import MyProjects from './components/MyProjects/MyProjects';
import PortfolioBanner from './components/PortfolioBanner/PortfolioBanner';
import ProjectsPart from './components/ProjectsPart/ProjectsPart';

function App() {
  return (
    <div >
      <PortfolioBanner></PortfolioBanner>

      <ProjectsPart></ProjectsPart>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
