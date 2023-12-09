import logo from './logo.svg';
import './App.css';



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
