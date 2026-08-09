# Playlist

API documentation for Playlist.

## Methods

<!-- API Block Starts -->

### playlist.create {.sr-only}

<ApiCollapse heading="playlist.create">
<template #title>playlist.create</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "playlist.create",
  "params": {},
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### playlist.delete {.sr-only}

<ApiCollapse heading="playlist.delete">
<template #title>playlist.delete</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "playlist.delete",
  "params": {
    "uri": "playlist:2"
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### playlist.directory {.sr-only}

<ApiCollapse heading="playlist.directory">
<template #title>playlist.directory</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "playlist.directory",
  "params": {
    "uri": "playlist",
    "limit": 2,
    "offset": 0
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

<!-- API Block Ends -->
