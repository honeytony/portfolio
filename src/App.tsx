import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './components/header/header';
import { Projects } from './components/projects/projects';
import { IProject } from './utils/interfaces';


function App() {
  const [headerData, setHeaderData] = useState({
    header: 'Anton Kucher' ,
      desc: 'Frontend web developer' ,
      desc_bottom: 'создаю адаптивные веб приложения. Опыт работы с React.js + Next.js, Node.js + Express',
      buttons: {contact_text: 'Contact me', github_link: 'https://github.com/honeytony'},
    
  });
  const [projects, setProjects] = useState([{name: 'asd', desc: 'asdas', image: 'ims', demo_link: 'sd', code_link: ''},{name: 'asd', desc: 'asdas', image: 'ims', demo_link: 'sd', code_link: ''},{name: 'asd', desc: 'asdas', image: 'ims', demo_link: 'sd', code_link: ''},{name: 'asd', desc: 'asdas', image: 'ims', demo_link: 'sd', code_link: ''}])

  




  return (
    <div className="App">
      <Header 
      {...headerData}
      />

      <Projects {...projects}/>
    </div>
  );
}

export default App;
