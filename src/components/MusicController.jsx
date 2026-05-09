import React, { useEffect, useRef, useState } from "react";
import finaleMusic from "../assets/finale.mp3";

export default function MusicController() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.6;
    audio.loop = true;

    audio.play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        console.log("Autoplay blocked");
      });

    const enableAudio = () => {
      audio.play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {});

      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <>
      <audio ref={audioRef}>
        <source src={finaleMusic} type="audio/mp3" />
      </audio>

      <div className="fixed top-5 right-5 z-50 flex gap-3">
        <button
          onClick={togglePlay}
          className="bg-pink-200/80 px-4 py-3 rounded-full shadow-xl"
        >
          {playing ? "⏸" : "▶"}
        </button>

        <button
          onClick={toggleMute}
          className="bg-pink-200/80 px-4 py-3 rounded-full shadow-xl"
        >
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
    </>
  );
}