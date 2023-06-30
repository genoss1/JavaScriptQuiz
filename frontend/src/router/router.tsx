import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';
import QuizPage from '../components/QuizPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/quiz',
    element: <QuizPage />
  }
]);

export default router;
