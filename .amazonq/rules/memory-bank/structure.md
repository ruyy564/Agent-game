# Project Structure

## Architecture Pattern

Проект следует архитектуре **Feature-Sliced Design (FSD)** - методология организации кода по слоям и слайсам.

## Directory Structure

```
f:\прочее\пет проекты\game/
├── .amazonq/                    # Amazon Q правила и документация
│   └── rules/                   # Правила разработки
│       ├── memory-bank/         # Memory Bank документация
│       ├── best-practices.md    # SOLID, KISS, DRY, FSD принципы
│       ├── comments.md          # Комментарии только на русском
│       ├── deploy.md            # GitHub Pages деплой
│       ├── global-store.md      # Zustand стор через провайдер
│       ├── linter.md            # ESLint, Stylelint, Prettier
│       ├── react-guide.md       # React best practices
│       └── ui-ux.md             # shadcn/ui, цвета Сбера, pixel art
│
├── .husky/                      # Git hooks
│   └── pre-commit               # Автоматический запуск линтеров
│
├── public/                      # Статические ресурсы
│   ├── favicon.svg              # Иконка сайта
│   └── icons.svg                # SVG спрайт иконок
│
├── src/                         # Исходный код (FSD структура)
│   ├── app/                     # Инициализация приложения
│   │   ├── providers/           # React провайдеры (Router, Store)
│   │   ├── styles/              # Глобальные стили
│   │   └── index.tsx            # Точка входа приложения
│   │
│   ├── pages/                   # Страницы приложения
│   │   ├── start-screen/        # Стартовый экран с логотипом
│   │   ├── mission-select/      # Выбор миссии и уровня
│   │   ├── game-screen/         # Основной игровой экран
│   │   └── results-screen/      # Экран результатов
│   │
│   ├── widgets/                 # Крупные самостоятельные блоки
│   │   ├── monitor/             # Монитор с 3D эффектом
│   │   ├── keyboard/            # CSS/SVG клавиатура
│   │   ├── score-display/       # Очки, таймер, прогресс
│   │   └── game-tabs/           # Вкладки режимов игры
│   │
│   ├── features/                # Функциональные части (действия)
│   │   ├── email-analysis/      # Режим анализа email
│   │   ├── code-review/         # Режим поиска уязвимостей
│   │   ├── clickhouse-logs/     # Режим анализа логов
│   │   └── threat-detection/    # Общая логика обнаружения угроз
│   │
│   ├── entities/                # Бизнес-сущности
│   │   ├── level/               # Уровни сложности
│   │   ├── threat/              # Типы угроз
│   │   ├── mission/             # Миссии с данными
│   │   ├── achievement/         # Достижения
│   │   └── player/              # Игрок (очки, прогресс)
│   │
│   ├── shared/                  # Переиспользуемый код
│   │   ├── ui/                  # shadcn/ui компоненты
│   │   │   ├── button/          # Кнопки
│   │   │   ├── card/            # Карточки
│   │   │   ├── table/           # Таблицы
│   │   │   ├── tabs/            # Вкладки
│   │   │   ├── dialog/          # Модальные окна
│   │   │   └── progress/        # Прогресс-бары
│   │   ├── lib/                 # Утилиты и хелперы
│   │   │   ├── utils.ts         # Общие утилиты
│   │   │   └── cn.ts            # clsx + tailwind-merge
│   │   └── types/               # TypeScript типы
│   │       ├── threat.ts        # Типы угроз
│   │       ├── level.ts         # Типы уровней
│   │       └── game.ts          # Игровые типы
│   │
│   ├── assets/                  # Изображения и медиа
│   │   ├── hero.png             # Главное изображение
│   │   ├── react.svg            # React логотип
│   │   └── vite.svg             # Vite логотип
│   │
│   ├── App.tsx                  # Корневой компонент
│   ├── main.tsx                 # Точка входа React
│   └── index.css                # Глобальные стили + Tailwind
│
├── .gitignore                   # Git игнорируемые файлы
├── .prettierignore              # Prettier игнорируемые файлы
├── .prettierrc                  # Prettier конфигурация
├── .stylelintignore             # Stylelint игнорируемые файлы
├── .stylelintrc                 # Stylelint конфигурация
├── eslint.config.js             # ESLint конфигурация (flat config)
├── postcss.config.js            # PostCSS конфигурация
├── tailwind.config.js           # Tailwind CSS конфигурация
├── tsconfig.json                # TypeScript конфигурация (root)
├── tsconfig.app.json            # TypeScript для приложения
├── tsconfig.node.json           # TypeScript для Node.js
├── vite.config.ts               # Vite конфигурация
├── package.json                 # Зависимости и скрипты
├── package-lock.json            # Lockfile зависимостей
├── index.html                   # HTML точка входа
├── README.md                    # Документация проекта
├── GAME_CONCEPT.md              # Концепция игры
└── TASKS.md                     # План задач и этапы
```

## Core Components

### App Layer (app/)

Инициализация приложения, провайдеры, глобальные стили, роутинг. Здесь происходит настройка React Router и Zustand стора через провайдеры.

### Pages Layer (pages/)

Страницы приложения, соответствующие роутам:

- StartScreen - стартовый экран с логотипом
- MissionSelect - выбор миссии и уровня сложности
- GameScreen - основной игровой экран
- ResultsScreen - экран результатов с статистикой

### Widgets Layer (widgets/)

Крупные самостоятельные блоки UI:

- Monitor - рамка монитора с 3D эффектом
- Keyboard - CSS/SVG дизайн клавиатуры
- ScoreDisplay - отображение очков, таймера, прогресса
- GameTabs - вкладки для переключения режимов игры

### Features Layer (features/)

Функциональные части, реализующие действия пользователя:

- EmailAnalysisMode - анализ phishing писем
- CodeReviewMode - поиск уязвимостей в коде
- ClickHouseLogsMode - анализ логов с SQL запросами
- ThreatDetection - общая логика обнаружения угроз

### Entities Layer (entities/)

Бизнес-сущности приложения:

- Level - модель уровней сложности
- Threat - модель типов угроз
- Mission - модель миссий с данными
- Achievement - модель достижений
- Player - модель игрока (очки, прогресс)

### Shared Layer (shared/)

Переиспользуемый код:

- ui/ - shadcn/ui компоненты (Button, Card, Table, Tabs, Dialog, Progress)
- lib/ - утилиты и хелперы
- types/ - TypeScript типы и интерфейсы

## Architectural Patterns

### Feature-Sliced Design (FSD)

- Слои изолированы друг от друга
- Импорты только сверху вниз (app → pages → widgets → features → entities → shared)
- Каждый слайс имеет публичный API (index.ts)

### Component Structure

```
feature-name/
├── ui/                  # React компоненты
│   └── FeatureName.tsx
├── model/               # Бизнес-логика, стор
│   ├── store.ts
│   ├── types.ts
│   └── selectors.ts
├── lib/                 # Утилиты фичи
│   └── helpers.ts
└── index.ts             # Публичный API
```

### State Management

- Zustand для глобального стора (через провайдер в app/providers)
- useState для локального состояния компонентов
- React Router для URL параметров

## Key Relationships

### Game Flow

StartScreen → MissionSelect → GameScreen → ResultsScreen

### Game Modes

GameScreen содержит GameTabs, которые переключают между:

- EmailAnalysisMode
- CodeReviewMode
- ClickHouseLogsMode

### Data Flow

Player (entity) ← ThreatDetection (feature) → Threat (entity)
ScoreDisplay (widget) ← Player (entity)
