import React from "react";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../utils/atoms";

export default function PlayBtn() {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  return (
    <button onClick={() => setIsPlaying(!isPlaying)}>
      {isPlaying ? "PAUSE" : "PLAY"}
    </button>
  );
}
