import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user?.token;

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
