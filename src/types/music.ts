export interface Song {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  duration: number;
  coverUrl: string;
  audioUrl: string;
  album?: string;
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  genres: string[];
  followers: string;
}

export interface Playlist {
  id: string;
  name: string;
  songs: Song[];
  coverUrl?: string;
  createdAt: Date;
}
