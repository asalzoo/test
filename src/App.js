
import './App.css';
import Sport from './Components/Sport';
import ThemeContext from './Components/ThemeContext';
import Btncontext from "./Components/Btncontext";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
        <ThemeContext>
           <Nav/>
            <Btncontext/>
          <Sport />
        </ThemeContext>
        {/* <div className="container">
          <HeaderContainer />
        </div> */}
    </div>
  );
}

export default App;
