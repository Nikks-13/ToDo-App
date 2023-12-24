import Todo from '../src/Components/Todo/index';
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Todo/>
    </ThemeProvider>
  );
}

export default App;
