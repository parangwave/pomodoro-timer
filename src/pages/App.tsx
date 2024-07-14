import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  timerState,
  isPlayingState,
  roundsState,
  goalsState,
} from "../utils/atoms";

export default function App() {
  const handlePlayBtn = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setStartTime(Date.now() - elapsedTime);
    } else {
      setIsPlaying(false);
  const [time, setTime] = useRecoilState(timerState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
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
      setTime(1500); // reset to 25 minutes
    }
  }, [isPlaying, time, rounds, goals, setTime, setRounds, setGoals]);

  };

  return (
    <>
      <h1>Pomodoro</h1>
      <div>
        <span>00</span>
        <span>:</span>
        <span>00</span>
      </div>
      <button onClick={handlePlayBtn}>{isPlaying ? "PAUSE" : "PLAY"}</button>
      <section>
        <article>
          <span>{rounds}/4</span>
          <h5>ROUND</h5>
        </article>
        <article>
          <span>{goals}/12</span>
          <h5>GOAL</h5>
        </article>
      </section>
    </>
  );
}
