import Footer from './components/Footer';
import Nevbar from './components/mainComponents/Nevbar';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div className="w-full">
      <Nevbar />
      <div className="w-full px-40 py-10 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App;