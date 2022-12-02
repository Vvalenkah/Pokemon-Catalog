import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";

import './common.scss';
import logo from './logo.svg';
import {PrevNext} from "./components/PrevNext/PrevNext";




function App() {
  return (
      <>
          <Header/>
          <Menu/>
          {/*<PrevNext />*/}
      </>
  )
}

export default App;
