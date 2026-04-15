import { useNavigate } from 'react-router-dom';

/**
 * Экран результатов
 */
function ResultsScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold text-primary">Результаты</h1>
        <p className="mb-8 text-lg text-dark">Миссия завершена!</p>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/missions')}
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-secondary"
          >
            Выбрать миссию
          </button>
          <button
            onClick={() => navigate('/')}
            className="rounded-lg bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-dark"
          >
            На главную
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultsScreen;
