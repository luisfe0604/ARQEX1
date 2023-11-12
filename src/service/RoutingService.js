import { useNavigate } from 'react-router-dom';

export const createNavigationFunctions = () => {
  const navigate = useNavigate();

  const navigateToHistory = () => {
    navigate('/history');
  };

  const navigateToBack = () => {
    navigate('/');
  };

  return {
    navigateToHistory,
    navigateToBack,
  };
};
