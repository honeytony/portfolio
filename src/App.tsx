import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './components/header/header';
import { Projects } from './components/projects/projects';


function App() {
  const [headerData, setHeaderData] = useState({
    header: 'Anton Kucher' ,
      desc: 'Frontend web developer' ,
      desc_bottom: 'создаю адаптивные веб приложения. Опыт работы с React.js + Next.js, Node.js + Express',
      buttons: {contact_text: 'Contact me', github_link: 'https://github.com/honeytony'},
    
  });




  return (
    <div className="App">
      <Header 
      header={headerData.header}
      desc={headerData.desc}
      desc_bottom={headerData.desc_bottom}
      buttons={headerData.buttons}
      />

      <Projects/>
    </div>
  );
}

export default App;
