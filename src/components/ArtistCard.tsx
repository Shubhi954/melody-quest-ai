import { Artist } from "@/types/music";
import { Card } from "./ui/card";

interface ArtistCardProps {
  artist: Artist;
  onClick: () => void;
}

export const ArtistCard = ({ artist, onClick }: ArtistCardProps) => {
  return (
    <Card
      className="group cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300 hover:shadow-glow overflow-hidden"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <img
          src={artist.imageUrl}
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{artist.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{artist.genres.join(", ")}</p>
        <p className="text-xs text-muted-foreground">{artist.followers} followers</p>
      </div>
    </Card>
  );
};
