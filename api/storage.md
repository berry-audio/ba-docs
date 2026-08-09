# Storage

API documentation for Storage.

## Methods

<!-- API Block Starts -->

### storage.add_shared {.sr-only}

<ApiCollapse heading="storage.add_shared">
<template #title>storage.add_shared</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "storage.add_shared",
  "params": {
    "ip": "192.168.10.204",
    "username": "varun",
    "password": "varun"
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### storage.directory {.sr-only}

<ApiCollapse heading="storage.directory">
<template #title>storage.directory</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "storage.directory",
  "params": {
    "uri": "storage"
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### storage.info {.sr-only}

<ApiCollapse heading="storage.info">
<template #title>storage.info</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "storage.info",
  "params": {
    "dev": "/dev/sda1"
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### storage.list_shares {.sr-only}

<ApiCollapse heading="storage.list_shares">
<template #title>storage.list_shares</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "storage.list_shares",
  "params": {},
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### storage.list_smb_shared {.sr-only}

<ApiCollapse heading="storage.list_smb_shared">
<template #title>storage.list_smb_shared</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "storage.list_smb_shared",
  "params": {},
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### storage.mount {.sr-only}

<ApiCollapse heading="storage.mount">
<template #title>storage.mount</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "storage.mount",
  "params": {
    "dev": "/dev/sda1"
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### storage.mount_shared {.sr-only}

<ApiCollapse heading="storage.mount_shared">
<template #title>storage.mount_shared</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "storage.mount_shared",
  "params": {
    "devs": [
      "smb://192.168.10.204/Varun Gujjar’s Public Folder"
    ]
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### storage.share {.sr-only}

<ApiCollapse heading="storage.share">
<template #title>storage.share</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "storage.share",
  "params": {
    "uri": "storae:/media/pi/VARUNS 256G/Unsorted Media/1000 Top Hits 80's"
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### storage.unmount {.sr-only}

<ApiCollapse heading="storage.unmount">
<template #title>storage.unmount</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "storage.unmount",
  "params": {
    "dev": "/dev/sda1"
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### storage.unmount_shared {.sr-only}

<ApiCollapse heading="storage.unmount_shared">
<template #title>storage.unmount_shared</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "storage.unmount_shared",
  "params": {
    "dev": "smb://192.168.10.204/varun"
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### storage.unshare {.sr-only}

<ApiCollapse heading="storage.unshare">
<template #title>storage.unshare</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "storage.unshare",
  "params": {
    "uri": "storage:/media/pi/VARUNS 256G/Unsorted Media/1000 Top Hits 80's"
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

<!-- API Block Ends -->
