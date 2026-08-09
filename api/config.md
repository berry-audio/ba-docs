# Config

API documentation for Config.

## Methods

<!-- API Block Starts -->

### config.get {.sr-only}

<ApiCollapse heading="config.get">
<template #title>config.get</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "config.get",
  "params": {},
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### config.set {.sr-only}

<ApiCollapse heading="config.set">
<template #title>config.set</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "config.set",
  "params": {
    "config": {
      "mixer": {
        "initial_volume": 100
      }
    }
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

<!-- API Block Ends -->
