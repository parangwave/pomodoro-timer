import { useEffect, useRef, useState } from "react";
import { start } from "repl";

const A_MINUTE = 60 * 1000 * 1;
const MAX_MINUTES = 25;
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

    }
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
