import type { StateCreator } from 'zustand';
import { GameMode } from '@/shared/types';
import type { GameSlice } from './types';

/**
 * Начальное состояние игры
 */
const initialState = {
  currentMissionId: null,
  currentMode: GameMode.EMAIL_ANALYSIS,
  elapsedTime: 0,
  isPaused: false,
  foundThreats: [],
};

/**
 * Game slice для Zustand стора
 */
export const createGameSlice: StateCreator<GameSlice> = (set) => ({
  ...initialState,

  setMission: (missionId) =>
    set(() => ({
      currentMissionId: missionId,
    })),

  clearMission: () =>
    set(() => ({
      currentMissionId: null,
    })),

  setMode: (mode) =>
    set(() => ({
      currentMode: mode,
    })),

  startTimer: () =>
    set(() => ({
      isPaused: false,
    })),

  pauseTimer: () =>
    set(() => ({
      isPaused: true,
    })),

  resetTimer: () =>
    set(() => ({
      elapsedTime: 0,
    })),

  addFoundThreat: (threatId) =>
    set((state) => ({
      foundThreats: state.foundThreats.includes(threatId)
        ? state.foundThreats
        : [...state.foundThreats, threatId],
    })),

  resetGame: () =>
    set(() => ({
      ...initialState,
    })),
});
