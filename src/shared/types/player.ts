import { LevelDifficulty } from './level';

/**
 * Статистика игрока
 */
export interface PlayerStats {
  /** Пройденные миссии */
  missionsCompleted: number;
  /** Найденные угрозы */
  threatsFound: number;
  /** Ошибки */
  mistakes: number;
}

/**
 * Состояние игрока
 */
export interface PlayerState {
  /** Очки */
  score: number;
  /** Текущий уровень сложности */
  currentLevel: LevelDifficulty;
  /** Разблокированные достижения (массив ID) */
  achievements: string[];
  /** Статистика */
  stats: PlayerStats;
}
