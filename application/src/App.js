import { useState } from 'react';
import './scss/App.css';
import Home from './components/Home.jsx';
import D3dashboard from './components/D3dashboard';

const App = () => {

  const [renderD3page, setrenderD3page] = useState(false);
  

  const pageView = (param) => {
    setrenderD3page(param);
  }

//altered page rendering logic 
  return (
    <div>
    {!renderD3page &&
      <Home isLogin={pageView}/>
    }
    {renderD3page &&
      <D3dashboard />

    }
    </div>
  );

}

export default App;
