# Mixer

The built-in Mixer extension enables DAC volume control and mute/unmute functionality, automatically using on-chip hardware volume control when available or falling back to software control.

[https://github.com/berry-audio/berryaudio/tree/master/mixer](https://github.com/berry-audio/berryaudio/tree/master/mixer)

## Methods

<!-- API Block Starts -->

### get_volume {.sr-only}

<ApiCollapse heading="get_volume">
<template #title>get_volume</template>
<template #description>
    Gets the current volume status.
</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "mixer.get_volume",
  "id": 3
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": 66
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
            <td>result</td>
            <td>number</td>
            <td>Current volume</td>
        </tr>
    </tbody>
</table>
</ApiCollapse>
<!-- End -->

<!-- API Block Starts -->

### set_volume {.sr-only}

<ApiCollapse heading="set_volume">
<template #title>set_volume</template>
<template #description>
    Sets the current mixer volume.
</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "mixer.set_volume",
  "params": {
    "volume": 60
  },
  "id": 5
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
            <td>volume</td>
            <td>number</td>
            <td>Yes</td>
            <td>0-100</td>
            <td>Mixer volume</td>
        </tr>
    </tbody>
</table>

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": true
}
```

Returns `true` if set else `false` if there was a problem
</ApiCollapse>

<!-- End -->

<!-- API Block Starts -->

### get_mute {.sr-only}

<ApiCollapse heading="get_mute">
<template #title>get_mute</template>
<template #description>
    Gets the current mute status.
</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "mixer.get_mute",
  "id": 5
}
```

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": false
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
            <td>result</td>
            <td>boolean</td>
            <td>Mute status</td>
        </tr>
    </tbody>
</table>
</ApiCollapse>
<!-- End -->

<!-- API Block Starts -->

### set_mute {.sr-only}

<ApiCollapse heading="set_mute">
<template #title>set_mute</template>
<template #description>
    Sets the current mixer mute.
</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "mixer.set_mute",
  "params": {
    "mute": true
  },
  "id": 5
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
            <td>mute</td>
            <td>boolean</td>
            <td>Yes</td>
            <td><code>true</code></td>
            <td>Sets Mute</td>
        </tr>
         <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><code>false</code></td>
            <td>Sets Un-Mute</td>
        </tr>
    </tbody>
</table>

<ApiResponse/>

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "result": true
}
```

Returns `true` if set else `false` if there was a problem
</ApiCollapse>

<!-- End -->




## Events

<!-- Event Block Starts -->
### volume_changed {.sr-only}

<EventCollapse heading="volume_changed" method="EVENT">
<template #title>volume_changed</template>
<template #description>
    Event triggered when a volume changes
</template>

```json
{
    "event": "volume_changed",
    "volume": 64
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
        <td>volume</td>
        <td>number</td>
        <td>Volume state</td>
        </tr>
    </tbody>
</table>
</EventCollapse>
<!-- End -->


<!-- Event Block Starts -->
### mixer_mute {.sr-only}

<EventCollapse heading="mixer_mute" method="EVENT">
<template #title>mixer_mute</template>
<template #description>
    Event triggered when a mixer is muted or un-muted
</template>

```json
{
    "event": "mixer_mute",
    "mute": true
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
        <td>mute</td>
        <td>boolean</td>
        <td>Mute Status</td>
        </tr>
    </tbody>
</table>
</EventCollapse>
<!-- End -->