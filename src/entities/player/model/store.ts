import type { StateCreator } from 'zustand';
import { LevelDifficulty } from '@/shared/types';
import type { PlayerSlice } from './types';

/**
 * Начальное состояние игрока
 */
const initialState = {
  score: 0,
  currentLevel: LevelDifficulty.JUNIOR,
  achievements: [],
  stats: {
    missionsCompleted: 0,
    threatsFound: 0,
    mistakes: 0,
  },
};

/**
 * Player slice для Zustand стора
 */
export const createPlayerSlice: StateCreator<PlayerSlice> = (set) => ({
  ...initialState,

  addScore: (points) =>
    set((state) => ({
      score: state.score + points,
    })),

  subtractScore: (points) =>
    set((state) => ({
      score: Math.max(0, state.score - points),
    })),

  setLevel: (level) =>
    set(() => ({
      currentLevel: level,
    })),

  addAchievement: (achievementId) =>
    set((state) => ({
      achievements: state.achievements.includes(achievementId)
        ? state.achievements
        : [...state.achievements, achievementId],
    })),

  updateStats: (newStats) =>
    set((state) => ({
      stats: {
        ...state.stats,
        ...newStats,
      },
    })),

  resetProgress: () =>
    set(() => ({
      score: 0,
      achievements: [],
      stats: {
        missionsCompleted: 0,
        threatsFound: 0,
        mistakes: 0,
      },
    })),
});
