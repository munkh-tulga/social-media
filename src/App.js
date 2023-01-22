import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import Profile from './pages/Profile';
import Theme from './Theme';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light");
  const currentUser = true

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme) {
      let themeExist = localStorage.getItem("theme");
      setTheme(JSON.parse(themeExist));
    } else {
      localStorage.setItem('theme', JSON.stringify(theme))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  const Layout = () => {
    return (
      <div>
        <NavBar setTheme={setTheme} />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);
  console.log('theme', theme)
  return (
    <div className="App">
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </div>
  );
}

export default App;
