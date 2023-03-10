import './App.css';
import {Main} from "./main/Main";
import {Header} from "./header/Header";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./myProjects/MyProjects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/footer";
import "./common/fonts/FuturaPt/Futura.ttf";
function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
