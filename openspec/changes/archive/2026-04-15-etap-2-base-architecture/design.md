## Context

Проект использует Feature-Sliced Design (FSD) архитектуру с React 18 + TypeScript + Vite. Текущее состояние: базовая настройка проекта завершена (Этап 1), но отсутствует маршрутизация и управление состоянием. Согласно правилам проекта (.amazonq/rules/global-store.md), Zustand стор должен подключаться через React провайдер, а не напрямую.

**Ограничения:**

- Следовать FSD архитектуре (слои: app → pages → widgets → features → entities → shared)
- Использовать только Zustand для глобального стора (запрещены Redux, MobX)
- Стор обязательно через провайдер (не напрямую)
- Все комментарии на русском языке
- Строгая типизация TypeScript (избегать any)

**Заинтересованные стороны:**

- Разработчики игровых режимов (будут использовать типы и стор)
- Разработчики UI компонентов (будут использовать роутинг)

## Goals / Non-Goals

**Goals:**

- Настроить маршрутизацию для 4 экранов с lazy loading
- Создать типобезопасный глобальный стор через провайдер
- Определить все игровые типы для использования в будущих этапах
- Обеспечить сохранение состояния между переходами

**Non-Goals:**

- Реализация UI компонентов страниц (Этап 4)
- Логика игровых режимов (Этап 5)
- Система достижений (Этап 10)
- Персистентность в localStorage (Этап 10)

## Decisions

### 1. React Router v7 с декларативным роутингом

**Решение:** Использовать createBrowserRouter с lazy loading страниц

**Обоснование:**

- React Router v7 - современный стандарт для React приложений
- createBrowserRouter поддерживает data APIs и loader функции
- Lazy loading уменьшает initial bundle size
- Декларативный подход соответствует React философии

**Альтернативы:**

- ❌ BrowserRouter - устаревший API, нет data loaders
- ❌ TanStack Router - избыточная сложность для проекта

**Структура маршрутов:**

```
/ - StartScreen (стартовый экран)
/missions - MissionSelect (выбор миссии)
/game/:missionId - GameScreen (игровой экран)
/results - ResultsScreen (результаты)
```

### 2. Zustand с модульной структурой через провайдер

**Решение:** Создать отдельные слайсы (playerSlice, gameSlice) и объединить в один стор через провайдер

**Обоснование:**

- Zustand легковесный (1KB) и простой API
- Модульная структура упрощает поддержку
- Провайдер обязателен по правилам проекта (.amazonq/rules/global-store.md)
- Селекторы предотвращают лишние ре-рендеры

**Альтернативы:**

- ❌ Redux Toolkit - избыточный boilerplate
- ❌ MobX - запрещен правилами проекта
- ❌ Context API - плохая производительность для частых обновлений

**Структура стора:**

```typescript
// entities/player/model/store.ts - playerSlice
// entities/game/model/store.ts - gameSlice
// app/providers/StoreProvider.tsx - провайдер
```

### 3. Enum для константных типов

**Решение:** Использовать TypeScript enum для ThreatType, LevelDifficulty, GameMode

**Обоснование:**

- Enum обеспечивает type safety и автокомплит
- Предотвращает опечатки в строковых литералах
- Удобен для switch/case конструкций
- Компилируется в читаемый JavaScript

**Альтернативы:**

- ❌ Union types - менее удобны для итерации
- ❌ Объекты с as const - больше boilerplate

### 4. FSD структура для entities

**Решение:** Разделить player и game в отдельные entities с публичным API

**Обоснование:**

- Соответствует FSD архитектуре
- Каждая entity инкапсулирует свою логику
- Публичный API (index.ts) контролирует экспорты
- Упрощает тестирование и рефакторинг

**Структура:**

```
entities/
├── player/
│   ├── model/
│   │   ├── store.ts (playerSlice)
│   │   ├── types.ts (PlayerState, PlayerStats)
│   │   └── selectors.ts (usePlayerScore, usePlayerLevel)
│   └── index.ts (публичный API)
└── game/
    ├── model/
    │   ├── store.ts (gameSlice)
    │   ├── types.ts (GameState)
    │   └── selectors.ts (useCurrentMission, useGameMode)
    └── index.ts (публичный API)
```

## Risks / Trade-offs

### [Risk] Zustand провайдер усложняет setup

**Mitigation:** Создать четкую документацию и примеры использования. Провайдер настраивается один раз в app/providers.

### [Risk] Lazy loading может вызвать задержки при навигации

**Mitigation:** Для MVP приемлемо. В будущем можно добавить prefetching или loading states.

### [Risk] Enum увеличивает bundle size

**Mitigation:** Минимально (~100 bytes на enum). Преимущества type safety перевешивают.

### [Trade-off] Модульная структура стора vs единый файл

**Решение:** Модульная структура. Да, больше файлов, но лучше поддержка и масштабируемость.

### [Trade-off] React Router v7 vs v6

**Решение:** v7 для future-proof. Миграция с v6 на v7 минимальна, если понадобится downgrade.

## Migration Plan

**Шаг 1: Установка зависимостей**

```bash
npm install react-router-dom zustand
```

**Шаг 2: Создание типов (shared/types)**

- Создать файлы типов без breaking changes
- Экспортировать через index.ts

**Шаг 3: Создание стора (entities)**

- Создать playerSlice и gameSlice
- Создать StoreProvider в app/providers
- Пока не интегрировать в App.tsx

**Шаг 4: Создание роутинга (app/providers, app/routes)**

- Создать RouterProvider
- Создать заглушки страниц (пустые компоненты)
- Пока не интегрировать в App.tsx

**Шаг 5: Интеграция в App.tsx**

- Обернуть App в StoreProvider и RouterProvider
- Проверить работу навигации

**Rollback strategy:**

- Все изменения аддитивные (не ломают существующий код)
- Можно откатить коммит без последствий
- Если провайдер не работает - временно использовать стор напрямую (нарушение правил, но работает)

## Open Questions

1. **Нужен ли ErrorBoundary для роутинга?**
   - Решение: Отложить на Этап 11 (тестирование)

2. **Сохранять ли состояние в localStorage?**
   - Решение: Отложить на Этап 10 (система прогрессии)

3. **Нужны ли route guards (защита маршрутов)?**
   - Решение: Нет, игра не требует авторизации

4. **Использовать ли React Router loaders для данных?**
   - Решение: Нет, данные будут в сторе и mock файлах
