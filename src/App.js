import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import './App.css';
import 'devextreme/dist/css/dx.light.css';
import Aside from './components/body/aside';
import Nav from './components/body/nav';
import Nhanvien from './pages/nhanvien';
import Login from './pages/auth/Login';
import Home from './pages/Home/Home';

import AuthProvider from './context/auth.context'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useState } from 'react';
function App() {
  const loadding = localStorage.getItem("loadding")
  const [isLoadding, setIsLoadding] = useState(true)



  // if(loadding === null){
  //   return(
  //     <Router>
  //         <Route path="/">
  //           <Login setIsLoadding={setIsLoadding} isLoadding={isLoadding}/>
  //         </Route>
  //         <Redirect to='/login'  />

  //     </Router>  
  //   )
  // }else{
    return (

      <div className="App">
          <AuthProvider>
            <div className="wrapper">

                  <Router>
                      
                        <Nav setIsLoadding={setIsLoadding} isLoadding={isLoadding}/>
                        <Aside/>
                        <Switch>
                          <Route path="/login">

                            <Redirect to="/" />
                              
 
                            
                          </Route>
                          <Route exact path="/home">
                            <Home />
                          </Route>
                          <Route exact path="/">
                            <Home />
                          </Route>
                          <Route path="/nhanvien">
                            <Nhanvien />
                          </Route>
                      </Switch>   
                  </Router>
                    
                
                

            </div>


  


        
        
                    
        
        
              

          </AuthProvider>

        
      </div>
    );    
  // }

}

export default App;
