# Развертывание

## GitHub Pages

- Игра должна поддерживать развертывание через **GitHub Pages** (github.io)
- Используй Vite для сборки с правильным base path
- Настрой GitHub Actions для автоматического деплоя

## Конфигурация Vite

```ts
// vite.config.ts
export default defineConfig({
  base: '/repository-name/',
  build: {
    outDir: 'dist',
  },
});
```

## GitHub Actions

Создай `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Требования

- Все пути к ресурсам должны быть относительными
- Используй import для статических ресурсов
- Проверяй работу локально с `npm run preview`
