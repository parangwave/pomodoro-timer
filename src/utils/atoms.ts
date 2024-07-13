import { atom } from "recoil";

export const timerState = atom({
  key: "timerState",
  default: 1500, // 25 min in sec
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});

export const roundsState = atom({
  key: "roundsState",
  default: 0,
});

export const goalsState = atom({
  key: "goalsState",
  default: 0,
});
