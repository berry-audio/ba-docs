---
outline: deep
---

# Bluetooth

The built-in Bluetooth extension enables high-quality audio streaming and device management for supported devices. It supports aptX, LDAC, and SBC XQ+ codecs, with metadata display when available. The extension can function as a Bluetooth receiver or transmitter, automatically switching based on the connected device, and Bluetooth devices can be scanned, connected, and managed via D-Bus.

> [!Note]
> The Raspberry Pi may experience occasional random disconnects or connection issues when switching between devices. Once a connection is successfully established, streaming and metadata functionality should work reliably.

https://github.com/berry-audio/berryaudio/tree/master/bluetooth

## API

### bluetooth.adapter_get_state {.sr-only}

<!-- API Block Starts -->
<ApiCollapse heading="bluetooth.adapter_get_state" method="POST">
<template #title>bluetooth.adapter_get_state</template>
<template #description>
    This page demonstrates usage of some of the runtime APIs provided by VitePress.
</template>

<ApiRequest method="POST" path="/rpc" />

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


<!-- API Block Starts -->
<ApiCollapse heading="bluetooth.devices" method="POST">
<template #title>bluetooth.devices</template>
<template #description>
    This page demonstrates usage of some of the runtime APIs provided by VitePress.
</template>

<ApiRequest method="POST" path="/rpc" />

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
[
  {
    "jsonrpc": "2.0",
    "method": "bluetooth.devices",
    "params": {
      "rescan": false
    },
    "id": 3
  }
  //other devices...
]
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
        <td>rescan</td>
        <td>boolean</td>
        <td>Whether to rescan for devices</td>
        </tr>
    </tbody>
</table>
</ApiCollapse>
<!-- End -->

<!-- API Block Starts -->
<ApiCollapse heading="bluetooth.devices" method="POST">
<template #title>bluetooth.devices</template>
<template #description>
    This page demonstrates usage of some of the runtime APIs provided by VitePress.
</template>

<ApiRequest method="POST" path="/rpc" />

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
[
  {
    "jsonrpc": "2.0",
    "method": "bluetooth.devices",
    "params": {
      "rescan": false
    },
    "id": 3
  }
  //other devices...
]
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
        <td>rescan</td>
        <td>boolean</td>
        <td>Whether to rescan for devices</td>
        </tr>
    </tbody>
</table>
</ApiCollapse>
<!-- End -->

## Events
<!-- Event Block Starts -->
<EventCollapse heading="bluetooth_device_connected" method="EVENT">
<template #title>bluetooth_device_connected</template>
<template #description>
    This page demonstrates usage of some of the runtime APIs provided by VitePress.
</template>

```json
{
  "event": "bluetooth_device_connected",
  "device": "2026-01-25T18:39:23"
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
        <td>rescan</td>
        <td>boolean</td>
        <td>Whether to rescan for devices</td>
        </tr>
    </tbody>
</table>
</EventCollapse>
<!-- End -->