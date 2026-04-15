# Линтеры и форматирование

## Обязательные проверки

Весь сгенерированный код должен проходить следующие проверки:

- **ESLint** - проверка JavaScript/TypeScript кода
- **Stylelint** - проверка CSS/SCSS стилей
- **TypeScript** - проверка типов
- **Prettier** - форматирование кода

## Запуск проверок

Перед коммитом всегда запускай:

```bash
npm run lint        # ESLint
npm run lint:style  # Stylelint
npm run type-check  # TypeScript
npm run format      # Prettier
```

## Автоматизация

- Используй **husky** для pre-commit хуков
- Используй **lint-staged** для проверки только измененных файлов
- Настрой автоматическое исправление при возможности

## Конфигурация package.json

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx --fix",
    "lint:style": "stylelint '**/*.{css,scss}' --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write ."
  }
}
```

## Правила

- Код должен проходить все проверки без ошибок
- Предупреждения (warnings) допустимы только в исключительных случаях
- Используй `// eslint-disable-next-line` только с комментарием-обоснованием
