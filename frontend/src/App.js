import logo from './logo.svg';
import './App.css';
import Locations from './Components/Locations'
import MedicalCenter from './Components/signupMC';
import Home from './Components/Home';
import Signup from './Components/Signup'
function App() {
  return (
    <div className="app">

          

              <Router>
                  <Routes>

                      <Route path="/" element={<Home/>}/>,
                      <Route path="/signup/tourist" element={<Signup/>}/>,
                      <Route path="/signup/medical_center" element={<MedicalCenter/>}/>,
                      <Route path="/create_locations" element={<Locations/>}/>,
                  </Routes>
              </Router>
          
      </div>
  );
}

export default App;
