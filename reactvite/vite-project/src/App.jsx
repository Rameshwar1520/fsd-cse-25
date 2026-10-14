import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import Home from './components/Home'

function MainLayout() {
  return (
    <>
      <nav className="navbar navbar-expand">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            My Project
          </NavLink>
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/registration">
              Registration
            </NavLink>
          </div>
        </div>
      </nav>
      <main className="container py-4">
        <Outlet />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
