import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Team from "./componentes/Team";

const App = () => {
  const times = [
    {
      name: 'steven Universo',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'pokemon',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Canon Busters',
      primaryColor: '#A6D157',
      secondaryColor: '#FDE7E8'
    }, {
      name: 'Sakura Card Captors',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5'
    }, {
      name: 'Hamtaro',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9'
    }, {
      name: 'Digimon',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }, {
      name: 'Magi',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    }
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const onNewColaboradorAdded = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onColaboradorRegistered={colaborador => onNewColaboradorAdded(colaborador)} />
      {times.map(team => <Team key={team.name} name={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor} />)}

    </div>
  );
}

export default App;
