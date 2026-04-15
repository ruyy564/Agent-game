# Development Guidelines

## Code Quality Standards

### TypeScript Strict Mode

Проект использует строгую типизацию TypeScript:

- Все файлы должны иметь расширение .ts или .tsx
- Избегать использования `any` типа
- Использовать явные типы для функций и переменных
- Non-null assertion operator (!) используется только когда уверены в значении

### ESLint Configuration

Проект использует flat config ESLint (eslint.config.js):

- Recommended правила для JavaScript и TypeScript
- React Hooks правила (обязательные зависимости)
- React Refresh правила для Vite HMR
- Неиспользуемые переменные с префиксом `_` игнорируются
- Игнорируются папки: dist, node_modules, build

### File Naming Conventions

- React компоненты: PascalCase (App.tsx, GameScreen.tsx)
- Утилиты и хуки: camelCase (useStore.ts, formatScore.ts)
- Конфигурационные файлы: kebab-case (eslint.config.js, vite.config.ts)
- Типы и интерфейсы: PascalCase (ThreatType.ts, GameState.ts)

## Code Formatting Patterns

### Import Order

Стандартный порядок импортов (5 файлов следуют этому паттерну):

```typescript
// 1. React и сторонние библиотеки
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 2. Стили
import './index.css';

// 3. Локальные компоненты и модули
import App from './App.tsx';
```

### Export Patterns

Используется default export для компонентов (5/5 файлов):

```typescript
function App() {
  return <div>...</div>;
}

export default App;
```

Для конфигураций используется export default с объектом:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Component Structure

Функциональные компоненты с явным return (100% файлов):

```typescript
function ComponentName() {
  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
}
```

## Structural Conventions

### React 18 Patterns

Используется современный React 18 API (main.tsx):

```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- StrictMode обязателен для разработки
- createRoot вместо устаревшего ReactDOM.render
- Non-null assertion для root элемента

### Vite Configuration

Стандартная структура vite.config.ts:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

- Алиас '@' для импортов из src/
- React plugin для JSX трансформации
- defineConfig для TypeScript типов

### Tailwind CSS Integration

Стандартная интеграция через PostCSS (3 файла):

**postcss.config.js:**

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**tailwind.config.js:**

```javascript
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#21A038',
        secondary: '#1A8030',
        accent: '#2FC14B',
        success: '#28A745',
        background: '#F5F9F6',
        dark: '#0D4D1F',
      },
    },
  },
  plugins: [],
};
```

**index.css:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light;
  font-synthesis: none;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  min-height: 100vh;
  background-color: theme('colors.background');
}
```

## Textual Standards

### Comments Language

Все комментарии должны быть на русском языке (согласно .amazonq/rules/comments.md):

```typescript
// Инициализация приложения
function initApp() {
  // Логика инициализации
}
```

### JSDoc Comments

JSDoc комментарии также на русском:

```typescript
/**
 * Вычисляет итоговый счет игрока
 * @param baseScore - базовые очки
 * @param bonus - бонусные очки
 * @returns итоговый счет
 */
function calculateScore(baseScore: number, bonus: number): number {
  return baseScore + bonus;
}
```

### Configuration Comments

JSDoc аннотации для конфигураций:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  // конфигурация
};
```

## Practices Followed

### Tailwind Utility Classes

Используются Tailwind utility классы напрямую в JSX (App.tsx):

```typescript
<div className="flex min-h-screen items-center justify-center">
  <h1 className="text-4xl font-bold text-primary">
    Cyber Security Detective
  </h1>
</div>
```

- Flexbox для layout (flex, items-center, justify-center)
- Responsive sizing (min-h-screen)
- Typography utilities (text-4xl, font-bold)
- Кастомные цвета через theme (text-primary)

### Custom Color Palette

Все цвета определены в tailwind.config.js и используются через Tailwind:

- primary, secondary, accent, success, background, dark
- Цвета Сбера (зеленая палитра)
- Доступ через theme() функцию в CSS или className

### Global Styles

Минимальные глобальные стили в index.css:

- Tailwind directives (@tailwind base/components/utilities)
- :root для глобальных CSS переменных
- body для базовых стилей
- Использование theme() для доступа к Tailwind конфигу

### TypeScript Configuration

Модульная конфигурация TypeScript:

- tsconfig.json - root конфигурация
- tsconfig.app.json - для приложения
- tsconfig.node.json - для Node.js скриптов (Vite config)

## Semantic Patterns

### React Component Pattern

Стандартный паттерн функционального компонента:

```typescript
function ComponentName() {
  // Хуки в начале
  // const [state, setState] = useState();

  // Обработчики событий
  // const handleClick = () => {};

  // Эффекты
  // useEffect(() => {}, []);

  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}

export default ComponentName;
```

### Configuration Pattern

ES modules для всех конфигураций:

```javascript
import dependency from 'package';

export default {
  // конфигурация
};
```

### Path Alias Pattern

Использование '@' алиаса для импортов:

```typescript
// Вместо: import Component from '../../../components/Component'
import Component from '@/components/Component';
```

## Internal API Usage

### Vite defineConfig

Всегда используй defineConfig для типизации:

```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  // конфигурация с автокомплитом
});
```

### React createRoot

Современный API для рендеринга:

```typescript
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### Tailwind theme() Function

Доступ к конфигурации Tailwind в CSS:

```css
body {
  background-color: theme('colors.background');
}
```

## Code Idioms

### Non-null Assertion

Используется для DOM элементов, которые гарантированно существуют:

```typescript
document.getElementById('root')!; // root элемент всегда есть в index.html
```

### Tailwind Class Composition

Композиция utility классов для сложных стилей:

```typescript
className = 'flex min-h-screen items-center justify-center';
```

### ES Module Exports

Все файлы используют ES modules (import/export):

```typescript
import { something } from './module';
export default Component;
```

## Annotations

### TypeScript Type Annotations

Явные типы для конфигураций:

```javascript
/** @type {import('tailwindcss').Config} */
```

### ESLint Disable Comments

Используются только с обоснованием (согласно правилам):

```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// Причина: legacy API требует any
```

### Vite Config Comments

Ссылки на документацию:

```typescript
// https://vite.dev/config/
export default defineConfig({...});
```

## Best Practices Summary

1. **TypeScript First**: Все новые файлы должны быть .ts/.tsx
2. **Functional Components**: Только функциональные компоненты, никаких классов
3. **Tailwind Utilities**: Используй utility классы вместо custom CSS
4. **ES Modules**: import/export вместо require/module.exports
5. **Strict Mode**: Всегда оборачивай приложение в StrictMode
6. **Path Aliases**: Используй '@' для импортов из src/
7. **Default Exports**: Компоненты экспортируются как default
8. **Russian Comments**: Все комментарии только на русском
9. **Flat Config**: ESLint использует новый flat config формат
10. **Vite Optimization**: Используй Vite возможности (HMR, fast refresh)
