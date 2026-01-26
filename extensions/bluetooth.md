---
outline: deep
---

# Bluetooth

The built-in Bluetooth extension enables high-quality audio streaming and device management for supported devices. It supports aptX, LDAC, and SBC XQ+ codecs, with metadata display when available. The extension can function as a Bluetooth receiver or transmitter, automatically switching based on the connected device, and Bluetooth devices can be scanned, connected, and managed via D-Bus.

> [!Note]
> The Raspberry Pi may experience occasional random disconnects or connection issues when switching between devices. Once a connection is successfully established, streaming and metadata functionality should work reliably.

https://github.com/berry-audio/berryaudio/tree/master/bluetooth

## Methods

<!-- API Block Starts -->

### adapter_get_state {.sr-only}

<ApiCollapse heading="adapter_get_state">
<template #title>adapter_get_state</template>
<template #description>
    Gets the current state of the Bluetooth adapter.
</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.adapter_get_state",
  "id": 3
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "powered": false,
    "discoverable": false,
    "pairable": true
  }
}
```

<table class="api-params-table">
    <thead>
        <tr>
        <th width="5%">Property</th>
        <th width="5%">Type</th>
        <th width="40%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>powered</td>
            <td>boolean</td>
            <td>Bluetooth power on off state</td>
        </tr>
         <tr>
            <td>discoverable</td>
            <td>boolean</td>
            <td>Bluetooth discoverable</td>
        </tr>
        <tr>
            <td>pairable</td>
            <td>boolean</td>
            <td>Bluetooth pairable</td>
        </tr>
    </tbody>
</table>
</ApiCollapse>
<!-- End -->

<!-- API Block Starts adapter_set_state-->

### adapter_set_state {.sr-only}

<ApiCollapse heading="adapter_set_state">
<template #title>adapter_set_state</template>
<template #description>
    Sets the current power state of the Bluetooth adapter. Also makes it discoverable and pairable.
</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.adapter_set_state",
  "params": {
    "state": true
  },
  "id": 3
}
```

<table class="api-params-table">
    <thead>
        <tr>
            <th width="2%">Param</th>
            <th width="2%">Type</th>
            <th width="2%">Required</th>
            <th width="2%">Value</th>
            <th width="20%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>state</td>
            <td>boolean</td>
            <td>Yes</td>
            <td><code>true</code></td>
            <td>Powers on bluetooth adapter</td>
        </tr>
         <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><code>false</code></td>
            <td>Powers off bluetooth adapter</td>
        </tr>
    </tbody>
</table>

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "powered": false,
    "discoverable": false,
    "pairable": true
  }
}
```

<table class="api-params-table">
    <thead>
        <tr>
        <th width="5%">Property</th>
        <th width="5%">Type</th>
        <th width="40%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>powered</td>
            <td>boolean</td>
            <td>Bluetooth power on off state</td>
        </tr>
         <tr>
            <td>discoverable</td>
            <td>boolean</td>
            <td>Bluetooth discoverable</td>
        </tr>
        <tr>
            <td>pairable</td>
            <td>boolean</td>
            <td>Bluetooth pairable</td>
        </tr>
    </tbody>
</table>
</ApiCollapse>
<!-- End -->

<!-- API Block Starts -->

### devices {.sr-only}

<ApiCollapse heading="devices">
<template #title>devices</template>
<template #description>
    Scans and gets list of available bluetooth devices
</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.devices",
  "params": {
    "rescan": true
  },
  "id": 3
}
```

<table class="api-params-table">
    <thead>
        <tr>
            <th width="2%">Param</th>
            <th width="2%">Type</th>
            <th width="2%">Required</th>
            <th width="2%">Value</th>
            <th width="20%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>rescan</td>
            <td>boolean</td>
            <td>No</td>
            <td><code>true</code></td>
            <td>Rescans devices</td>
        </tr>
         <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><code>false</code></td>
            <td>(Default) Gets cached devices</td>
        </tr>
    </tbody>
</table>

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": [
    {
      "address": "14:4E:FD:88:AE:B1",
      "name": "My Amp",
      "profile": "A2DP-source",
      "alias": "My Amp",
      "icon": "audio-headset",
      "paired": true,
      "trusted": true,
      "connected": true,
      "soft_volume": true,
      "volume": 100,
      "channels": 2,
      "audio_codec": "SBC",
      "sample_rate": 48000,
      "bit_depth": "S16_LE",
      "uuids": [
        "0000110a-0000-1000-8000-00805f9b34fb",
        "0000110b-0000-1000-8000-00805f9b34fb",
        "0000110c-0000-1000-8000-00805f9b34fb",
        "0000110e-0000-1000-8000-00805f9b34fb",
        "00001200-0000-1000-8000-00805f9b34fb",
        "00006666-0000-1000-8000-00805f9b34fb"
      ]
    }
    //...other devices
  ]
}
```

<table class="api-params-table">
    <thead>
        <tr>
            <th width="5%">Property</th>
            <th width="10%">Type</th>
            <th width="30%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>address</td>
            <td>string</td>
            <td>The MAC address of the Bluetooth device</td>
        </tr>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>The name of the Bluetooth device</td>
        </tr>
        <tr>
            <td>profile</td>
            <td>string | null</td>
            <td>The Bluetooth profile used by the device, if any</td>
        </tr>
        <tr>
            <td>alias</td>
            <td>string</td>
            <td>The user-friendly alias of the device</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>string</td>
            <td>The icon type representing the device</td>
        </tr>
        <tr>
            <td>paired</td>
            <td>boolean</td>
            <td>Whether the device is paired</td>
        </tr>
        <tr>
            <td>trusted</td>
            <td>boolean</td>
            <td>Whether the device is trusted</td>
        </tr>
        <tr>
            <td>connected</td>
            <td>boolean</td>
            <td>Whether the device is currently connected</td>
        </tr>
        <tr>
            <td>soft_volume</td>
            <td>boolean</td>
            <td>Whether device supports software-controlled volume</td>
        </tr>
        <tr>
            <td>volume</td>
            <td>number | null</td>
            <td>Volume level of the device, if available</td>
        </tr>
        <tr>
            <td>channels</td>
            <td>number | null</td>
            <td>The number of audio channels, if applicable</td>
        </tr>
        <tr>
            <td>audio_codec</td>
            <td>string | null</td>
            <td>The audio codec currently in use, if any</td>
        </tr>
        <tr>
            <td>sample_rate</td>
            <td>number | null</td>
            <td>The audio sample rate in Hz, if available</td>
        </tr>
        <tr>
            <td>bit_depth</td>
            <td>number | null</td>
            <td>The audio bit depth, if available</td>
        </tr>
        <tr>
            <td>uuids</td>
            <td>strings[]</td>
            <td>List of service UUIDs supported by the device</td>
        </tr>
    </tbody>
</table>

</ApiCollapse>
<!-- End -->

<!-- API Block Starts -->

### device {.sr-only}

<ApiCollapse heading="device">
<template #title>device</template>
<template #description>
    Gets current connected device information from mac address
</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.device",
  "params": {
    "address": "14:4E:FD:88:AE:B1"
  },
  "id": 3
}
```

<table class="api-params-table">
    <thead>
        <tr>
            <th width="2%">Param</th>
            <th width="2%">Type</th>
            <th width="2%">Required</th>
            <th width="2%">Value</th>
            <th width="20%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>address</td>
            <td>string</td>
            <td>No</td>
            <td><code>null</code></td>
            <td>(Default) Gets connected device info</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>{macaddress}</td>
            <td>Gets address specific device info</td>
        </tr>
    </tbody>
</table>

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "address": "14:4E:FD:88:AE:B1",
    "name": "My Amp",
    "profile": "A2DP-source",
    "alias": "My Amp",
    "icon": "audio-headset",
    "paired": true,
    "trusted": true,
    "connected": true,
    "soft_volume": true,
    "volume": 100,
    "channels": 2,
    "audio_codec": "SBC",
    "sample_rate": 48000,
    "bit_depth": "S16_LE",
    "uuids": [
      "0000110a-0000-1000-8000-00805f9b34fb",
      "0000110b-0000-1000-8000-00805f9b34fb",
      "0000110c-0000-1000-8000-00805f9b34fb",
      "0000110e-0000-1000-8000-00805f9b34fb",
      "00001200-0000-1000-8000-00805f9b34fb",
      "00006666-0000-1000-8000-00805f9b34fb"
    ]
  }
}
```

<table class="api-params-table">
    <thead>
        <tr>
            <th width="5%">Property</th>
            <th width="10%">Type</th>
            <th width="30%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>address</td>
            <td>string</td>
            <td>The MAC address of the Bluetooth device</td>
        </tr>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>The name of the Bluetooth device</td>
        </tr>
        <tr>
            <td>profile</td>
            <td>string | null</td>
            <td>The Bluetooth profile used by the device, if any</td>
        </tr>
        <tr>
            <td>alias</td>
            <td>string</td>
            <td>The user-friendly alias of the device</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>string</td>
            <td>The icon type representing the device</td>
        </tr>
        <tr>
            <td>paired</td>
            <td>boolean</td>
            <td>Whether the device is paired</td>
        </tr>
        <tr>
            <td>trusted</td>
            <td>boolean</td>
            <td>Whether the device is trusted</td>
        </tr>
        <tr>
            <td>connected</td>
            <td>boolean</td>
            <td>Whether the device is currently connected</td>
        </tr>
        <tr>
            <td>soft_volume</td>
            <td>boolean</td>
            <td>Whether device supports software-controlled volume</td>
        </tr>
        <tr>
            <td>volume</td>
            <td>number | null</td>
            <td>Volume level of the device, if available</td>
        </tr>
        <tr>
            <td>channels</td>
            <td>number | null</td>
            <td>The number of audio channels, if applicable</td>
        </tr>
        <tr>
            <td>audio_codec</td>
            <td>string | null</td>
            <td>The audio codec currently in use, if any</td>
        </tr>
        <tr>
            <td>sample_rate</td>
            <td>number | null</td>
            <td>The audio sample rate in Hz, if available</td>
        </tr>
        <tr>
            <td>bit_depth</td>
            <td>number | null</td>
            <td>The audio bit depth, if available</td>
        </tr>
        <tr>
            <td>uuids</td>
            <td>strings[]</td>
            <td>List of service UUIDs supported by the device</td>
        </tr>
    </tbody>
</table>

</ApiCollapse>
<!-- End -->

<!-- API Block Starts -->

### connect {.sr-only}

<ApiCollapse heading="connect">
<template #title>connect</template>
<template #description>
    Connects to the bluetooth device with given mac-address
</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.connect",
  "params": {
    "address": "14:4E:FD:88:AE:B1"
  },
  "id": 3
}
```

<table class="api-params-table">
    <thead>
        <tr>
            <th width="2%">Param</th>
            <th width="2%">Type</th>
            <th width="2%">Required</th>
            <th width="2%">Value</th>
            <th width="20%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>address</td>
            <td>string</td>
            <td>yes</td>
            <td>{macaddress}</td>
            <td>Mac-address</td>
        </tr>
    </tbody>
</table>

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": true
}
```

Returns <code>true</code> if request was sent successfully.

</ApiCollapse>
<!-- End -->

<!-- API Block Starts -->

### disconnect {.sr-only}

<ApiCollapse heading="disconnect">
<template #title>disconnect</template>
<template #description>
    Disconnects from the bluetooth device with given mac-address
</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.disconnect",
  "params": {
    "address": "14:4E:FD:88:AE:B1"
  },
  "id": 3
}
```

<table class="api-params-table">
    <thead>
        <tr>
            <th width="2%">Param</th>
            <th width="2%">Type</th>
            <th width="2%">Required</th>
            <th width="2%">Value</th>
            <th width="20%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>address</td>
            <td>string</td>
            <td>yes</td>
            <td>{macaddress}</td>
            <td>Mac-address</td>
        </tr>
    </tbody>
</table>

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": true
}
```

Returns <code>true</code> if request was sent successfully.

</ApiCollapse>
<!-- End -->

<!-- API Block Starts -->

### remove {.sr-only}

<ApiCollapse heading="remove">
<template #title>remove</template>
<template #description>
    Removes and deletes the bluetooth device with given mac-address
</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.remove",
  "params": {
    "address": "14:4E:FD:88:AE:B1"
  },
  "id": 3
}
```

<table class="api-params-table">
    <thead>
        <tr>
            <th width="2%">Param</th>
            <th width="2%">Type</th>
            <th width="2%">Required</th>
            <th width="2%">Value</th>
            <th width="20%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>address</td>
            <td>string</td>
            <td>yes</td>
            <td>{macaddress}</td>
            <td>Mac-address</td>
        </tr>
    </tbody>
</table>

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": true
}
```

Returns <code>true</code> if request was sent successfully.

</ApiCollapse>
<!-- End -->

<!-- API Block Starts -->

### trust {.sr-only}

<ApiCollapse heading="trust">
<template #title>trust</template>
<template #description>
    Trusts the bluetooth device with given mac-address.

</template>

> [!Note]
> This is automatically done when the device is connected for the first time.

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.trust",
  "params": {
    "address": "14:4E:FD:88:AE:B1"
  },
  "id": 3
}
```

<table class="api-params-table">
    <thead>
        <tr>
            <th width="2%">Param</th>
            <th width="2%">Type</th>
            <th width="2%">Required</th>
            <th width="2%">Value</th>
            <th width="20%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>address</td>
            <td>string</td>
            <td>yes</td>
            <td>{macaddress}</td>
            <td>Mac-address</td>
        </tr>
    </tbody>
</table>

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": true
}
```

Returns <code>true</code> if request was sent successfully.

</ApiCollapse>
<!-- End -->

<!-- API Block Starts -->

### set_volume {.sr-only}

<ApiCollapse heading="set_volume">
<template #title>set_volume</template>
<template #description>
    Sets the volume of the bluetooth device with given mac-address.

</template>

> [!Note]
> This only works if device (Raspberry Pi) is connected as the source

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.set_volume",
  "params": {
    "address": "14:4E:FD:88:AE:B1",
    "volume": 100,
    "soft_volume": true,
    "muted": false
  },
  "id": 3
}
```

<table class="api-params-table">
    <thead>
        <tr>
            <th width="2%">Param</th>
            <th width="2%">Type</th>
            <th width="2%">Required</th>
            <th width="2%">Value</th>
            <th width="20%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>address</td>
            <td>string</td>
            <td>yes</td>
            <td>{macaddress}</td>
            <td>Mac-address</td>
        </tr>
        <tr>
            <td>volume</td>
            <td>number</td>
            <td>yes</td>
            <td><code>100</code></td>
            <td>Supports 0-100</td>
        </tr>
         <tr>
            <td>soft_volume</td>
            <td>boolean</td>
            <td>yes</td>
            <td><code>true</code></td>
            <td>(Default) Use software volume</td>
        </tr>
         <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><code>false</code></td>
            <td>Use hardware volume</td>
        </tr>
         <tr>
            <td>muted</td>
            <td>boolean</td>
            <td>yes</td>
            <td><code>false</code></td>
            <td>(Default) Mute</td>
        </tr>
         <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><code>false</code></td>
            <td>Un-Mute</td>
        </tr>
    </tbody>
</table>

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": true
}
```

Returns <code>true</code> if request was sent successfully.

</ApiCollapse>
<!-- End -->

## Events

<!-- Event Block Starts -->
### bluetooth_device_connected {.sr-only}

<EventCollapse heading="bluetooth_device_connected" method="EVENT">
<template #title>bluetooth_device_connected</template>
<template #description>
    Event triggered when a bluetooth device is connected
</template>

```json
{
    "event": "bluetooth_device_connected",
    "device": {
        "address": "14:4E:FD:88:AE:B1",
        "name": "My Amp",
        "profile": "A2DP-source",
        "alias": "My Amp",
        "icon": "audio-headset",
        "paired": true,
        "trusted": true,
        "connected": true,
        "soft_volume": true,
        "volume": 100,
        "channels": 2,
        "audio_codec": "SBC",
        "sample_rate": 48000,
        "bit_depth": "S16_LE",
        "uuids": [
            "0000110a-0000-1000-8000-00805f9b34fb",
            "0000110b-0000-1000-8000-00805f9b34fb",
            "0000110c-0000-1000-8000-00805f9b34fb",
            "0000110e-0000-1000-8000-00805f9b34fb",
            "00001200-0000-1000-8000-00805f9b34fb",
            "00006666-0000-1000-8000-00805f9b34fb"
        ]
    }
}
```

<table class="api-params-table">
    <thead>
        <tr>
        <th width="5%">Property</th>
        <th width="5%">Type</th>
        <th width="40%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>event</td>
        <td>string</td>
        <td>Event name</td>
        </tr>
        <tr>
        <td>device</td>
        <td>object</td>
        <td>Check method <a href="#device">device</a> response result</td>
        </tr>
    </tbody>
</table>
</EventCollapse>
<!-- End -->


<!-- Event Block Starts -->
### bluetooth_device_disconnected {.sr-only}

<EventCollapse heading="bluetooth_device_disconnected" method="EVENT">
<template #title>bluetooth_device_disconnected</template>
<template #description>
    Event triggered when a bluetooth device is disconnected
</template>

```json
{
    "event": "bluetooth_device_disconnected",
    "device": {
        "address": "14:4E:FD:88:AE:B1",
        "name": "My Amp",
        "profile": "A2DP-source",
        "alias": "My Amp",
        "icon": "audio-headset",
        "paired": true,
        "trusted": true,
        "connected": false,
        "soft_volume": true,
        "volume": 100,
        "channels": 2,
        "audio_codec": "SBC",
        "sample_rate": 48000,
        "bit_depth": "S16_LE",
        "uuids": [
            "0000110a-0000-1000-8000-00805f9b34fb",
            "0000110b-0000-1000-8000-00805f9b34fb",
            "0000110c-0000-1000-8000-00805f9b34fb",
            "0000110e-0000-1000-8000-00805f9b34fb",
            "00001200-0000-1000-8000-00805f9b34fb",
            "00006666-0000-1000-8000-00805f9b34fb"
        ]
    }
}
```

<table class="api-params-table">
    <thead>
        <tr>
        <th width="5%">Property</th>
        <th width="5%">Type</th>
        <th width="40%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>event</td>
        <td>string</td>
        <td>Event name</td>
        </tr>
        <tr>
        <td>device</td>
        <td>object</td>
        <td>Check method <a href="#device">device</a> response result</td>
        </tr>
    </tbody>
</table>
</EventCollapse>
<!-- End -->


<!-- Event Block Starts -->
### bluetooth_device_updated {.sr-only}

<EventCollapse heading="bluetooth_device_updated" method="EVENT">
<template #title>bluetooth_device_updated</template>
<template #description>
    Event triggered when a bluetooth device information is updated
</template>

```json
{
    "event": "bluetooth_device_updated",
    "device": {
        "address": "14:4E:FD:88:AE:B1",
        "name": "My Amp",
        "profile": "A2DP-source",
        "alias": "My Amp",
        "icon": "audio-headset",
        "paired": true,
        "trusted": true,
        "connected": true,
        "soft_volume": true,
        "volume": 100,
        "channels": 2,
        "audio_codec": "SBC",
        "sample_rate": 48000,
        "bit_depth": "S16_LE",
        "uuids": [
            "0000110a-0000-1000-8000-00805f9b34fb",
            "0000110b-0000-1000-8000-00805f9b34fb",
            "0000110c-0000-1000-8000-00805f9b34fb",
            "0000110e-0000-1000-8000-00805f9b34fb",
            "00001200-0000-1000-8000-00805f9b34fb",
            "00006666-0000-1000-8000-00805f9b34fb"
        ]
    }
}
```

<table class="api-params-table">
    <thead>
        <tr>
        <th width="5%">Property</th>
        <th width="5%">Type</th>
        <th width="40%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>event</td>
        <td>string</td>
        <td>Event name</td>
        </tr>
        <tr>
        <td>device</td>
        <td>object</td>
        <td>Check method <a href="#device">device</a> response result</td>
        </tr>
    </tbody>
</table>
</EventCollapse>
<!-- End -->





<!-- Event Block Starts -->
### bluetooth_device_removed {.sr-only}

<EventCollapse heading="bluetooth_device_removed" method="EVENT">
<template #title>bluetooth_device_removed</template>
<template #description>
    Event triggered when a bluetooth device is removed or deleted
</template>

```json
{
    "event": "bluetooth_device_removed",
    "device": {
        "address": "14:4E:FD:88:AE:B1",
        "name": "My Amp",
        "profile": "A2DP-source",
        "alias": "My Amp",
        "icon": "audio-headset",
        "paired": true,
        "trusted": true,
        "connected": false,
        "soft_volume": true,
        "volume": 100,
        "channels": 2,
        "audio_codec": "SBC",
        "sample_rate": 48000,
        "bit_depth": "S16_LE",
        "uuids": [
            "0000110a-0000-1000-8000-00805f9b34fb",
            "0000110b-0000-1000-8000-00805f9b34fb",
            "0000110c-0000-1000-8000-00805f9b34fb",
            "0000110e-0000-1000-8000-00805f9b34fb",
            "00001200-0000-1000-8000-00805f9b34fb",
            "00006666-0000-1000-8000-00805f9b34fb"
        ]
    }
}
```

<table class="api-params-table">
    <thead>
        <tr>
        <th width="5%">Property</th>
        <th width="5%">Type</th>
        <th width="40%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>event</td>
        <td>string</td>
        <td>Event name</td>
        </tr>
        <tr>
        <td>device</td>
        <td>object</td>
        <td>Check method <a href="#device">device</a> response result</td>
        </tr>
    </tbody>
</table>
</EventCollapse>
<!-- End -->




<!-- Event Block Starts -->
### bluetooth_state_changed {.sr-only}

<EventCollapse heading="bluetooth_state_changed" method="EVENT">
<template #title>bluetooth_state_changed</template>
<template #description>
    Event triggered when a bluetooth adapter state is updated
</template>

```json
{
    "event": "bluetooth_state_changed",
    "state": {
        "powered": false,
        "discoverable": false,
        "pairable": false
    }
}
```

<table class="api-params-table">
    <thead>
        <tr>
        <th width="5%">Property</th>
        <th width="5%">Type</th>
        <th width="40%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>event</td>
        <td>string</td>
        <td>Event name</td>
        </tr>
        <tr>
        <td>state</td>
        <td>object</td>
        <td>Check method <a href="#adapter-get-state">adapter_get_state</a> response result</td>
        </tr>
    </tbody>
</table>
</EventCollapse>
<!-- End -->