import { Router } from "@reach/router";
import TableProvider from "./context/TableNumberContext";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import "./App.scss";


function App() {
  return (
    <TableProvider>
      <div className="App">
        <Router>
          <Home path="/"/>
          <Contact path="/contact"/>
          <Tables path="/booktable"/>
        </Router>
      </div>
    </TableProvider>
  );
}

export default App;
