---
---

# Multiroom

Berryaudio can play in sync across rooms. Each device can act in one of two ways:

- **Server:** broadcasts its audio to other rooms.
- **Listener:** listens to the audio from another room's server.

Metadata (such as track and source information) is shared between rooms as well.

## Enabling the Multiroom Server

1. Go to **Settings > Multiroom**.
2. Turn on **Enable Multiroom**.
3. Go to **Home > Source > Multiroom**. All devices currently listening to this room are shown here.

## Listening from Another Room

1. Go to **Home > Source > Multiroom**.
2. Rooms on the same network appear automatically.
3. If a room doesn't show up, click the **Refresh** button in the top right corner to scan for rooms manually.
4. Open the room's **Actions** menu (`...`) and click **Connect**.

To disconnect, open the room's **Actions** menu (`...`) and select **Disconnect**.

## Settings

<table>
  <thead>
    <tr>
      <th width="200">Setting</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Codec</strong></td>
      <td>The audio codec used to stream to other rooms: PCM, FLAC, OPUS or OGG.</td>
    </tr>
    <tr>
      <td><strong>Chunk</strong></td>
      <td>The size of the audio chunks sent to listeners. Leaving the default is recommended.</td>
    </tr>
    <tr>
      <td><strong>Buffer</strong></td>
      <td>The playback buffer on listening rooms. Leaving the default is recommended.</td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Multiroom can run on a Raspberry Pi Zero, but performance may be sluggish because of its limited CPU power. Expect slower response times.
>
> **Recommended hardware:**
>
> - **Raspberry Pi 3B+**: minimum recommended option.
> - **Raspberry Pi 4**: better performance and a good balance of cost and speed. A model with at least 2 GB of RAM is recommended.
> - **Raspberry Pi 5**: best performance and the most future-proof.
