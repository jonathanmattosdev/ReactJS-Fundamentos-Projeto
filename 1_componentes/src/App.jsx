// Componente pai
import "./App.css";

// Importar o componente filho
import Functionalcomponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import PropsExample from "./components/PropsExample";

function App() {
  return (
    <>
      <h1>Hello World React</h1>
      {/* utilizando o componente importado no JSX */}
      <Functionalcomponent />
      <ClassComponent />
      <PropsExample nome="Matheus" idade= {25}/>
    </>
  );
}

export default App;
