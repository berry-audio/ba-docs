# Bluetooth

API documentation for Bluetooth.

## Methods

<!-- API Block Starts -->

### bluetooth.player.next {.sr-only}

<ApiCollapse heading="bluetooth.player.next">
<template #title>bluetooth.player.next</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.player.next",
  "params": [
    "/org/bluez/hci0/dev_8C_85_90_C9_1D_18"
  ],
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### bluetooth.player.pause {.sr-only}

<ApiCollapse heading="bluetooth.player.pause">
<template #title>bluetooth.player.pause</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.player.pause",
  "params": [
    "/org/bluez/hci0/dev_8C_85_90_C9_1D_18"
  ],
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### bluetooth.player.play {.sr-only}

<ApiCollapse heading="bluetooth.player.play">
<template #title>bluetooth.player.play</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.player.play",
  "params": [
    "/org/bluez/hci0/dev_8C_85_90_C9_1D_18"
  ],
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### bluetooth.player.prev {.sr-only}

<ApiCollapse heading="bluetooth.player.prev">
<template #title>bluetooth.player.prev</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.player.prev",
  "params": [
    "/org/bluez/hci0/dev_8C_85_90_C9_1D_18"
  ],
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### bluetooth.player.stop {.sr-only}

<ApiCollapse heading="bluetooth.player.stop">
<template #title>bluetooth.player.stop</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.player.stop",
  "params": [
    "/org/bluez/hci0/dev_8C_85_90_C9_1D_18"
  ],
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### bluetooth.player {.sr-only}

<ApiCollapse heading="bluetooth.player">
<template #title>bluetooth.player</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.player",
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### bluetooth.player_pcm {.sr-only}

<ApiCollapse heading="bluetooth.player_pcm">
<template #title>bluetooth.player_pcm</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.player_pcm",
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### bluetooth.adapter_get_state {.sr-only}

<ApiCollapse heading="bluetooth.adapter_get_state">
<template #title>bluetooth.adapter_get_state</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.adapter_get_state",
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### bluetooth.adapter_set_state {.sr-only}

<ApiCollapse heading="bluetooth.adapter_set_state">
<template #title>bluetooth.adapter_set_state</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.adapter_set_state",
  "params": {
    "state": false
  },
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### bluetooth.connect {.sr-only}

<ApiCollapse heading="bluetooth.connect">
<template #title>bluetooth.connect</template>

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

<ApiResponse/>

</ApiCollapse>

### bluetooth.device {.sr-only}

<ApiCollapse heading="bluetooth.device">
<template #title>bluetooth.device</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.device",
  "params": {},
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### bluetooth.device_volume {.sr-only}

<ApiCollapse heading="bluetooth.device_volume">
<template #title>bluetooth.device_volume</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.device_volume",
  "params": {
    "address": "14:4E:FD:88:AE:B1",
    "left": 127,
    "right": 127
  },
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### bluetooth.devices {.sr-only}

<ApiCollapse heading="bluetooth.devices">
<template #title>bluetooth.devices</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "bluetooth.devices",
  "params": {
    "rescan": false
  },
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### bluetooth.disconnect {.sr-only}

<ApiCollapse heading="bluetooth.disconnect">
<template #title>bluetooth.disconnect</template>

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

<ApiResponse/>

</ApiCollapse>

### bluetooth.remove {.sr-only}

<ApiCollapse heading="bluetooth.remove">
<template #title>bluetooth.remove</template>

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

<ApiResponse/>

</ApiCollapse>

### bluetooth.trust {.sr-only}

<ApiCollapse heading="bluetooth.trust">
<template #title>bluetooth.trust</template>

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

<ApiResponse/>

</ApiCollapse>

<!-- API Block Ends -->
