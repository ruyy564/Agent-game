/**
 * Игровые режимы
 */
export enum GameMode {
  /** Анализ email на phishing */
  EMAIL_ANALYSIS = 'email_analysis',
  /** Ревью кода на уязвимости */
  CODE_REVIEW = 'code_review',
  /** Анализ логов ClickHouse */
  CLICKHOUSE_LOGS = 'clickhouse_logs',
}

/**
 * Состояние игры
 */
export interface GameState {
  /** ID текущей миссии */
  currentMissionId: string | null;
  /** Текущий игровой режим */
  currentMode: GameMode;
  /** Прошедшее время в секундах */
  elapsedTime: number;
  /** Игра на паузе */
  isPaused: boolean;
  /** Найденные угрозы (массив ID) */
  foundThreats: string[];
}
