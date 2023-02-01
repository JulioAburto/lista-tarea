import "./App.css";
import logo from "./img/logo.png";
import ListaDeTarea from "./component/ListaDeTareas";
function App() {
	return (
		<div className="App">
			<div className="logo-contenedor">
				<img src={logo} className="logo" alt="logo"></img>
			</div>
			<div className="tareaLista">
				<h1> Mis tareas</h1>
				<ListaDeTarea></ListaDeTarea>
			</div>
		</div>
	);
}

export default App;
