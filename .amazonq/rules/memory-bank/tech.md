# Technology Stack

## Programming Languages

### TypeScript 5.7.2

Основной язык разработки. Используется для всего кода приложения с строгой типизацией.

### JavaScript (ES Modules)

Конфигурационные файлы (eslint.config.js, postcss.config.js, tailwind.config.js).

## Core Framework

### React 18.3.1

Основной UI фреймворк. Используются современные фичи:

- Functional Components
- Hooks (useState, useEffect, useMemo, useCallback, useRef)
- Concurrent Features
- Strict Mode

### React DOM 18.3.1

Рендеринг React компонентов в DOM.

## Build System

### Vite 5.4.11

Современный сборщик и dev-сервер:

- Быстрый HMR (Hot Module Replacement)
- Оптимизированная production сборка
- ES modules нативно
- Plugin: @vitejs/plugin-react 4.3.4

## Styling

### Tailwind CSS 3.4.17

Utility-first CSS фреймворк:

- Кастомная цветовая палитра Сбера
- Responsive дизайн
- JIT компилятор

### PostCSS 8.4.49

CSS процессор с плагинами:

- autoprefixer 10.4.20 - автоматические вендорные префиксы

### CSS Modules

Используется через Vite для изоляции стилей компонентов.

## UI Components

### shadcn/ui

Коллекция переиспользуемых компонентов на базе Radix UI:

- Button, Card, Table, Tabs, Dialog, Progress
- Полностью кастомизируемые через Tailwind
- Копируются в проект (не npm пакет)

### Lucide React 0.468.0

Библиотека SVG иконок:

- 1000+ иконок
- Tree-shakeable
- TypeScript типы

## State Management

### Zustand 5.0.3

Легковесная библиотека управления состоянием:

- Минималистичный API
- Без boilerplate
- TypeScript поддержка
- Используется через провайдер

## Routing

### React Router DOM 7.1.3

Клиентская маршрутизация:

- Декларативный роутинг
- Nested routes
- URL параметры

## Animation

### Framer Motion 12.0.0

Библиотека анимаций:

- Декларативные анимации
- Gesture поддержка
- Layout animations
- Variants для сложных анимаций

## Utilities

### clsx 2.1.1

Условное объединение CSS классов.

### tailwind-merge 2.6.0

Умное слияние Tailwind классов (предотвращает конфликты).

## Development Tools

### TypeScript Compiler

- tsconfig.json - root конфигурация
- tsconfig.app.json - конфигурация для приложения
- tsconfig.node.json - конфигурация для Node.js скриптов

### ESLint 9.39.4

Линтер JavaScript/TypeScript:

- Flat config (eslint.config.js)
- @eslint/js 9.39.4
- typescript-eslint 8.58.0
- eslint-plugin-react-hooks 7.0.1
- eslint-plugin-react-refresh 0.5.2
- globals 17.4.0

### Stylelint 16.12.0

Линтер CSS:

- stylelint-config-standard 36.0.1
- Проверка CSS/SCSS файлов

### Prettier 3.4.2

Форматтер кода:

- prettier-plugin-tailwindcss 0.6.11 - сортировка Tailwind классов
- .prettierrc - конфигурация
- .prettierignore - игнорируемые файлы

### Husky 9.1.7

Git hooks менеджер:

- pre-commit хук для автоматических проверок

### lint-staged 15.3.0

Запуск линтеров только на staged файлах:

- ESLint для .ts, .tsx
- Stylelint для .css, .scss
- Prettier для всех файлов

## Type Definitions

### @types/node 24.12.2

Node.js типы для TypeScript.

### @types/react 18.3.18

React типы для TypeScript.

### @types/react-dom 18.3.5

React DOM типы для TypeScript.

## Build Configuration

### vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Изменить для GitHub Pages
  build: {
    outDir: 'dist',
  },
});
```

### tailwind.config.js

Кастомная конфигурация с цветами Сбера:

- Primary: #21A038
- Secondary: #1A8030
- Accent: #2FC14B
- Success: #28A745
- Background: #F5F9F6
- Dark: #0D4D1F

## Development Commands

```bash
# Запуск dev сервера (Vite)
npm run dev

# Production сборка (TypeScript + Vite)
npm run build

# Предпросмотр production сборки
npm run preview

# ESLint проверка и автофикс
npm run lint

# Stylelint проверка и автофикс
npm run lint:style

# TypeScript проверка типов (без сборки)
npm run type-check

# Prettier форматирование
npm run format

# Установка Husky hooks
npm run prepare
```

## Package Manager

### npm

Используется npm (package-lock.json присутствует).

## Deployment

### GitHub Pages

Статический хостинг:

- GitHub Actions для CI/CD
- Vite base path конфигурация
- Автоматический деплой при push в main

## Browser Support

### Modern Browsers

- Chrome/Edge (последние 2 версии)
- Firefox (последние 2 версии)
- Safari (последние 2 версии)
- ES2020+ поддержка

## Module System

### ES Modules

- type: "module" в package.json
- import/export синтаксис
- Нативная поддержка в Vite
