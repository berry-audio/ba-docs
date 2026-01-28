# Supported Hardware

## Raspberry Pi

Berryaudio has been tested on the following Raspberry Pi (Bookworm OS). While it should work with other versions of Pi aswell feel free to share your tests so it can be added to the list below.

<table>
    <thead>
        <tr>
        <th width="40%">Version</th>
        <th width="50%">Description</th>
        <th width="5%">Link</th>
        <th width="5%">Status</th>
        </tr>
    </thead>
    <tbody>
            <tr>
        <td>Raspberry Pi Zero</td>
        <td>CPU: BCM2835 @ 1 GHz Memory: 512 MB Wi‑Fi: None Bluetooth: None</td>
        <td><a href="https://www.raspberrypi.com/products/raspberry-pi-zero/">Link</a></td>
        <td>-</td>
    </tr>
    <tr>
        <td>Raspberry Pi Zero W</td>
        <td>CPU: BCM2835 @ 1 GHz Memory: 512 MB Wi‑Fi: 802.11n Bluetooth: 4.0/BLE</td>
        <td><a href="https://www.raspberrypi.com/products/raspberry-pi-zero/">Link</a></td>
        <td>-</td>
    </tr>
    <tr>
        <td>Raspberry Pi Zero 2 W</td>
        <td>CPU: Quad‑core Cortex‑A53 @ 1 GHz Memory: 512 MB Wi‑Fi: 802.11n Bluetooth: 4.2/BLE</td>
        <td><a href="https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/">Link</a></td>
        <td>Tested</td>
    </tr>
    <tr>
        <td>Raspberry Pi 1 Model B+</td>
        <td>CPU: BCM2835 Memory: 512 MB Wi‑Fi: None Bluetooth: None</td>
        <td><a href="https://www.raspberrypi.com/products/raspberry-pi-1-model-b-plus/">Link</a></td>
        <td>-</td>
    </tr>
    <tr>
        <td>Raspberry Pi 3 Model B</td>
        <td>CPU: Quad‑core Cortex‑A53 Memory: 1 GB Wi‑Fi: 802.11n Bluetooth: 4.1/BLE</td>
        <td><a href="https://www.raspberrypi.com/products/raspberry-pi-3-model-b/">Link</a></td>
        <td>-</td>
    </tr>
    <tr>
        <td>Raspberry Pi 3 Model B+</td>
        <td>CPU: Quad‑core Cortex‑A53 @ 1.4 GHz Memory: 1 GB Wi‑Fi: 802.11ac Bluetooth: 4.2/BLE</td>
        <td><a href="https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/">Link</a></td>
        <td>-</td>
    </tr>
    <tr>
        <td>Raspberry Pi 4 Model B</td>
        <td>CPU: Quad‑core Cortex‑A72 Memory: 1/2/4/8 GB Wi‑Fi: 802.11ac Bluetooth: 5/BLE</td>
        <td><a href="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/">Link</a></td>
        <td>Tested</td>
    </tr>
    <tr>
        <td>Raspberry Pi 5</td>
        <td>CPU: Quad‑core Cortex‑A76 Memory: 1/2/4/8/16 GB Wi‑Fi: 802.11ac Bluetooth: 5/BLE</td>
        <td><a href="https://www.raspberrypi.com/products/raspberry-pi-5/">Link</a></td>
        <td>-</td>
    </tr>
    </tbody>
</table>


## Audio Boards

Below are the list of DACs that have been tested and are confirmed to work out of the box. More will be added as testing progresses. If you have a DAC you’d like to see supported, or are able to provide a board for testing, we’d be happy to include it on the platform—your contributions are always welcome!

<table>
    <thead>
        <tr>
        <th width="30%">Board Name</th>
        <th width="20%">Chip</th>
        <th width="10%">Volume</th>
        <th width="10%">Sample Rate</th>
        <th width="5%">Link</th>
        <th width="5%">Status</th>
        </tr>
    </thead>
    <tbody>
     <tr>
        <td>Built-in Pi 3.5mm output</td>
        <td>Pi 3B, 3B+, 4B</td>
        <td>Software</td>
        <td>48kHz</td>
        <td><a href="https://www.raspberrypi.com/products/dac-plus/">Link</a></td>
        <td>Tested</td>
    </tr>
    <tr>
        <td>Rpi DAC+</td>
        <td>DAC: PCM5122</td>
        <td>Hardware</td>
        <td>384kHz</td>
        <td><a href="https://www.raspberrypi.com/products/dac-plus/">Link</a></td>
        <td>Tested</td>
    </tr>
     <tr>
        <td>PCM Audio Board (A)</td>
        <td>DAC: PCM5122</td>
        <td>Hardware</td>
        <td>384kHz</td>
        <td><a href="https://www.waveshare.com/pcm5122-audio-board-a.htm">Link</a></td>
        <td>Tested</td>
    </tr>
     <tr>
        <td>reSpeaker 2-Mics HAT v2</td>
        <td>DAC: WM8960, ADC: WM8960</td>
        <td>Hardware</td>
        <td>48kHz</td>
        <td><a href="https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html">Link</a></td>
        <td>Tested</td>
    </tr>
      <tr>
        <td>Hifiberry DAC+ADC</td>
        <td>DAC: PCM5122, ADC: PCM1861</td>
        <td>Hardware</td>
        <td>384kHz</td>
        <td><a href="https://www.hifiberry.com/shop/boards/dacplus-adc/">Link</a></td>
        <td>Tested</td>
    </tr>
    </tbody>
</table>