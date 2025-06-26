import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewStaf   from './component/ViewStaf';
import CreateStaf from './component/CreateStaf';
import UpdateStaf from './component/UpdateStaf';

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-4">
        <h2 className="text-center">Employee Management</h2>
        <Routes>
          <Route path="/"        element={<ViewStaf />} />
          {/* <Route path="/create"  element={<CreateStaf />} /> */}
          {/* <Route path="/update/:id" element={<UpdateStaf />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
