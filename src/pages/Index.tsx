import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Player } from "@/components/Player";
import { ArtistCard } from "@/components/ArtistCard";
import { SongRow } from "@/components/SongRow";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Search, Sparkles } from "lucide-react";
import { artists, songs } from "@/data/musicData";
import { Artist, Song, Playlist } from "@/types/music";
import { toast } from "sonner";

const Index = () => {
  const [currentView, setCurrentView] = useState("home");
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState<Song[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
  const [isCreatePlaylistOpen, setIsCreatePlaylistOpen] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [recommendations, setRecommendations] = useState<Song[]>([]);

  // Load playlists from localStorage
  useEffect(() => {
    const savedPlaylists = localStorage.getItem("playlists");
    if (savedPlaylists) {
      setPlaylists(JSON.parse(savedPlaylists));
    }
  }, []);

  // Save playlists to localStorage
  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  const playSong = (song: Song, songQueue?: Song[]) => {
    setCurrentSong(song);
    setIsPlaying(true);
    if (songQueue) {
      setQueue(songQueue);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (queue.length > 0) {
      const currentIndex = queue.findIndex((s) => s.id === currentSong?.id);
      const nextSong = queue[(currentIndex + 1) % queue.length];
      setCurrentSong(nextSong);
      setIsPlaying(true);
    }
  };

  const handlePrevious = () => {
    if (queue.length > 0) {
      const currentIndex = queue.findIndex((s) => s.id === currentSong?.id);
      const prevSong = queue[(currentIndex - 1 + queue.length) % queue.length];
      setCurrentSong(prevSong);
      setIsPlaying(true);
    }
  };

  const createPlaylist = () => {
    if (!newPlaylistName.trim()) {
      toast.error("Please enter a playlist name");
      return;
    }

    const newPlaylist: Playlist = {
      id: Date.now().toString(),
      name: newPlaylistName,
      songs: [],
      createdAt: new Date(),
    };

    setPlaylists([...playlists, newPlaylist]);
    setNewPlaylistName("");
    setIsCreatePlaylistOpen(false);
    toast.success(`Playlist "${newPlaylistName}" created!`);
  };

  const addToPlaylist = (playlistId: string, song: Song) => {
    setPlaylists(
      playlists.map((p) => {
        if (p.id === playlistId) {
          if (p.songs.find((s) => s.id === song.id)) {
            toast.error("Song already in playlist");
            return p;
          }
          toast.success(`Added "${song.title}" to ${p.name}`);
          return { ...p, songs: [...p.songs, song] };
        }
        return p;
      })
    );
  };

  const getRecommendations = () => {
    if (!currentSong) {
      toast.error("Play a song first to get recommendations!");
      return;
    }

    // Simple recommendation logic based on same artist
    const artistSongs = songs.filter(
      (s) => s.artistId === currentSong.artistId && s.id !== currentSong.id
    );
    
    // Add some random songs from other artists
    const otherSongs = songs
      .filter((s) => s.artistId !== currentSong.artistId)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    setRecommendations([...artistSongs, ...otherSongs].slice(0, 5));
    setCurrentView("recommendations");
    toast.success("Generated recommendations based on your current song!");
  };

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gradient-bg overflow-hidden">
      <Sidebar
        onNavigate={setCurrentView}
        currentView={currentView}
        onCreatePlaylist={() => setIsCreatePlaylistOpen(true)}
        playlists={playlists}
        onSelectPlaylist={(id) => {
          const playlist = playlists.find((p) => p.id === id);
          if (playlist) {
            setSelectedPlaylist(playlist);
            setCurrentView("playlist");
          }
        }}
      />

      <main className="flex-1 overflow-auto pb-32">
        <div className="p-8">
          {/* Search Bar */}
          {currentView === "search" && (
            <div className="mb-8">
              <div className="relative max-w-2xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for songs, artists..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-card/50 backdrop-blur-sm border-border/50"
                />
              </div>
            </div>
          )}

          {/* Home View */}
          {currentView === "home" && (
            <>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold">Featured Artists</h2>
                  <Button
                    variant="outline"
                    onClick={getRecommendations}
                    className="gap-2"
                  >
                    <Sparkles className="h-4 w-4" />
                    Get Recommendations
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {artists.slice(0, 5).map((artist) => (
                    <ArtistCard
                      key={artist.id}
                      artist={artist}
                      onClick={() => {
                        setSelectedArtist(artist);
                        setCurrentView("artist");
                      }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Popular Songs</h2>
                <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4">
                  {songs.slice(0, 10).map((song, index) => (
                    <SongRow
                      key={song.id}
                      song={song}
                      index={index}
                      isPlaying={currentSong?.id === song.id && isPlaying}
                      onPlay={() => playSong(song, songs)}
                      onAddToPlaylist={() => {
                        if (playlists.length === 0) {
                          toast.error("Create a playlist first!");
                          return;
                        }
                        addToPlaylist(playlists[0].id, song);
                      }}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Artists View */}
          {currentView === "artists" && (
            <>
              <h2 className="text-3xl font-bold mb-6">All Artists</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {artists.map((artist) => (
                  <ArtistCard
                    key={artist.id}
                    artist={artist}
                    onClick={() => {
                      setSelectedArtist(artist);
                      setCurrentView("artist");
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {/* Artist Detail View */}
          {currentView === "artist" && selectedArtist && (
            <>
              <div className="mb-8">
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <img
                    src={selectedArtist.imageUrl}
                    alt={selectedArtist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h1 className="text-5xl font-bold mb-2">{selectedArtist.name}</h1>
                    <p className="text-lg text-muted-foreground">
                      {selectedArtist.followers} followers
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Popular Tracks</h2>
                <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4">
                  {songs
                    .filter((s) => s.artistId === selectedArtist.id)
                    .map((song, index) => (
                      <SongRow
                        key={song.id}
                        song={song}
                        index={index}
                        isPlaying={currentSong?.id === song.id && isPlaying}
                        onPlay={() =>
                          playSong(
                            song,
                            songs.filter((s) => s.artistId === selectedArtist.id)
                          )
                        }
                        onAddToPlaylist={() => {
                          if (playlists.length === 0) {
                            toast.error("Create a playlist first!");
                            return;
                          }
                          addToPlaylist(playlists[0].id, song);
                        }}
                      />
                    ))}
                </div>
              </div>
            </>
          )}

          {/* Search Results */}
          {currentView === "search" && searchQuery && (
            <>
              {filteredArtists.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Artists</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {filteredArtists.map((artist) => (
                      <ArtistCard
                        key={artist.id}
                        artist={artist}
                        onClick={() => {
                          setSelectedArtist(artist);
                          setCurrentView("artist");
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {filteredSongs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Songs</h2>
                  <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4">
                    {filteredSongs.map((song, index) => (
                      <SongRow
                        key={song.id}
                        song={song}
                        index={index}
                        isPlaying={currentSong?.id === song.id && isPlaying}
                        onPlay={() => playSong(song, filteredSongs)}
                        onAddToPlaylist={() => {
                          if (playlists.length === 0) {
                            toast.error("Create a playlist first!");
                            return;
                          }
                          addToPlaylist(playlists[0].id, song);
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {filteredArtists.length === 0 && filteredSongs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-muted-foreground">No results found</p>
                </div>
              )}
            </>
          )}

          {/* Playlist View */}
          {currentView === "playlist" && selectedPlaylist && (
            <>
              <h2 className="text-3xl font-bold mb-6">{selectedPlaylist.name}</h2>
              {selectedPlaylist.songs.length === 0 ? (
                <div className="text-center py-12 bg-card/30 rounded-lg">
                  <p className="text-xl text-muted-foreground">No songs in this playlist yet</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setCurrentView("search")}
                  >
                    Browse Songs
                  </Button>
                </div>
              ) : (
                <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4">
                  {selectedPlaylist.songs.map((song, index) => (
                    <SongRow
                      key={song.id}
                      song={song}
                      index={index}
                      isPlaying={currentSong?.id === song.id && isPlaying}
                      onPlay={() => playSong(song, selectedPlaylist.songs)}
                    />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Recommendations View */}
          {currentView === "recommendations" && (
            <>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Recommended For You</h2>
              </div>
              {recommendations.length > 0 ? (
                <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4">
                  {recommendations.map((song, index) => (
                    <SongRow
                      key={song.id}
                      song={song}
                      index={index}
                      isPlaying={currentSong?.id === song.id && isPlaying}
                      onPlay={() => playSong(song, recommendations)}
                      onAddToPlaylist={() => {
                        if (playlists.length === 0) {
                          toast.error("Create a playlist first!");
                          return;
                        }
                        addToPlaylist(playlists[0].id, song);
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-card/30 rounded-lg">
                  <p className="text-xl text-muted-foreground">
                    Play a song to get personalized recommendations!
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrevious={handlePrevious}
        queue={queue}
      />

      {/* Create Playlist Dialog */}
      <Dialog open={isCreatePlaylistOpen} onOpenChange={setIsCreatePlaylistOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Playlist</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="My Awesome Playlist"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && createPlaylist()}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreatePlaylistOpen(false)}>
              Cancel
            </Button>
            <Button onClick={createPlaylist}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
