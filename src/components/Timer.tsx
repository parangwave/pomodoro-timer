import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  timerState,
  isPlayingState,
  roundsState,
  goalsState,
  MAX_MINUTES,
} from "../utils/atoms";
import {
  StatusContainer,
  StatusBox,
  StatusHeader,
  StatusContent,
} from "../utils/styledComps";


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
      if (rounds < 3) {
        setRounds(rounds + 1);
      } else {
        setGoals(goals + 1);
        setRounds(0);
      }
      setTime(MAX_MINUTES); // reset to 25 minutes
    }
  }, [isPlaying, time, rounds, goals, setTime, setRounds, setGoals]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <StatusContainer>
        <StatusBox>
          <StatusContent>
            {rounds}/{4}
          </StatusContent>
          <StatusHeader>ROUND</StatusHeader>
        </StatusBox>
        <StatusBox>
          <StatusContent>
            {goals}/{12}
          </StatusContent>
          <StatusHeader>GOAL</StatusHeader>
        </StatusBox>
      </StatusContainer>
    </div>
  );
}
