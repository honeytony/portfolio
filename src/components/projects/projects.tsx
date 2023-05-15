import * as React from 'react';
import './style.scss'
import { IProject } from '../../utils/interfaces';


export function Projects (projects: IProject[]) {
  return (
    <section className='projects'>
     <div className="container">
     <h2>Last <span>Projects</span></h2>
      <div className="project-list">
        {
        
        projects ? projects.map((project: IProject)=>{
          

        }) : <p>no projects</p>

        }
        
        {/* <div className="project">
          <div className="project-preview"></div>
          <div className="project-desc">
            <h3>Проект 2</h3>
            <p>Описание первого проекта</p>
            <div className="buttons">
              <a href="" className="demo">Demo</a>
              <a href="" className="code">Code </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-preview"></div>
          <div className="project-desc">
            <h3>Проект 3</h3>
            <p>Описание первого проекта</p>
            <div className="buttons">
              <a href="" className="demo">Demo</a>
              <a href="" className="code">Code</a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-preview"></div>
          <div className="project-desc">
            <h3>Проект 4</h3>
            <p>Описание первого проекта</p>
            <div className="buttons">
              <a href="" className="demo">Demo</a>
              <a href="" className="code">Code <img src="../" alt="" /></a>
            </div>
          </div>
        </div> */}
      </div>
     </div>
    </section>
  );
}
