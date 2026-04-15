import { useStore } from '@/app/providers/StoreProvider';
import { GameMode } from '@/shared/types';

/**
 * Хук для получения текущей миссии
 */
export const useCurrentMission = (): string | null => {
  return useStore((state) => state.currentMissionId);
};

/**
 * Хук для получения текущего игрового режима
 */
export const useGameMode = (): GameMode => {
  return useStore((state) => state.currentMode);
};

/**
 * Хук для получения прошедшего времени
 */
export const useElapsedTime = (): number => {
  return useStore((state) => state.elapsedTime);
};

/**
 * Хук для проверки паузы
 */
export const useIsPaused = (): boolean => {
  return useStore((state) => state.isPaused);
};

/**
 * Хук для получения найденных угроз
 */
export const useFoundThreats = (): string[] => {
  return useStore((state) => state.foundThreats);
};
