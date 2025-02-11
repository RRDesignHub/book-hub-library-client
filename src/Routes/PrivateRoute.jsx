import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading'
import useAuth from '../Hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();

  const location = useLocation()

  if (loader) return <Loading />
  if (user) return children
  return <Navigate to='/login' state={location.pathname} />
}

export default PrivateRoute