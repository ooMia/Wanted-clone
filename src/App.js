import "./styles/App.css";
import ComponentWindow from "./components/ComponentWindow";


function App() {
    return (<div className='App'>
        <header className='App-header'>
            <ComponentWindow contents={["a", "b", "c", "d"]} view={{width: 1070, height: 852}}/>
        </header>

    </div>);
}

export default App;
