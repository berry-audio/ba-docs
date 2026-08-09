# Source

API documentation for Source.

## Methods

<!-- API Block Starts -->

### source.directory {.sr-only}

<ApiCollapse heading="source.directory">
<template #title>source.directory</template>

Fetches all available sources, along with their controls and current states.

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "source.directory",
  "id": 3
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": [
    {
      "__model__": "Source",
      "name": "Radio",
      "uri": "radio",
      "active": false,
      "controls": [
        "seek",
        "play",
        "pause",
        "next",
        "previous",
        "repeat",
        "shuffle",
        "favourite"
      ],
      "state": {
        "connected": false,
        "user_name": null,
        "connection_id": null,
        "name": null,
        "icon": null,
        "address": null
      }
    },
    {
      "__model__": "Source",
      "name": "Spotify Connect",
      "uri": "spotify",
      "active": false,
      "controls": [],
      "state": {
        "connected": false,
        "user_name": null,
        "connection_id": null,
        "name": null,
        "icon": null,
        "address": null
      }
    },
    {
      "__model__": "Source",
      "name": "Airplay",
      "uri": "shairportsync",
      "active": true,
      "controls": [],
      "state": {
        "connected": false,
        "user_name": null,
        "connection_id": null,
        "name": null,
        "icon": null,
        "address": null
      }
    },
    {
      "__model__": "Source",
      "name": "Bluetooth",
      "uri": "bluetooth",
      "active": false,
      "controls": [],
      "state": {
        "connected": false,
        "user_name": null,
        "connection_id": null,
        "name": null,
        "icon": null,
        "address": null
      }
    },
    {
      "__model__": "Source",
      "name": "Library",
      "uri": "local",
      "active": false,
      "controls": [
        "seek",
        "play",
        "pause",
        "next",
        "previous",
        "repeat",
        "shuffle",
        "favourite"
      ],
      "state": {
        "connected": false,
        "user_name": null,
        "connection_id": null,
        "name": null,
        "icon": null,
        "address": null
      }
    },
    {
      "__model__": "Source",
      "name": "Storage",
      "uri": "storage",
      "active": false,
      "controls": [
        "seek",
        "play",
        "pause",
        "next",
        "previous",
        "repeat",
        "shuffle",
        "favourite"
      ],
      "state": {
        "connected": false,
        "user_name": null,
        "connection_id": null,
        "name": null,
        "icon": null,
        "address": null
      }
    },
    {
      "__model__": "Source",
      "name": "Multiroom",
      "uri": "multiroom",
      "active": false,
      "controls": [],
      "state": {
        "connected": false,
        "user_name": null,
        "connection_id": null,
        "name": null,
        "icon": "speaker",
        "address": null
      }
    },
    {
      "__model__": "Source",
      "name": "Tuner",
      "uri": "tuner",
      "active": false,
      "controls": [
        "next",
        "previous",
        "repeat",
        "shuffle"
      ],
      "state": {
        "connected": false,
        "user_name": null,
        "connection_id": null,
        "name": null,
        "icon": null,
        "address": null
      }
    },
    {
      "__model__": "Source",
      "name": "Line In",
      "uri": "linein",
      "active": false,
      "controls": [],
      "state": {
        "connected": false,
        "user_name": null,
        "connection_id": null,
        "name": null,
        "icon": null,
        "address": null
      }
    },
    {
      "__model__": "Source",
      "name": "USB DAC",
      "uri": "usbdac",
      "active": false,
      "controls": [],
      "state": {
        "connected": false,
        "user_name": null,
        "connection_id": null,
        "name": null,
        "icon": null,
        "address": null
      }
    }
  ]
}
```

</ApiCollapse>

### source.get_state {.sr-only}

<ApiCollapse heading="source.get_state">
<template #title>source.get_state</template>

Gets the selected source.

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "source.get",
  "id": 3
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "__model__": "Source",
    "name": "Airplay",
    "uri": "shairportsync",
    "active": false,
    "controls": [],
    "state": {
      "connected": false,
      "user_name": null,
      "connection_id": null,
      "name": null,
      "icon": null,
      "address": null
    }
  }
}
```

</ApiCollapse>

### source.set_state {.sr-only}

<ApiCollapse heading="source.set_state">
<template #title>source.set_state</template>

Sets the source to the selected source.

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "source.set",
  "params": {
    "uri": "shairportsync"
  },
  "id": 3
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": true
}
```

</ApiCollapse>

<!-- API Block Ends -->
