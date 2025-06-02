import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Navbars from './component/Edit&Navbar/Navbars'
// import Overview from './component/Side/Overview'
import Edit from './component/Edit&Navbar/Edit'
// import Direactory from './component/Side/Direactory'
import Direactoryadmin from './component/AdminDirectory/Direactoryadmin'
import Overviewadmin from './component/AdminDirectory/Overviewadmin'


function App() {
  return (
    <>
     {/* <Navbars />  */}
      <BrowserRouter>
        <Routes>
          {/* <Route path='/overview' element={<Overview />} />
          <Route path='/directory' element={<Direactory />} /> */}
          <Route path='/user/:id' element={<Edit />} />
          <Route path = '/adminDireactory' element={<Direactoryadmin/>}/>
          <Route path='/overviewadmin' element={<Overviewadmin/>} />
          <Route path='/not' element={<h1>User not found</h1>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
