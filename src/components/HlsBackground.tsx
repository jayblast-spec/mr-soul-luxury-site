"use client";

import Hls from "hls.js";
import { useEffect, useRef } from "react";

const SOURCE = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export function HlsBackground({ flipped = false, source = SOURCE }: { flipped?: boolean; source?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMp4 = source.endsWith(".mp4");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isMp4) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(source);
      hls.attachMedia(video);
      return () => hls.destroy();
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
    }
  }, [isMp4, source]);

  return (
    <video
      ref={videoRef}
      src={isMp4 ? source : undefined}
      className={`absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover ${flipped ? "scale-y-[-1]" : ""}`}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
    />
  );
}
