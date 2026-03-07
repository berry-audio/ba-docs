# Installation

To avoid any complex configurations and keep the setup simple, the easiest way to get started is by downloading the latest Berryaudio image and flashing it directly to your Raspberry Pi.

## Requirements

- Raspberry Pi [Supported Hardware](/getting-started/supported-hardware.html#supported-raspberry-pi)
- Audio DAC [Supported Hardware](/getting-started/supported-hardware.html#supported-dac-adc)
- Latest Raspberry Pi Imager tool [https://www.raspberrypi.com/software/](https://www.raspberrypi.com/software/)
- Latest Berryaudio image [Latest Image](http://berryaudio.org/berryaudio_latest.img.zip)
- Micro SD card reader

## Preparing the SD Card

- Run Raspberry Pi Imager select your **Raspberry Pi Device**
- From the OS section scroll to the bottom and select **Custom Image**
- Browse and Select the Berryaudio SD card image you downloaded
- Select your storage as the SD card that you need to write the custom image to.
- Click on **Write** from the Writing section
- Have a coffee and wait for berryaudio to be written to SD Card :)

## Booting the OS

- Remove the SD card from your computer and insert it into your Raspberry Pi.
- Power on the Pi. On first boot, the system will automatically resize partitions and load the required drivers. This may take a moment.

## Connecting to Network

- After the Pi finishes booting, it will start in AP mode.
- You should see a Wi-Fi hotspot named `berryaudio` password `goberryaudio`. Connect to this network from your device.
- Incase your connected via Ethernet, you can skip the above step and continue to the next section.
- If everything went well, you can now access Berryaudio from your browse on http://berryaudio.local
- Optionally you may go to Settings → Network, scan for available networks, and connect to your Wi-Fi SSID.

## Setting up DAC

- Go to Settings → General → Audio Output (Select your DAC from the dropdown list) and restart your device.

## Welcome to Berryaudio

- If everything went well, you can start playing music listen to radio Enjoy! :)
