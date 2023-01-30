import { BackToTop } from "./components/BackToTop/BackToTop";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Presentation } from "./components/Presentation/Presentation";
import { Proyects } from "./components/Proyects/Proyects";
import { Skills } from "./components/Skills/Skills";
const { VITE_APP_ID_TRACKER } = import.meta.env;
import ReactGA from "react-ga";
function App() {
  ReactGA.initialize(VITE_APP_ID_TRACKER);
  return (
    <div className="container-fluid">
      <Header />
      <Presentation />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
