import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, Clock, Sparkles } from 'lucide-react';
import { trackEvent } from '../../services/analytics';

interface VideoExperiencePlayerProps {
  videoUrl?: string;
  thumbnailUrl: string;
  title: string;
  className?: string;
  isShort?: boolean;
}

export const VideoExperiencePlayer: React.FC<VideoExperiencePlayerProps> = ({
  videoUrl,
  thumbnailUrl,
  title,
  className = '',
  isShort = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(18); // Default 18s (strictly <= 30s)
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const fallbackVideo = '/videos/exp_santa_ana.mp4';
  const src = videoUrl || fallbackVideo;

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      if (hasEnded) {
        videoRef.current.currentTime = 0;
        setHasEnded(false);
      }
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          trackEvent('video_played', { title, isShort });
        })
        .catch((e) => {
          console.warn('Video play blocked or error', e);
        });
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleToggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div
      ref={containerRef}
      className={`relative rounded-2xl overflow-hidden bg-slate-950 group shadow-lg border border-neutral-200/80 ${
        isShort ? 'aspect-9/16 max-w-[280px]' : 'aspect-16/9 w-full'
      } ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={thumbnailUrl}
        preload="metadata"
        playsInline
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          if (videoRef.current?.duration && !isNaN(videoRef.current.duration)) {
            setDuration(videoRef.current.duration);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          setHasEnded(true);
        }}
        className="w-full h-full object-cover"
      />

      {/* Top badges: duration & quality */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/15 shadow-sm">
          <Clock className="w-3 h-3 text-[#20C5C7]" />
          <span>{Math.round(duration)}s (máx 30s)</span>
        </span>

        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-950/70 backdrop-blur-md text-[#20C5C7] text-[10.5px] font-bold border border-teal-400/30">
          <Sparkles className="w-3 h-3" />
          <span>HD Teaser GIA</span>
        </span>
      </div>

      {/* Dim overlay when not playing or when ended */}
      {!isPlaying && (
        <div
          onClick={handleTogglePlay}
          className="absolute inset-0 bg-slate-950/45 backdrop-blur-2xs flex flex-col items-center justify-center cursor-pointer transition-opacity z-10 group/overlay"
        >
          <div className="w-14 h-14 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-2xl group-hover/overlay:scale-110 transition-transform">
            {hasEnded ? (
              <RotateCcw className="w-6 h-6 stroke-[2.5]" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-0.5" />
            )}
          </div>
          <span className="text-xs font-bold text-white mt-3 px-3 py-1 bg-black/50 rounded-full backdrop-blur-md border border-white/10 shadow-sm">
            {hasEnded ? 'Ver de nuevo (18s)' : 'Reproducir video (18s)'}
          </span>
          <span className="text-[10px] text-teal-200/90 mt-1 font-mono">
            Duración corta · Menos de 30 segundos
          </span>
        </div>
      )}

      {/* Controls Bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 text-white text-xs z-20">
          {/* Progress bar slider */}
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={0}
              max={duration || 18}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#20C5C7]"
            />
            <span className="text-[10px] font-mono tabular-nums text-slate-300 whitespace-nowrap">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleTogglePlay}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <span className="text-[11px] font-medium text-slate-200 truncate max-w-[200px]">
                {title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleToggleMute}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1 cursor-pointer"
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                title={isMuted ? 'Activar audio ambiental' : 'Silenciar'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-amber-300" />
                ) : (
                  <Volume2 className="w-4 h-4 text-teal-300" />
                )}
                <span className="text-[10px] hidden sm:inline text-slate-300">
                  {isMuted ? 'Activar sonido' : 'Audio ON'}
                </span>
              </button>

              <button
                type="button"
                onClick={handleToggleFullscreen}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Pantalla completa"
                title="Pantalla completa"
              >
                <Maximize2 className="w-4 h-4 text-slate-300 hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
