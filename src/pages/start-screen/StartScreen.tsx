import { useNavigate } from 'react-router-dom';

/**
 * Стартовый экран игры
 */
function StartScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-8 text-6xl font-bold text-primary">
          Cyber Security Detective
        </h1>
        <p className="mb-8 text-xl text-dark">
          Интерактивная обучающая игра для поиска угроз кибербезопасности
        </p>
        <button
          onClick={() => navigate('/missions')}
          className="rounded-lg bg-primary px-8 py-4 text-xl font-semibold text-white transition-colors hover:bg-secondary"
        >
          Начать игру
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
