import { StoreProvider, RouterProvider } from './app/providers';

/**
 * Корневой компонент приложения
 */
function App() {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
}

export default App;
