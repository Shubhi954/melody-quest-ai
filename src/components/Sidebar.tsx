import { Home, Search, Music, ListMusic, Plus } from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  onNavigate: (view: string) => void;
  currentView: string;
  onCreatePlaylist: () => void;
  playlists: Array<{ id: string; name: string }>;
  onSelectPlaylist: (id: string) => void;
}

export const Sidebar = ({ onNavigate, currentView, onCreatePlaylist, playlists, onSelectPlaylist }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: "Home", view: "home" },
    { icon: Search, label: "Search", view: "search" },
    { icon: Music, label: "Artists", view: "artists" },
  ];

  return (
    <aside className="w-64 bg-card/50 backdrop-blur-xl border-r border-border/50 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          StreamWave
        </h1>
      </div>

      <nav className="flex-1 px-3">
        {menuItems.map((item) => (
          <Button
            key={item.view}
            variant="ghost"
            className={`w-full justify-start mb-1 ${
              currentView === item.view ? "bg-primary/10 text-primary" : "text-foreground/70"
            }`}
            onClick={() => onNavigate(item.view)}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Button>
        ))}

        <div className="mt-8">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm font-semibold text-foreground/70">Your Playlists</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-foreground/70 hover:text-primary"
              onClick={onCreatePlaylist}
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-1">
            {playlists.map((playlist) => (
              <Button
                key={playlist.id}
                variant="ghost"
                className="w-full justify-start text-foreground/70 hover:text-primary"
                onClick={() => onSelectPlaylist(playlist.id)}
              >
                <ListMusic className="mr-3 h-4 w-4" />
                {playlist.name}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
};
