import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';

/**
 * Lazy loading страниц
 */
const StartScreen = lazy(() => import('@/pages/start-screen'));
const MissionSelect = lazy(() => import('@/pages/mission-select'));
const GameScreen = lazy(() => import('@/pages/game-screen'));
const ResultsScreen = lazy(() => import('@/pages/results-screen'));

/**
 * Конфигурация маршрутов
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <StartScreen />,
  },
  {
    path: '/missions',
    element: <MissionSelect />,
  },
  {
    path: '/game/:missionId',
    element: <GameScreen />,
  },
  {
    path: '/results',
    element: <ResultsScreen />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
