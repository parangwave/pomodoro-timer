import { useEffect, useRef, useState } from "react";
import { start } from "repl";

const A_MINUTE = 60 * 1000 * 1;
const MAX_MINUTES = 25;

export default function App() {
  const timeRef = useRef<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [rounds, setRounds] = useState<number>(0);
  const [goals, setGoals] = useState<number>(0);

  return (
    <>
      <h1>Pomodoro</h1>
    </>
  );
}
