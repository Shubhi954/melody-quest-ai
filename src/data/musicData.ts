import { Artist, Song } from "@/types/music";

// NOTE: These are placeholder audio URLs. Replace with actual audio files.
// You can add your own audio files to the public folder and reference them here.
// Or use free audio from: https://freemusicarchive.org/ or https://soundcloud.com/
const SAMPLE_AUDIO = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export const artists: Artist[] = [
  {
    id: "1",
    name: "Taylor Swift",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    genres: ["Pop", "Country"],
    followers: "92.3M"
  },
  {
    id: "2",
    name: "The Weeknd",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    genres: ["R&B", "Pop"],
    followers: "85.7M"
  },
  {
    id: "3",
    name: "Bad Bunny",
    imageUrl: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b4?w=400",
    genres: ["Reggaeton", "Latin"],
    followers: "78.2M"
  },
  {
    id: "4",
    name: "Ed Sheeran",
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400",
    genres: ["Pop", "Folk"],
    followers: "76.9M"
  },
  {
    id: "5",
    name: "Ariana Grande",
    imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
    genres: ["Pop", "R&B"],
    followers: "74.5M"
  },
  {
    id: "6",
    name: "Drake",
    imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400",
    genres: ["Hip Hop", "R&B"],
    followers: "73.1M"
  },
  {
    id: "7",
    name: "Billie Eilish",
    imageUrl: "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?w=400",
    genres: ["Alternative", "Pop"],
    followers: "68.8M"
  },
  {
    id: "8",
    name: "Justin Bieber",
    imageUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400",
    genres: ["Pop", "R&B"],
    followers: "67.4M"
  },
  {
    id: "9",
    name: "Dua Lipa",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400",
    genres: ["Pop", "Dance"],
    followers: "65.2M"
  },
  {
    id: "10",
    name: "Post Malone",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    genres: ["Hip Hop", "Pop"],
    followers: "62.7M"
  }
];

export const songs: Song[] = [
  // Taylor Swift
  { id: "ts1", title: "Anti-Hero", artist: "Taylor Swift", artistId: "1", duration: 200, coverUrl: artists[0].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Midnights" },
  { id: "ts2", title: "Shake It Off", artist: "Taylor Swift", artistId: "1", duration: 219, coverUrl: artists[0].imageUrl, audioUrl: SAMPLE_AUDIO, album: "1989" },
  { id: "ts3", title: "Blank Space", artist: "Taylor Swift", artistId: "1", duration: 231, coverUrl: artists[0].imageUrl, audioUrl: SAMPLE_AUDIO, album: "1989" },
  { id: "ts4", title: "Love Story", artist: "Taylor Swift", artistId: "1", duration: 235, coverUrl: artists[0].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Fearless" },
  { id: "ts5", title: "Cruel Summer", artist: "Taylor Swift", artistId: "1", duration: 178, coverUrl: artists[0].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Lover" },

  // The Weeknd
  { id: "tw1", title: "Blinding Lights", artist: "The Weeknd", artistId: "2", duration: 200, coverUrl: artists[1].imageUrl, audioUrl: SAMPLE_AUDIO, album: "After Hours" },
  { id: "tw2", title: "Starboy", artist: "The Weeknd", artistId: "2", duration: 230, coverUrl: artists[1].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Starboy" },
  { id: "tw3", title: "Save Your Tears", artist: "The Weeknd", artistId: "2", duration: 215, coverUrl: artists[1].imageUrl, audioUrl: SAMPLE_AUDIO, album: "After Hours" },
  { id: "tw4", title: "The Hills", artist: "The Weeknd", artistId: "2", duration: 242, coverUrl: artists[1].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Beauty Behind the Madness" },
  { id: "tw5", title: "Can't Feel My Face", artist: "The Weeknd", artistId: "2", duration: 213, coverUrl: artists[1].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Beauty Behind the Madness" },

  // Bad Bunny
  { id: "bb1", title: "Tití Me Preguntó", artist: "Bad Bunny", artistId: "3", duration: 254, coverUrl: artists[2].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Un Verano Sin Ti" },
  { id: "bb2", title: "Moscow Mule", artist: "Bad Bunny", artistId: "3", duration: 243, coverUrl: artists[2].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Un Verano Sin Ti" },
  { id: "bb3", title: "Callaita", artist: "Bad Bunny", artistId: "3", duration: 250, coverUrl: artists[2].imageUrl, audioUrl: SAMPLE_AUDIO, album: "YHLQMDLG" },
  { id: "bb4", title: "Dákiti", artist: "Bad Bunny", artistId: "3", duration: 205, coverUrl: artists[2].imageUrl, audioUrl: SAMPLE_AUDIO, album: "El Último Tour Del Mundo" },
  { id: "bb5", title: "Safaera", artist: "Bad Bunny", artistId: "3", duration: 295, coverUrl: artists[2].imageUrl, audioUrl: SAMPLE_AUDIO, album: "YHLQMDLG" },

  // Ed Sheeran
  { id: "es1", title: "Shape of You", artist: "Ed Sheeran", artistId: "4", duration: 233, coverUrl: artists[3].imageUrl, audioUrl: SAMPLE_AUDIO, album: "÷" },
  { id: "es2", title: "Perfect", artist: "Ed Sheeran", artistId: "4", duration: 263, coverUrl: artists[3].imageUrl, audioUrl: SAMPLE_AUDIO, album: "÷" },
  { id: "es3", title: "Thinking Out Loud", artist: "Ed Sheeran", artistId: "4", duration: 281, coverUrl: artists[3].imageUrl, audioUrl: SAMPLE_AUDIO, album: "x" },
  { id: "es4", title: "Photograph", artist: "Ed Sheeran", artistId: "4", duration: 258, coverUrl: artists[3].imageUrl, audioUrl: SAMPLE_AUDIO, album: "x" },
  { id: "es5", title: "Bad Habits", artist: "Ed Sheeran", artistId: "4", duration: 231, coverUrl: artists[3].imageUrl, audioUrl: SAMPLE_AUDIO, album: "=" },

  // Ariana Grande
  { id: "ag1", title: "7 rings", artist: "Ariana Grande", artistId: "5", duration: 178, coverUrl: artists[4].imageUrl, audioUrl: SAMPLE_AUDIO, album: "thank u, next" },
  { id: "ag2", title: "thank u, next", artist: "Ariana Grande", artistId: "5", duration: 207, coverUrl: artists[4].imageUrl, audioUrl: SAMPLE_AUDIO, album: "thank u, next" },
  { id: "ag3", title: "positions", artist: "Ariana Grande", artistId: "5", duration: 172, coverUrl: artists[4].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Positions" },
  { id: "ag4", title: "Into You", artist: "Ariana Grande", artistId: "5", duration: 244, coverUrl: artists[4].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Dangerous Woman" },
  { id: "ag5", title: "God is a woman", artist: "Ariana Grande", artistId: "5", duration: 197, coverUrl: artists[4].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Sweetener" },

  // Drake
  { id: "dr1", title: "God's Plan", artist: "Drake", artistId: "6", duration: 198, coverUrl: artists[5].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Scorpion" },
  { id: "dr2", title: "One Dance", artist: "Drake", artistId: "6", duration: 173, coverUrl: artists[5].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Views" },
  { id: "dr3", title: "In My Feelings", artist: "Drake", artistId: "6", duration: 217, coverUrl: artists[5].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Scorpion" },
  { id: "dr4", title: "Hotline Bling", artist: "Drake", artistId: "6", duration: 267, coverUrl: artists[5].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Views" },
  { id: "dr5", title: "Started From the Bottom", artist: "Drake", artistId: "6", duration: 174, coverUrl: artists[5].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Nothing Was the Same" },

  // Billie Eilish
  { id: "be1", title: "bad guy", artist: "Billie Eilish", artistId: "7", duration: 194, coverUrl: artists[6].imageUrl, audioUrl: SAMPLE_AUDIO, album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?" },
  { id: "be2", title: "everything i wanted", artist: "Billie Eilish", artistId: "7", duration: 245, coverUrl: artists[6].imageUrl, audioUrl: SAMPLE_AUDIO, album: "everything i wanted" },
  { id: "be3", title: "Happier Than Ever", artist: "Billie Eilish", artistId: "7", duration: 298, coverUrl: artists[6].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Happier Than Ever" },
  { id: "be4", title: "ocean eyes", artist: "Billie Eilish", artistId: "7", duration: 200, coverUrl: artists[6].imageUrl, audioUrl: SAMPLE_AUDIO, album: "dont smile at me" },
  { id: "be5", title: "when the party's over", artist: "Billie Eilish", artistId: "7", duration: 196, coverUrl: artists[6].imageUrl, audioUrl: SAMPLE_AUDIO, album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?" },

  // Justin Bieber
  { id: "jb1", title: "Peaches", artist: "Justin Bieber", artistId: "8", duration: 198, coverUrl: artists[7].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Justice" },
  { id: "jb2", title: "Sorry", artist: "Justin Bieber", artistId: "8", duration: 200, coverUrl: artists[7].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Purpose" },
  { id: "jb3", title: "Love Yourself", artist: "Justin Bieber", artistId: "8", duration: 233, coverUrl: artists[7].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Purpose" },
  { id: "jb4", title: "Intentions", artist: "Justin Bieber", artistId: "8", duration: 213, coverUrl: artists[7].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Changes" },
  { id: "jb5", title: "Stay", artist: "Justin Bieber", artistId: "8", duration: 141, coverUrl: artists[7].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Justice" },

  // Dua Lipa
  { id: "dl1", title: "Levitating", artist: "Dua Lipa", artistId: "9", duration: 203, coverUrl: artists[8].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Future Nostalgia" },
  { id: "dl2", title: "Don't Start Now", artist: "Dua Lipa", artistId: "9", duration: 183, coverUrl: artists[8].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Future Nostalgia" },
  { id: "dl3", title: "New Rules", artist: "Dua Lipa", artistId: "9", duration: 209, coverUrl: artists[8].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Dua Lipa" },
  { id: "dl4", title: "Physical", artist: "Dua Lipa", artistId: "9", duration: 193, coverUrl: artists[8].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Future Nostalgia" },
  { id: "dl5", title: "One Kiss", artist: "Dua Lipa", artistId: "9", duration: 214, coverUrl: artists[8].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Dua Lipa" },

  // Post Malone
  { id: "pm1", title: "Circles", artist: "Post Malone", artistId: "10", duration: 215, coverUrl: artists[9].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Hollywood's Bleeding" },
  { id: "pm2", title: "Sunflower", artist: "Post Malone", artistId: "10", duration: 158, coverUrl: artists[9].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Hollywood's Bleeding" },
  { id: "pm3", title: "rockstar", artist: "Post Malone", artistId: "10", duration: 218, coverUrl: artists[9].imageUrl, audioUrl: SAMPLE_AUDIO, album: "beerbongs & bentleys" },
  { id: "pm4", title: "Congratulations", artist: "Post Malone", artistId: "10", duration: 220, coverUrl: artists[9].imageUrl, audioUrl: SAMPLE_AUDIO, album: "Stoney" },
  { id: "pm5", title: "Better Now", artist: "Post Malone", artistId: "10", duration: 231, coverUrl: artists[9].imageUrl, audioUrl: SAMPLE_AUDIO, album: "beerbongs & bentleys" },
];
