import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Main/Home/Home';
import { Header } from './components/Header/Header';
import { Container, ThemeProvider } from 'react-bootstrap';
import { SelectProvider } from './components/contexts/SelectContext';


function App() {

  const breakpoints = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'];

  return (
    <>
      <Header />
      <Container fluid className='px-0'>
        <ThemeProvider
          breakpoints={ breakpoints }
          minBreakpoint='xxs'>

          <SelectProvider>
            <Home />
          </SelectProvider>

        </ThemeProvider>

      </Container>
    </>
  );
}

export default App;
