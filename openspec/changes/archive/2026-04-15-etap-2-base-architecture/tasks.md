## 1. Установка зависимостей

- [x] 1.1 Установить react-router-dom@^7.1.3
- [x] 1.2 Установить zustand@^5.0.3
- [x] 1.3 Проверить успешную установку (npm list)

## 2. Создание TypeScript типов (shared/types)

- [x] 2.1 Создать директорию src/shared/types/
- [x] 2.2 Создать threat.ts с enum ThreatType (PHISHING, SQL_INJECTION, XSS, HARDCODED_CREDENTIALS, BRUTE_FORCE, DATA_EXFILTRATION)
- [x] 2.3 Создать level.ts с enum LevelDifficulty (JUNIOR, MIDDLE, SENIOR, CISO)
- [x] 2.4 Создать mission.ts с enum MissionType (EMAIL, CODE, LOGS)
- [x] 2.5 Создать game.ts с enum GameMode (EMAIL_ANALYSIS, CODE_REVIEW, CLICKHOUSE_LOGS) и интерфейсом GameState
- [x] 2.6 Создать player.ts с интерфейсами PlayerState и PlayerStats
- [x] 2.7 Создать index.ts для экспорта всех типов

## 3. Создание player entity (entities/player)

- [x] 3.1 Создать директорию src/entities/player/model/
- [x] 3.2 Создать types.ts с интерфейсами PlayerState и PlayerStats
- [x] 3.3 Создать store.ts с playerSlice (score, currentLevel, achievements, stats)
- [x] 3.4 Добавить экшены: addScore, subtractScore, setLevel, addAchievement, updateStats, resetProgress
- [x] 3.5 Создать selectors.ts с хуками: usePlayerScore, usePlayerLevel, usePlayerAchievements, usePlayerStats, usePlayerAccuracy
- [x] 3.6 Создать index.ts для экспорта публичного API

## 4. Создание game entity (entities/game)

- [x] 4.1 Создать директорию src/entities/game/model/
- [x] 4.2 Создать types.ts с интерфейсом GameState
- [x] 4.3 Создать store.ts с gameSlice (currentMissionId, currentMode, elapsedTime, isPaused, foundThreats)
- [x] 4.4 Добавить экшены: setMission, clearMission, setMode, startTimer, pauseTimer, resetTimer, addFoundThreat, resetGame
- [x] 4.5 Создать selectors.ts с хуками: useCurrentMission, useGameMode, useElapsedTime, useIsPaused, useFoundThreats
- [x] 4.6 Создать index.ts для экспорта публичного API

## 5. Создание StoreProvider (app/providers)

- [x] 5.1 Создать директорию src/app/providers/
- [x] 5.2 Создать StoreProvider.tsx с React Context для Zustand стора
- [x] 5.3 Объединить playerSlice и gameSlice в единый стор
- [x] 5.4 Создать хук useStore для доступа к стору из компонентов
- [x] 5.5 Экспортировать StoreProvider и useStore

## 6. Создание заглушек страниц (pages)

- [x] 6.1 Создать директорию src/pages/start-screen/
- [x] 6.2 Создать StartScreen.tsx с базовым компонентом и заглушкой
- [x] 6.3 Создать директорию src/pages/mission-select/
- [x] 6.4 Создать MissionSelect.tsx с базовым компонентом и заглушкой
- [x] 6.5 Создать директорию src/pages/game-screen/
- [x] 6.6 Создать GameScreen.tsx с базовым компонентом и заглушкой
- [x] 6.7 Создать директорию src/pages/results-screen/
- [x] 6.8 Создать ResultsScreen.tsx с базовым компонентом и заглушкой
- [x] 6.9 Добавить index.ts в каждую директорию страницы для экспорта

## 7. Настройка React Router (app/routes)

- [x] 7.1 Создать директорию src/app/routes/
- [x] 7.2 Создать routes.tsx с определением маршрутов через createBrowserRouter
- [x] 7.3 Настроить маршрут / для StartScreen с lazy loading
- [x] 7.4 Настроить маршрут /missions для MissionSelect с lazy loading
- [x] 7.5 Настроить маршрут /game/:missionId для GameScreen с lazy loading
- [x] 7.6 Настроить маршрут /results для ResultsScreen с lazy loading
- [x] 7.7 Добавить catch-all маршрут \* с редиректом на /
- [x] 7.8 Создать index.ts для экспорта router

## 8. Создание RouterProvider (app/providers)

- [x] 8.1 Создать RouterProvider.tsx с RouterProvider из react-router-dom
- [x] 8.2 Импортировать router из app/routes
- [x] 8.3 Экспортировать RouterProvider компонент
- [x] 8.4 Обновить app/providers/index.ts для экспорта обоих провайдеров

## 9. Интеграция провайдеров в App

- [x] 9.1 Обновить src/App.tsx для импорта StoreProvider и RouterProvider
- [x] 9.2 Обернуть приложение в StoreProvider
- [x] 9.3 Обернуть RouterProvider внутри StoreProvider
- [x] 9.4 Удалить старый контент из App.tsx (если есть)

## 10. Обновление точки входа

- [x] 10.1 Обновить src/main.tsx для импорта обновленного App
- [x] 10.2 Проверить, что StrictMode обертывает App

## 11. Проверка и тестирование

- [ ] 11.1 Запустить npm run dev и проверить отсутствие ошибок компиляции
- [ ] 11.2 Проверить навигацию между всеми 4 маршрутами в браузере
- [ ] 11.3 Проверить работу параметра :missionId в URL
- [ ] 11.4 Проверить доступ к стору из компонентов (добавить тестовый вызов)
- [ ] 11.5 Проверить lazy loading (открыть DevTools Network и проверить chunk загрузку)
- [x] 11.6 Запустить npm run type-check и убедиться в отсутствии ошибок TypeScript
- [x] 11.7 Запустить npm run lint и исправить все ошибки ESLint
- [x] 11.8 Запустить npm run format для форматирования кода

## 12. Документация

- [x] 12.1 Добавить комментарии на русском языке ко всем публичным API
- [ ] 12.2 Обновить README.md с информацией о новой архитектуре (если нужно)
- [x] 12.3 Отметить задачи 7-10 как выполненные в TASKS.md
