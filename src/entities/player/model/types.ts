import { LevelDifficulty } from '@/shared/types';
import type { PlayerState, PlayerStats } from '@/shared/types';

export type { PlayerState, PlayerStats };

/**
 * Экшены для управления состоянием игрока
 */
export interface PlayerActions {
  /** Добавить очки */
  addScore: (points: number) => void;
  /** Вычесть очки */
  subtractScore: (points: number) => void;
  /** Установить уровень сложности */
  setLevel: (level: LevelDifficulty) => void;
  /** Добавить достижение */
  addAchievement: (achievementId: string) => void;
  /** Обновить статистику */
  updateStats: (stats: Partial<PlayerStats>) => void;
  /** Сбросить прогресс */
  resetProgress: () => void;
}

/**
 * Полное состояние player slice
 */
export type PlayerSlice = PlayerState & PlayerActions;
