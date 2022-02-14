import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Dashboard } from './pages/Dashboard'
import { Home } from "./pages/Home"
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { PrivateRoutes, RestrictedRoutes} from './routes/protected-routes'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route element={<PrivateRoutes />}>
         <Route path='/dashboard' element={<Dashboard />}/>
        </Route>

        <Route element={<RestrictedRoutes />}>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
