import { RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { router } from '@/app/routes';

/**
 * Провайдер маршрутизации с Suspense для lazy loading
 */
export function RouterProvider() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background">
          <div className="text-2xl font-semibold text-primary">Загрузка...</div>
        </div>
      }
    >
      <ReactRouterProvider router={router} />
    </Suspense>
  );
}
