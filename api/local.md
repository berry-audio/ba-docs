# Local

API documentation for Local.

## Methods

<!-- API Block Starts -->

### local.clean {.sr-only}

<ApiCollapse heading="local.clean">
<template #title>local.clean</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "local.clean",
  "params": {},
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### local.directory {.sr-only}

<ApiCollapse heading="local.directory">
<template #title>local.directory</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "local.directory",
  "params": {
    "uri": "local:artist:1:tracks",
    "limit": 1,
    "offset": 0
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### local.scan {.sr-only}

<ApiCollapse heading="local.scan">
<template #title>local.scan</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "local.scan",
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### local.scan_artists {.sr-only}

<ApiCollapse heading="local.scan_artists">
<template #title>local.scan_artists</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "local.scan_artists",
  "params": {},
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### local.search {.sr-only}

<ApiCollapse heading="local.search">
<template #title>local.search</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "local.search",
  "params": {
    "query": "aria"
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

<!-- API Block Ends -->
