import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Results} from "./layout/sections/results/Results";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header />
            <Main/>
            <About/>
            <Results/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
