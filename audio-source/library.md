---
---

# Library

Berry Audio includes a built-in library manager for playing and organizing music stored locally. Tracks are organized automatically using the metadata embedded in your files.

### Features

- Full ID3 tag and embedded cover art support across many file formats
- Scan and index music from multiple storage locations
- Automatic artist information download from [TheAudioDB](https://www.theaudiodb.com/)
- Browse by **Artist**, **Album**, **Genre** and **Tracks**
- Add artists or albums directly to playlists or the queue
- Smooth, infinite query-based scrolling for large libraries
- Collections: **Recently Played**, **Top 100** and **Favourites**
- Alphabetical filtering for quick navigation
- Fast search by artist, album and track
- Detailed audio codec, sample rate and bit-depth information

### Supported Formats

MP3, M4A, MP4, AAC, FLAC, OGG, OPUS, WMA, WAV and DSF

> **Note:** DSF playback requires a supported DAC.

## Adding Music

There are two ways to get music onto your Berry Audio device.

### Option 1: Copy to the SD card

Copy your music into the following folder on the SD card:

```
/home/pi/Internal
```

### Option 2: Copy over the network

The `Internal` folder is shared on your network by default, so you can open it from another computer and copy files into it.

> **Note:** Copying over the network can be slower than copying directly to the SD card.

## Setting Up Your Library

### 1. Add folders to the library

1. Go to **Home > Storage > Internal**.
2. Choose a folder.
3. Open the **Actions** menu (`...`) and select **Add to Library**.

Repeat this for every folder you want Berry Audio to scan.

### 2. Scan your music

Go to **Settings > Library** and click the **Scan** button in the top right.

### 3. Fetch artist information

Go to **Settings > Library** and click **Get Artist Information** in the top right. Berryaudio will start downloading all the Artist details from TheAudioDB.
