import React from "react";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../utils/atoms";
import { Button } from "../utils/styledComps";

export function PauseIcon() {
  return (
    <svg
      data-slot="icon"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z"></path>
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg
      data-slot="icon"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></path>
    </svg>
  );
}

const btnVariants = {
  tap: { scale: 0.9 },
};

export default function PlayBtn() {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  return (
    <motion.div
      variants={btnVariants}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <Button>{isPlaying ? <PauseIcon /> : <PlayIcon />}</Button>
    </motion.div>
  );
}
