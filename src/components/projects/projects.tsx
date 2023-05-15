import * as React from 'react';
import './style.scss'
export interface IProjectsProps {
}

export function Projects (props: IProjectsProps) {
  return (
    <section className='projects'>
     <div className="container">
     <h2>Last <span>Projects</span></h2>
      <div className="project-list">
        <div className="project">
          <div className="project-preview"></div>
          <div className="project-desc">
            <h3>Проект 1</h3>
            <p>Описание первого проекта</p>
            <div className="buttons">
              <a href="" className="demo">Demo</a>
              <a href="" className="code">Code <div className="github-icon"></div></a>
            </div>
          </div>
        </div>
        <div className="project">
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
        </div>
      </div>
     </div>
    </section>
  );
}
