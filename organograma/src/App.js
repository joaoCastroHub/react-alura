import { useState } from "react";
import Banner from "./componentes/banner";
import Form from "./componentes/form";

const App = () => {

  const [colaboradores, setColaboradores] = useState([]);

  const onNewColaboradorAdded = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onColaboradorRegistered={colaborador => onNewColaboradorAdded(colaborador)} />
    </div>
  );
}

export default App;
