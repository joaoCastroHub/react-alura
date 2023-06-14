import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Team from "./componentes/Team";

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
      <Team nome="Programação"/>
      <Team nome="FrontEnd"/>
      <Team nome="Data Science"/>

    </div>
  );
}

export default App;
