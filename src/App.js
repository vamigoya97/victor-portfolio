import './App.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Project from './pages/Project';
import Header from './components/Header';
import Contact from './pages/Contact';
import Academic from './pages/Academic';
// import Sketch from 'react-p5';
import './App.css'
import React from 'react';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';


function App() {

  // let x, y;

  // const setup = (p5, canvasParentRef) => {
  //   setTimeout(() => {
  //     const rootNode =  document.getElementById('app-container');
  //     const rootHeight = rootNode.offsetHeight;
  //     const rootWidth = window.innerWidth;

  //     let canvas = p5.createCanvas(rootWidth, rootHeight).parent(canvasParentRef);
  //     p5.background('beige');
  //     canvas.position(0,0);
  //     canvas.style('z-index', '-1');

  //     x = p5.width / 2;
  //     y = 0;

  //   }, [200]);
  // }

  // const draw = (p5) => {
  //   setTimeout(() => {

  //     p5.background('beige');
  //     p5.stroke('black');
  //     p5.noFill();
  //     p5.ellipse(x, y, 10, 10);
  //     p5.ellipse(x, y + 20, 10, 10);
  //     p5.fill('red');
  //     p5.ellipse(400, 500, 40, 50);

  //     y = y + 5;
  //     if (y > p5.height) {
  //       y = 0;
  //     }
  //   }, [200]);
  // }

  // const canvasResize = (p5) => {
  //   setTimeout(() => {
  //     const rootNode =  document.getElementById('app-container');

  //     const rootHeight = rootNode.offsetHeight;
  //     const rootWidth = window.innerWidth;
  //     console.log(rootHeight, rootWidth);

  //     p5.resizeCanvas(rootWidth, rootHeight);
  //     p5.background('white');
  //   }, [200]);
    
  // }

  return (
    <div id='app-container'>
        {/* <Sketch setup={setup} draw={draw} windowResized={canvasResize} className='canvas'/> */}
        <Header/>
        <Switch>
          <Route key='0' path="/" exact render={() =><EasybaseProvider ebconfig={ebconfig}><Project  /></EasybaseProvider>} />
          <Route key='1' path='/contact' render={() => <Contact />} />
          <Route key='2' path='/academics' render={() => <Academic />} />
        </Switch>
    </div>
  )
}

export default App;
