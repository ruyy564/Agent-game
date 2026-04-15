import { useNavigate } from 'react-router-dom';

/**
 * Экран выбора миссии
 */
function MissionSelect() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold text-primary">Выбор миссии</h1>
        <p className="mb-8 text-lg text-dark">
          Выберите миссию для начала игры
        </p>
        <button
          onClick={() => navigate('/game/test-mission')}
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-secondary"
        >
          Тестовая миссия
        </button>
      </div>
    </div>
  );
}

export default MissionSelect;
