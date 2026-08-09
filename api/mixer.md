# Mixer

API documentation for Mixer.

## Methods

<!-- API Block Starts -->

### mixer.alsa_devices {.sr-only}

<ApiCollapse heading="mixer.alsa_devices">
<template #title>mixer.alsa_devices</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "mixer.alsa_devices",
  "params": {
    "cmd": "aplay"
  },
  "id": 5
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": [
    {
      "name": "None",
      "device": null,
      "card": null,
      "description": null
    },
    {
      "name": "hw:CARD=UAC2Gadget,DEV=0",
      "device": "hw:CARD=UAC2Gadget,DEV=0",
      "card": "UAC2Gadget",
      "description": "Direct hardware device without any conversions"
    },
    {
      "name": "plughw:CARD=UAC2Gadget,DEV=0",
      "device": "plughw:CARD=UAC2Gadget,DEV=0",
      "card": "UAC2Gadget",
      "description": "Hardware device with all software conversions"
    },
    {
      "name": "hw:CARD=vc4hdmi,DEV=0",
      "device": "hw:CARD=vc4hdmi,DEV=0",
      "card": "vc4hdmi",
      "description": "Direct hardware device without any conversions"
    },
    {
      "name": "plughw:CARD=vc4hdmi,DEV=0",
      "device": "plughw:CARD=vc4hdmi,DEV=0",
      "card": "vc4hdmi",
      "description": "Hardware device with all software conversions"
    },
    {
      "name": "hw:CARD=sndrpihifiberry,DEV=0",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "description": "Direct hardware device without any conversions"
    },
    {
      "name": "plughw:CARD=sndrpihifiberry,DEV=0",
      "device": "plughw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "description": "Hardware device with all software conversions"
    }
  ]
}
```

</ApiCollapse>

### mixer.alsa_mixer_volume {.sr-only}

<ApiCollapse heading="mixer.alsa_mixer_volume">
<template #title>mixer.alsa_mixer_volume</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "mixer.alsa_mixer_volume",
  "params": {
    "device": "hw:CARD=sndrpihifiberry,DEV=0"
  },
  "id": 5
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": [
    {
      "name": "Software",
      "description": "Software volume from DSP",
      "index": null,
      "type": "playback",
      "channels": 2,
      "range": {
        "min": -100,
        "max": 0,
        "unit": "dB"
      },
      "muted": false
    },
    {
      "name": "Digital",
      "description": "HifiberryDacpAd - snd_rpi_hifiberry_dacplusadc",
      "index": 3,
      "type": "playback",
      "channels": 2,
      "range": {
        "min": 0,
        "max": 207,
        "unit": "steps"
      },
      "muted": false
    }
  ]
}
```

</ApiCollapse>

### mixer.get_mute {.sr-only}

<ApiCollapse heading="mixer.get_mute">
<template #title>mixer.get_mute</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "mixer.get_mute",
  "id": 5
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": false
}
```

</ApiCollapse>

### mixer.get_volume {.sr-only}

<ApiCollapse heading="mixer.get_volume">
<template #title>mixer.get_volume</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "mixer.get_volume",
  "id": 5
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": 100
}
```

</ApiCollapse>

### mixer.list {.sr-only}

<ApiCollapse heading="mixer.list">
<template #title>mixer.list</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "mixer.list",
  "id": 5
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": [
    {
      "id": null,
      "name": "None",
      "device": null,
      "card": null,
      "dtoverlay": null
    },
    {
      "id": 2,
      "name": "Builtin Headphones",
      "device": "hw:CARD=Headphones,DEV=0",
      "card": "Headphones",
      "dtoverlay": null
    },
    {
      "id": 3,
      "name": "Respeaker 2-Mics Pi Hat",
      "device": "hw:CARD=wm8960soundcard,DEV=0",
      "card": "wm8960soundcard",
      "dtoverlay": "wm8960-soundcard"
    },
    {
      "id": 4,
      "name": "PCM5122 Audio Board (A)",
      "device": "hw:CARD=IQaudIODAC,DEV=0",
      "card": "IQaudIODAC",
      "dtoverlay": "iqaudio-dacplus"
    },
    {
      "id": 5,
      "name": "Allo Boss 2 DAC",
      "device": "hw:CARD=Boss2,DEV=0",
      "card": "Boss2",
      "dtoverlay": "allo-boss2-dac-audio"
    },
    {
      "id": 6,
      "name": "Allo Boss DAC",
      "device": "hw:CARD=BossDAC,DEV=0",
      "card": "BossDAC",
      "dtoverlay": "allo-boss-dac-pcm512x-audio"
    },
    {
      "id": 7,
      "name": "Allo DigiOne",
      "device": "hw:CARD=sndallodigione,DEV=0",
      "card": "sndallodigione",
      "dtoverlay": "allo-digione"
    },
    {
      "id": 8,
      "name": "Allo DigiOne Signature",
      "device": "hw:CARD=sndallodigione,DEV=0",
      "card": "sndallodigione",
      "dtoverlay": "allo-digione"
    },
    {
      "id": 9,
      "name": "Allo Katana DAC",
      "device": "hw:CARD=Katana,DEV=0",
      "card": "Katana",
      "dtoverlay": "allo-katana-dac-audio"
    },
    {
      "id": 10,
      "name": "Allo MiniBoss DAC",
      "device": "hw:CARD=BossDAC,DEV=0",
      "card": "BossDAC",
      "dtoverlay": "allo-boss-dac-pcm512x-audio"
    },
    {
      "id": 11,
      "name": "Allo Piano 2.1 Hi-Fi DAC",
      "device": "hw:CARD=PianoDACPlus,DEV=0",
      "card": "PianoDACPlus",
      "dtoverlay": "allo-piano-dac-plus-pcm512x-audio"
    },
    {
      "id": 12,
      "name": "Allo Piano Hi-Fi DAC",
      "device": "hw:CARD=PianoDAC,DEV=0",
      "card": "PianoDAC",
      "dtoverlay": "allo-piano-dac-pcm512x-audio"
    },
    {
      "id": 13,
      "name": "Audiophonics ES9018 DAC",
      "device": "hw:CARD=sndrpirpidac,DEV=0",
      "card": "sndrpirpidac",
      "dtoverlay": "i2s-dac"
    },
    {
      "id": 14,
      "name": "Audiophonics ES9023 DAC",
      "device": "hw:CARD=sndrpirpidac,DEV=0",
      "card": "sndrpirpidac",
      "dtoverlay": "i2s-dac"
    },
    {
      "id": 15,
      "name": "Audiophonics ES9028/9038 DAC",
      "device": "hw:CARD=DAC,DEV=0",
      "card": "DAC",
      "dtoverlay": "i-sabre-q2m"
    },
    {
      "id": 16,
      "name": "Audiophonics PCM5102 DAC",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac"
    },
    {
      "id": 17,
      "name": "Audiophonics PCM5122 DAC",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dacplus"
    },
    {
      "id": 18,
      "name": "Audiophonics TDA1387 DAC",
      "device": "hw:CARD=sndrpirpidac,DEV=0",
      "card": "sndrpirpidac",
      "dtoverlay": "i2s-dac"
    },
    {
      "id": 74,
      "name": "Berryaudio DAC/ADC/FM Tuner",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dacplusadc"
    },
    {
      "id": 19,
      "name": "DDDAC1794 NOS",
      "device": "hw:CARD=sndrpirpidac,DEV=0",
      "card": "sndrpirpidac",
      "dtoverlay": "i2s-dac"
    },
    {
      "id": 20,
      "name": "Generic-I2S (hifiberry-dac)",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac"
    },
    {
      "id": 21,
      "name": "Generic-I2S (i2s-dac)",
      "device": "hw:CARD=sndrpirpidac,DEV=0",
      "card": "sndrpirpidac",
      "dtoverlay": "i2s-dac"
    },
    {
      "id": 22,
      "name": "HIFI DAC",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac"
    },
    {
      "id": 23,
      "name": "HIFI DAC+",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dacplus"
    },
    {
      "id": 24,
      "name": "HIFI Digi",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-digi"
    },
    {
      "id": 25,
      "name": "HIFI Digi+",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-digi"
    },
    {
      "id": 26,
      "name": "HiFiBerry Amp(Amp+)",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-amp"
    },
    {
      "id": 27,
      "name": "HiFiBerry Amp2/4",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dacplus-std"
    },
    {
      "id": 28,
      "name": "HiFiBerry Beocreate",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac"
    },
    {
      "id": 29,
      "name": "HiFiBerry DAC",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac"
    },
    {
      "id": 30,
      "name": "HiFiBerry DAC+",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dacplus-std"
    },
    {
      "id": 31,
      "name": "HiFiBerry DAC+ ADC",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dacplusadc"
    },
    {
      "id": 32,
      "name": "HiFiBerry DAC+ DSP",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac"
    },
    {
      "id": 33,
      "name": "HiFiBerry DAC+ Light",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac"
    },
    {
      "id": 34,
      "name": "HiFiBerry DAC+ Pro",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dacplus-pro"
    },
    {
      "id": 35,
      "name": "HiFiBerry DAC+ Zero",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac"
    },
    {
      "id": 36,
      "name": "HiFiBerry DAC2 HD",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dacplushd"
    },
    {
      "id": 37,
      "name": "HiFiBerry DAC8x",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac8x"
    },
    {
      "id": 38,
      "name": "HiFiBerry Digi(Digi+)",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-digi"
    },
    {
      "id": 39,
      "name": "HiFiBerry Digi+ Pro",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-digi-pro"
    },
    {
      "id": 40,
      "name": "HiFiBerry MiniAmp",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac"
    },
    {
      "id": 41,
      "name": "IQaudIO Pi-AMP+",
      "device": "hw:CARD=IQaudIODAC,DEV=0",
      "card": "IQaudIODAC",
      "dtoverlay": "iqaudio-dacplus"
    },
    {
      "id": 42,
      "name": "IQaudIO Pi-DAC",
      "device": "hw:CARD=IQaudIODAC,DEV=0",
      "card": "IQaudIODAC",
      "dtoverlay": "iqaudio-dac"
    },
    {
      "id": 43,
      "name": "IQaudIO Pi-DAC PRO",
      "device": "hw:CARD=IQaudIODAC,DEV=0",
      "card": "IQaudIODAC",
      "dtoverlay": "iqaudio-dacplus"
    },
    {
      "id": 44,
      "name": "IQaudIO Pi-DAC+",
      "device": "hw:CARD=IQaudIODAC,DEV=0",
      "card": "IQaudIODAC",
      "dtoverlay": "iqaudio-dacplus"
    },
    {
      "id": 45,
      "name": "IQaudIO Pi-DACZero",
      "device": "hw:CARD=IQaudIODAC,DEV=0",
      "card": "IQaudIODAC",
      "dtoverlay": "iqaudio-dacplus"
    },
    {
      "id": 46,
      "name": "IQaudIO Pi-Digi+",
      "device": "hw:CARD=IQAudIODigi,DEV=0",
      "card": "IQAudIODigi",
      "dtoverlay": "iqaudio-digi-wm8804-audio"
    },
    {
      "id": 47,
      "name": "IQaudIO Pi-DigiAMP+",
      "device": "hw:CARD=IQaudIODAC,DEV=0",
      "card": "IQaudIODAC",
      "dtoverlay": "iqaudio-dacplus"
    },
    {
      "id": 48,
      "name": "IanCanada (ESS Controller)",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dacplus"
    },
    {
      "id": 49,
      "name": "IanCanada (i2s-dac)",
      "device": "hw:CARD=sndrpirpidac,DEV=0",
      "card": "sndrpirpidac",
      "dtoverlay": "i2s-dac"
    },
    {
      "id": 50,
      "name": "IanCanada (MonitorPi Pro w/o ESS DAC)",
      "device": "hw:CARD=DAC,DEV=0",
      "card": "DAC",
      "dtoverlay": "i-sabre-q2m"
    },
    {
      "id": 51,
      "name": "IanCanada (MonitorPi Pro with ESS DAC)",
      "device": "hw:CARD=DAC,DEV=0",
      "card": "DAC",
      "dtoverlay": "i-sabre-q2m"
    },
    {
      "id": 52,
      "name": "IanCanada (TransportPi Digi)",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-digi-pro"
    },
    {
      "id": 53,
      "name": "JustBoom AMP HAT(Zero)",
      "device": "hw:CARD=sndrpijustboomd,DEV=0",
      "card": "sndrpijustboomd",
      "dtoverlay": "justboom-dac"
    },
    {
      "id": 54,
      "name": "JustBoom DAC HAT(Zero)",
      "device": "hw:CARD=sndrpijustboomd,DEV=0",
      "card": "sndrpijustboomd",
      "dtoverlay": "justboom-dac"
    },
    {
      "id": 55,
      "name": "JustBoom Digi HAT(Zero)",
      "device": "hw:CARD=sndrpijustboomd,DEV=0",
      "card": "sndrpijustboomd",
      "dtoverlay": "justboom-digi"
    },
    {
      "id": 56,
      "name": "Mamboberry HiFi DAC+",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac"
    },
    {
      "id": 57,
      "name": "Mamboberry LS DAC+",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac"
    },
    {
      "id": 58,
      "name": "MERUS Amp piHAT ZW",
      "device": "hw:CARD=sndrpimerusamp,DEV=0",
      "card": "sndrpimerusamp",
      "dtoverlay": "merus-amp"
    },
    {
      "id": 59,
      "name": "Pi2Design 502DAC",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dacplus"
    },
    {
      "id": 60,
      "name": "Pi2Design 502DAC PRO",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-digi-pro"
    },
    {
      "id": 61,
      "name": "Pi2Design 503HTA Hybrid Tube Amp",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dac"
    },
    {
      "id": 62,
      "name": "Pi2Design AES",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-digi-pro"
    },
    {
      "id": 63,
      "name": "Pi2Design AES-Lite",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-digi-pro"
    },
    {
      "id": 64,
      "name": "Pi2Design Mercury",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-digi-pro"
    },
    {
      "id": 65,
      "name": "ProtoDAC TDA1387 X8",
      "device": "hw:CARD=sndrpirpidac,DEV=0",
      "card": "sndrpirpidac",
      "dtoverlay": "i2s-dac"
    },
    {
      "id": 66,
      "name": "ProtoDAC TDA1387 X8 (FifoPiMa)",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "hifiberry-dacplus"
    },
    {
      "id": 67,
      "name": "Raspberry Pi Codec Zero",
      "device": "hw:CARD=sndrpicodeczero,DEV=0",
      "card": "sndrpicodeczero",
      "dtoverlay": "rpi-codeczero"
    },
    {
      "id": 68,
      "name": "Raspberry Pi DAC Pro",
      "device": "hw:CARD=DAC,DEV=0",
      "card": "DAC",
      "dtoverlay": "rpi-dacpro"
    },
    {
      "id": 69,
      "name": "Raspberry Pi DAC+",
      "device": "hw:CARD=DAC,DEV=0",
      "card": "DAC",
      "dtoverlay": "rpi-dacplus"
    },
    {
      "id": 70,
      "name": "Raspberry Pi DigiAMP+",
      "device": "hw:CARD=sndrpihifiberry,DEV=0",
      "card": "sndrpihifiberry",
      "dtoverlay": "rpi-digiampplus"
    },
    {
      "id": 71,
      "name": "Soekris DAM",
      "device": "hw:CARD=sndrpirpidac,DEV=0",
      "card": "sndrpirpidac",
      "dtoverlay": "i2s-dac"
    },
    {
      "id": 72,
      "name": "Suptronics x400",
      "device": "hw:CARD=IQaudIODAC,DEV=0",
      "card": "IQaudIODAC",
      "dtoverlay": "iqaudio-dacplus"
    },
    {
      "id": 73,
      "name": "Cambridge Audio DAC100",
      "device": "plughw:CARD=C2,DEV=0",
      "card": "C2",
      "dtoverlay": ""
    }
  ]
}
```

</ApiCollapse>

### mixer.set_mute {.sr-only}

<ApiCollapse heading="mixer.set_mute">
<template #title>mixer.set_mute</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "mixer.set_mute",
  "params": {
    "mute": true
  },
  "id": 5
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": true
}
```

</ApiCollapse>

### mixer.set_volume {.sr-only}

<ApiCollapse heading="mixer.set_volume">
<template #title>mixer.set_volume</template>

Sets the mixer volume to the value

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "mixer.set_volume",
  "params": {
    "volume": 55
  },
  "id": 5
}
```

| Parameter | Type | Required | Value | Description |
| --- | --- | --- | --- | --- |
| `volume` | integer | Yes | `0-100` | Volume level from 0 to 100 |
| | | | `20-100` | Second mixer channel |
| `mixy` | integer | Yes | `0-100` | Volume level from 0 to 100 |


<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": 45
}
```

| Parameter | Type | Value | Description |
| --- | --- | --- | --- |
| `result` | integer | `0-100` | The resulting volume |


</ApiCollapse>

### mixer.toggle_mute {.sr-only}

<ApiCollapse heading="mixer.toggle_mute">
<template #title>mixer.toggle_mute</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "mixer.toggle_mute",
  "id": 5
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": false
}
```

</ApiCollapse>

<!-- API Block Ends -->
