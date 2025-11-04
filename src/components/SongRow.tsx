import { Song } from "@/types/music";
import { Play, Plus } from "lucide-react";
import { Button } from "./ui/button";

interface SongRowProps {
  song: Song;
  index: number;
  isPlaying: boolean;
  onPlay: () => void;
  onAddToPlaylist?: () => void;
}

export const SongRow = ({ song, index, isPlaying, onPlay, onAddToPlaylist }: SongRowProps) => {
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="group grid grid-cols-[40px_1fr_1fr_80px_40px] gap-4 items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex items-center justify-center">
        {isPlaying ? (
          <div className="text-primary">♫</div>
        ) : (
          <span className="text-muted-foreground group-hover:hidden">{index + 1}</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hidden group-hover:flex"
          onClick={onPlay}
        >
          <Play className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-3 min-w-0">
        <img
          src={song.coverUrl}
          alt={song.title}
          className="w-10 h-10 rounded object-cover"
        />
        <div className="min-w-0">
          <p className="font-medium truncate">{song.title}</p>
          <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
        </div>
      </div>

      <div className="text-sm text-muted-foreground truncate">
        {song.album || "Single"}
      </div>

      <div className="text-sm text-muted-foreground">
        {formatDuration(song.duration)}
      </div>

      {onAddToPlaylist && (
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 opacity-0 group-hover:opacity-100"
          onClick={onAddToPlaylist}
        >
          <Plus className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};
