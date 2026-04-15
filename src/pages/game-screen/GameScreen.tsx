import { useParams, useNavigate } from 'react-router-dom';

/**
 * Игровой экран
 */
function GameScreen() {
  const { missionId } = useParams<{ missionId: string }>();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold text-primary">Игровой экран</h1>
        <p className="mb-4 text-lg text-dark">Миссия: {missionId}</p>
        <button
          onClick={() => navigate('/results')}
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-secondary"
        >
          Завершить миссию
        </button>
      </div>
    </div>
  );
}

export default GameScreen;
