# Introduction

Berryaudio is a DIY, open-source audiophile music player and streamer for Raspberry Pi, built for pure music listening. It features a beautifully crafted, responsive, touch-optimized interface — no ads, no subscriptions, just rich, high-resolution playback and a sleek UI for your DAC setup.

This documentation covers everything from beginner to advanced topics, including installation, setup, configuration, usage, and extending Berryaudio’s core functionality.

Berryaudio is an open-source project, so the documentation may not always be perfectly up to date or complete. Development happens in my free time after work and on weekends. That said, contributions are always welcome — feel free to suggest improvements, submit fixes, or help make the project better for everyone.

- Varun Gujjar

## Feature Overview

- Designed for the Raspberry Pi
- Plays MP3, FLAC, WAV, OGG, DSD, DSF, and other formats, with detailed codec info, ID3 tag reading, and cover art extraction.
- Bluetooth streaming, AirPlay 2, Spotify Connect, and built-in file browser for easy library management.
- Filter Music Library & Radio by alphabets dictionary
- **Collection - Recently Played, Top 100, Favourites**
- Bluetooth receiver and transmitter support (Handles automatically based on device connected)
- Multi-room synchronized audio playback 
- Curated list of 200+ radio stations, including major providers like BBC and SomaFM.
- Full ID3 tag support, music scanning, and automatic artist info from TheAudioDB.com.
- Create and manage playlists with touch-friendly drag-and-drop sorting and playback modes (Repeat, Shuffle).
- Supports SD cards, USB HDD and SSD drives.
- Network folder sharing from mounted drives
- Manage Bluetooth, view system stats, and control power options (Shutdown, Reboot, Standby).
- Manage wireless & ethernet network, Hotspot, IP configurations direclty from the interface
- Fully accessible using a responsive web interface.
- Support for Line In Audio for DAC with ADC 
- **Search and play radio stations from the Radio Browser directory** by [@FloTec508](https://github.com/FloTec508)
- **Support for Si4703 Tuner Boards**
- **Stream audio directly to browser making it a Music Server (Beta)**
- **Works as Hi-Res Soundcard DAC when connected to computer or phone(Pi Zero 2W)**



## Overview:
- Architecture — an overview of the platform’s structure and design
- Extensions — built-in extensions and how to create your own
- Built-in Extensions — available methods and events