import { GameMode } from '@/shared/types';
import type { GameState } from '@/shared/types';

export type { GameState };

/**
 * Экшены для управления состоянием игры
 */
export interface GameActions {
  /** Установить текущую миссию */
  setMission: (missionId: string) => void;
  /** Очистить текущую миссию */
  clearMission: () => void;
  /** Установить игровой режим */
  setMode: (mode: GameMode) => void;
  /** Запустить таймер */
  startTimer: () => void;
  /** Поставить таймер на паузу */
  pauseTimer: () => void;
  /** Сбросить таймер */
  resetTimer: () => void;
  /** Добавить найденную угрозу */
  addFoundThreat: (threatId: string) => void;
  /** Сбросить состояние игры */
  resetGame: () => void;
}

/**
 * Полное состояние game slice
 */
export type GameSlice = GameState & GameActions;
