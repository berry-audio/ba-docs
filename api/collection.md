# Collection

API documentation for Collection.

## Methods

<!-- API Block Starts -->

### collection.directory {.sr-only}

<ApiCollapse heading="collection.directory">
<template #title>collection.directory</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "collection.directory",
  "params": {
    "uri": "collection:favourite",
    "limit": 1,
    "offset": 0
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

### collection.favourite {.sr-only}

<ApiCollapse heading="collection.favourite">
<template #title>collection.favourite</template>

<ApiRequest/>

```json
{
  "jsonrpc": "2.0",
  "method": "collection.favourite",
  "params": {
    "item": {
      "__model__": "Track",
      "uri": "local:/home/pi/Internal/Music/Album/Harbor Atlas - Beat the heat.mp3",
      "name": "Beat the heat",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "local:artist:7",
          "name": "Astral Weaver",
          "sortname": null,
          "albums": [],
          "biography": null,
          "country": null,
          "year": null,
          "genre": null,
          "musicbrainz_id": null,
          "images": [],
          "favourite": false
        }
      ],
      "albums": [
        {
          "__model__": "Album",
          "uri": "local:album:7",
          "name": "Shadowglass Diaries",
          "artists": [],
          "num_tracks": null,
          "num_discs": null,
          "date": null,
          "musicbrainz_id": null,
          "images": [
            {
              "__model__": "Image",
              "uri": "images/album/28ac7a067e474b28ae766b997b4abcdc.jpg",
              "width": null,
              "height": null
            }
          ],
          "favourite": false
        }
      ],
      "composers": [],
      "performers": [],
      "genre": null,
      "track_no": null,
      "disc_no": null,
      "date": null,
      "length": 192705,
      "bitrate": 128000,
      "comment": null,
      "musicbrainz_id": null,
      "images": [
        {
          "__model__": "Image",
          "uri": "images/album/665ba90e29924076ba05b7d082ab6755.jpg",
          "width": null,
          "height": null
        }
      ],
      "last_modified": null,
      "sample_rate": null,
      "audio_codec": null,
      "channels": null,
      "bit_depth": null,
      "size": null,
      "favourite": true
    }
  },
  "id": 5
}
```

<ApiResponse/>

</ApiCollapse>

<!-- API Block Ends -->
