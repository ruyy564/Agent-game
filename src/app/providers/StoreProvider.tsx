import { createContext, useContext, useState, ReactNode } from 'react';
import { createStore, useStore as useZustandStore } from 'zustand';
import { createPlayerSlice } from '@/entities/player';
import { createGameSlice } from '@/entities/game';
import type { PlayerSlice } from '@/entities/player';
import type { GameSlice } from '@/entities/game';

/**
 * Объединенный тип стора
 */
type Store = PlayerSlice & GameSlice;

/**
 * Тип Zustand стора
 */
type StoreType = ReturnType<typeof createStore<Store>>;

/**
 * Контекст для стора
 */
const StoreContext = createContext<StoreType | null>(null);

/**
 * Создание стора (вынесено из компонента)
 */
const createAppStore = () => {
  return createStore<Store>((...args) => ({
    ...createPlayerSlice(...args),
    ...createGameSlice(...args),
  }));
};

/**
 * Провайдер глобального стора
 */
export function StoreProvider({ children }: { children: ReactNode }) {
  const [store] = useState(createAppStore);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

/**
 * Хук для доступа к стору
 */
export function useStore<T>(selector: (state: Store) => T): T {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return useZustandStore(store, selector);
}
