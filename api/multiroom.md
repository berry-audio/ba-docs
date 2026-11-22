# Multiroom

API documentation for Multiroom.

## Methods

<!-- API Block Starts -->

### multiroom.get_status {.sr-only}

<ApiCollapse heading="multiroom.get_status">
<template #title>multiroom.get_status</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "multiroom.get_status",
  "params": {
    "ip": "192.168.10.18"
  },
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### multiroom.servers {.sr-only}

<ApiCollapse heading="multiroom.servers">
<template #title>multiroom.servers</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "multiroom.servers",
  "params": {},
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### snapcast.disconnect {.sr-only}

<ApiCollapse heading="snapcast.disconnect">
<template #title>snapcast.disconnect</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "snapcast.disconnect",
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

### snapcast.set_volume {.sr-only}

<ApiCollapse heading="snapcast.set_volume">
<template #title>snapcast.set_volume</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "multiroom.set_volume",
  "params": {
    "client_id": "88:a2:9e:1b:0f:16",
    "volume": 100,
    "mute": false
  },
  "id": 3
}
```

<ApiResponse/>

</ApiCollapse>

<!-- API Block Ends -->
