import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, RefreshCw, Trophy, Timer, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Number Guessing Game
const NumberGuessingGame = () => {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('Please enter a valid number between 1 and 100');
      return;
    }

    setAttempts(prev => prev + 1);

    if (num === target) {
      setMessage(`🎉 Correct! You got it in ${attempts + 1} attempts!`);
      setGameOver(true);
    } else if (num < target) {
      setMessage('📈 Too low! Try higher.');
    } else {
      setMessage('📉 Too high! Try lower.');
    }
    setGuess('');
  };

  const resetGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('Guess a number between 1 and 100');
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-muted-foreground">{message}</p>
      <div className="flex gap-2">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !gameOver && handleGuess()}
          disabled={gameOver}
          className="flex-1 px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
          placeholder="Enter your guess..."
        />
        {!gameOver ? (
          <Button onClick={handleGuess} className="bg-primary text-primary-foreground">
            Guess
          </Button>
        ) : (
          <Button onClick={resetGame} variant="outline">
            <RefreshCw className="w-4 h-4" />
          </Button>
        )}
      </div>
      <p className="text-center text-sm text-muted-foreground">Attempts: {attempts}</p>
    </div>
  );
};

// Tic Tac Toe
const TicTacToe = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const isDraw = !winner && board.every(cell => cell !== null);

  return (
    <div className="space-y-4">
      <div className="text-center">
        {winner ? (
          <p className="text-primary font-bold">🎉 {winner} wins!</p>
        ) : isDraw ? (
          <p className="text-muted-foreground">It's a draw!</p>
        ) : (
          <p className="text-muted-foreground">Next: {isXNext ? 'X' : 'O'}</p>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-2 w-fit mx-auto">
        {board.map((cell, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: cell ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(i)}
            className={`w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold transition-colors ${
              cell ? 'bg-primary/20' : 'bg-secondary hover:bg-secondary/80'
            } ${cell === 'X' ? 'text-primary' : 'text-accent'}`}
          >
            {cell}
          </motion.button>
        ))}
      </div>
      
      {(winner || isDraw) && (
        <div className="text-center">
          <Button onClick={resetGame} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
};

// Reaction Time Game
const ReactionTimeGame = () => {
  const [gameState, setGameState] = useState<'waiting' | 'ready' | 'go' | 'result' | 'early'>('waiting');
  const [startTime, setStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(0);
  const [bestTime, setBestTime] = useState<number | null>(null);

  const startGame = () => {
    setGameState('ready');
    const delay = Math.random() * 4000 + 1000; // 1-5 seconds
    
    setTimeout(() => {
      setGameState('go');
      setStartTime(Date.now());
    }, delay);
  };

  const handleClick = () => {
    if (gameState === 'waiting') {
      startGame();
    } else if (gameState === 'ready') {
      setGameState('early');
    } else if (gameState === 'go') {
      const time = Date.now() - startTime;
      setReactionTime(time);
      setGameState('result');
      if (!bestTime || time < bestTime) {
        setBestTime(time);
      }
    } else if (gameState === 'result' || gameState === 'early') {
      setGameState('waiting');
    }
  };

  const getBackgroundColor = () => {
    switch (gameState) {
      case 'ready': return 'bg-destructive/20';
      case 'go': return 'bg-green-500/20';
      case 'early': return 'bg-destructive/30';
      case 'result': return 'bg-primary/20';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="space-y-4">
      <motion.button
        onClick={handleClick}
        className={`w-full h-32 rounded-xl ${getBackgroundColor()} transition-colors flex items-center justify-center`}
        whileTap={{ scale: 0.98 }}
      >
        <div className="text-center">
          {gameState === 'waiting' && (
            <p className="text-muted-foreground">Click to start</p>
          )}
          {gameState === 'ready' && (
            <p className="text-destructive font-medium">Wait for green...</p>
          )}
          {gameState === 'go' && (
            <p className="text-green-500 font-bold text-xl">CLICK NOW!</p>
          )}
          {gameState === 'early' && (
            <p className="text-destructive">Too early! Click to retry</p>
          )}
          {gameState === 'result' && (
            <div>
              <p className="text-2xl font-bold gradient-text">{reactionTime}ms</p>
              <p className="text-sm text-muted-foreground">Click to try again</p>
            </div>
          )}
        </div>
      </motion.button>
      
      {bestTime && (
        <p className="text-center text-sm text-muted-foreground">
          <Trophy className="w-4 h-4 inline mr-1 text-yellow-500" />
          Best: {bestTime}ms
        </p>
      )}
    </div>
  );
};

interface Game {
  id: string;
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

const games: Game[] = [
  {
    id: 'guess',
    title: 'Number Guessing',
    icon: <Gamepad2 className="w-5 h-5" />,
    component: <NumberGuessingGame />,
  },
  {
    id: 'tictactoe',
    title: 'Tic Tac Toe',
    icon: <Grid3X3 className="w-5 h-5" />,
    component: <TicTacToe />,
  },
  {
    id: 'reaction',
    title: 'Reaction Time',
    icon: <Timer className="w-5 h-5" />,
    component: <ReactionTimeGame />,
  },
];

const GamesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeGame, setActiveGame] = useState(games[0].id);

  return (
    <section
      id="games"
      className="relative py-24 md:py-32 bg-secondary/30"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Have Some Fun
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Mini <span className="gradient-text">Games</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          {/* Game Tabs */}
          <div className="flex gap-2 mb-6">
            {games.map((game) => (
              <Button
                key={game.id}
                variant={activeGame === game.id ? 'default' : 'outline'}
                onClick={() => setActiveGame(game.id)}
                className={`flex-1 ${
                  activeGame === game.id
                    ? 'bg-primary text-primary-foreground'
                    : 'border-primary/30'
                }`}
              >
                {game.icon}
                <span className="ml-2 hidden sm:inline">{game.title}</span>
              </Button>
            ))}
          </div>

          {/* Game Container */}
          <div className="glass-card p-6 rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGame}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {games.find(g => g.id === activeGame)?.component}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GamesSection;
