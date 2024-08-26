import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import Routes from './pages/Routes';
 import AuthContextProvider from './contexts/AuthContext';
 import CountContextProvider from './contexts/CountContext';


function App() {
  return (
    <> 
       <AuthContextProvider>
       <CountContextProvider>
       <Routes />
       </CountContextProvider>
       </AuthContextProvider>
  
       </>

  );
}

export default App;
