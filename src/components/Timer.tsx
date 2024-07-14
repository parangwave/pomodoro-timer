import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
// atoms
import {
  timerState,
  isPlayingState,
  roundsState,
  goalsState,
  MAX_MINUTES,
} from "../utils/atoms";

// styled components
import {
  TimerContainer,
  TimerDisplayContainer,
  StatusContainer,
  StatusBox,
  StatusHeader,
  StatusContent,
  TimerDisplay,
} from "../styles/StyledComps";

// components
// play button
import PlayBtn from "./PlayBtn";

// constants
const MAX_ROUNDS = 4;
const MAX_GOALS = 12;

export default function Timer() {
  const [time, setTime] = useRecoilState(timerState);
  const isPlaying = useRecoilValue(isPlayingState);
  const [rounds, setRounds] = useRecoilState(roundsState);
  const [goals, setGoals] = useRecoilState(goalsState);

  useEffect(() => {
    // 재생중 && 시간 > 0
    if (isPlaying && time > 0) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    // 시간 === 0 (재생 멈춤 x)
    else if (time === 0) {
      if (rounds < MAX_ROUNDS - 1) {
        setRounds(rounds + 1);
      } else {
        setGoals(goals + 1);
        setRounds(0);
      }
      setTime(MAX_MINUTES); // reset to 25 minutes
    }
  }, [isPlaying, time, rounds, goals, setTime, setRounds, setGoals]);

  const formatMinutes = (time: number) => {
    const minutes = Math.floor(time / 60);
    return `${minutes.toString().padStart(2, "0")}`;
  };

  const formatSeconds = (time: number) => {
    const seconds = time % 60;
    return `${seconds.toString().padStart(2, "0")}`;
  };

  const timerVariants = {
    initial: {
      opacity: 0.5,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0.5,
      scale: 0.5,
    },
  };

  return (
    <TimerContainer>
      <h1>Pomodoro</h1>

      {/* timer clock */}
      <TimerDisplayContainer>
        <TimerDisplay
          key={formatMinutes(time)}
          variants={timerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {formatMinutes(time)}
        </TimerDisplay>
        <span>:</span>
        <TimerDisplay
          key={formatSeconds(time)}
          variants={timerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {formatSeconds(time)}
        </TimerDisplay>
      </TimerDisplayContainer>

      {/* play button */}
      <PlayBtn />

      {/* rounds & goals */}
      <StatusContainer>
        {/* rounds */}
        <StatusBox>
          <StatusContent>
            {rounds}/{MAX_ROUNDS}
          </StatusContent>
          <StatusHeader>ROUND</StatusHeader>
        </StatusBox>

        {/* goals */}
        <StatusBox>
          <StatusContent>
            {goals}/{MAX_GOALS}
          </StatusContent>
          <StatusHeader>GOAL</StatusHeader>
        </StatusBox>
      </StatusContainer>
    </TimerContainer>
  );
}
