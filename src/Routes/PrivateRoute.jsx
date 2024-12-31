import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import Loading from '../components/Loading'
import { AuthContext } from '../Provider/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext)

  const location = useLocation()

  if (loader) return <Loading />
  if (user) return children
  return <Navigate to='/login' state={location.pathname} />
}

export default PrivateRoute