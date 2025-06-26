import { useState, lazy, Suspense } from 'react'
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router'
// import Home from '../pages/Home'
// import Friends from '../pages/Friends'
// import Profile from '../pages/Profile'
// import Login from '../pages/Login'

const Login = lazy( () => import('../pages/Login'))
const Home = lazy( () => import('../pages/Home'))
const Friends = lazy( () => import('../pages/Friends'))
const Profile = lazy( () => import('../pages/Profile'))

const guestRouter = createBrowserRouter([
  {path : "/", element: <Login />},
  {path : "/ads", element: <p>Advertising</p>},
  {path : "*", element: <Navigate to="/" />},
])

const userRouter = createBrowserRouter([
  {path : "/", element:
    <>
      <div className='text-4xl py-4 border'>Header</div>
      <Outlet />
    </>,
    children: [
      {index: true, element: <Home />},
      {path: "friends", element: <Friends />},
      {path: "profile", element: <Profile />},
      {path: "*", element: <Navigate to="/" />},
    ]
  },

])

function AppRouter() {
  let user = null
  // let user = 'andy'
  // const [user, setUser] = useState(false)
  const finalRouter = user ? userRouter : guestRouter
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={finalRouter} />
    </Suspense>
  )
}
{/* <button className='btn btn-primary' onClick={() => setUser(!user)}>Login-Logout</button> */}

export default AppRouter