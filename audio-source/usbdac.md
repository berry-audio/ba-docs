---
---

# USB DAC

Berryaudio lets you use your Raspberry Pi as a USB audio DAC (sound card) when connected to a phone or computer.

> [!NOTE]
> This feature is only available on the **Raspberry Pi Zero 2 W**.

### How It Works

Once the Pi is connected to your phone or computer, it appears in your list of sound output devices as **Playback InActive**. Select it as your output device and audio from that device plays through Berry Audio.

On iPhone, audio is routed directly through the DAC.

### Enabling USB DAC

1. Connect your Raspberry Pi Zero 2 W to your phone or computer over USB-C.
2. Go to **Settings > USB DAC**.
3. Turn on **Enable USB DAC**.
4. Once enabled, **USB DAC** appears as a source option on your home screen.

### Settings

<table>
  <thead>
    <tr>
      <th width="200">Setting</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Capture Sample Rate (Hz)</strong></td>
      <td>Choose a rate supported by the DAC connected to your Pi. Check the maximum sample rate your DAC supports before selecting.</td>
    </tr>
    <tr>
      <td><strong>Gain (dB)</strong></td>
      <td>Sets the default gain for the incoming audio.</td>
    </tr>
  </tbody>
</table>

### Controlling Volume & Mute

Once connected, volume and mute events from your computer or phone are passed on to Berryaudio. Any volume change or mute on the connected device is applied to Berryaudio as well, so you can control playback volume from the device you're streaming from.
