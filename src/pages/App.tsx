import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <h1>Pomodoro</h1>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "PAUSE" : "PLAY"}
      </button>
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
