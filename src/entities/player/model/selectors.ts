import { useStore } from '@/app/providers/StoreProvider';
import { LevelDifficulty } from '@/shared/types';
import type { PlayerStats } from '@/shared/types';

/**
 * Хук для получения очков игрока
 */
export const usePlayerScore = (): number => {
  return useStore((state) => state.score);
};

/**
 * Хук для получения уровня игрока
 */
export const usePlayerLevel = (): LevelDifficulty => {
  return useStore((state) => state.currentLevel);
};

/**
 * Хук для получения достижений игрока
 */
export const usePlayerAchievements = (): string[] => {
  return useStore((state) => state.achievements);
};

/**
 * Хук для получения статистики игрока
 */
export const usePlayerStats = (): PlayerStats => {
  return useStore((state) => state.stats);
};

/**
 * Хук для вычисления точности игрока
 */
export const usePlayerAccuracy = (): number => {
  return useStore((state) => {
    const { threatsFound, mistakes } = state.stats;
    const total = threatsFound + mistakes;
    return total === 0 ? 0 : (threatsFound / total) * 100;
  });
};
