import './App.css';
import Ndpsir from './compound/Ndpsir';
import CollegeFeedbackForm from './compound/form';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Jdp from './compound/jdp';
import Simhadri from './compound/Simhadri';
import Mavin from './compound/Mavin';
import Prasuna from './compound/Prasuna';
import Dp from './compound/Dp';
import Rakha from './compound/Rekha'

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Ndpsir/>} />
     <Route path="/" element={<CollegeFeedbackForm/>} />
     {/* <Route path="/Ndpsir" element={<Ndpsir/>} /> */}
     <Route path="/Jdp" element={<Jdp/>} />
     <Route path="/Simhadri" element={<Simhadri/>} />
     <Route path="/Mavin" element={<Mavin/>} />
     <Route path="/Prasuna" element={<Prasuna/>} />
     <Route path="/Dp" element={<Dp/>} />
     <Route path="/Rakha" element={<Rakha/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
