---
---

# Storage

Berryaudio includes a storage browser. All SD cards, external drives, USB drives and network-attached storage (NAS) that are mounted will appear here automatically.

The default drive is **Internal**, which is the Raspberry Pi's own SD card. Where available, the available space for each drive is shown next to it.

If a drive doesn't show up automatically, click the **Refresh** button in the top right corner. To browse a drive, click on it.

## Adding a NAS / Shared Folders

Berryaudio supports adding external NAS storage and shared drives from other computers.

1. Click the **Add Network Drive** button in the top right corner.
2. Enter the details of the SMB share you want to connect to:
   - IP address or hostname
   - Username
   - Password
3. Click **Connect**.
4. Select the folders you would like to add.

> [!NOTE]
> Make sure the host device is on the same network and has file sharing enabled.

The added drives now appear in the main storage listing, and you can browse them like any other storage.

> [!WARNING]
> All network storage is mounted on boot. If a NAS is offline during the boot process, its storage is disabled.

## Sharing Folders

By default, the **Internal** folder is shared over the network, so you can add your music to it from another computer. You can also share individual folders inside Internal:

1. Select the folder.
2. Open the **Actions** menu (`...`).
3. Select **Share**.

### Securing Your Shared Folders

You can require a username and password to access all folders shared by Berryaudio:

1. Go to **Settings > Storages**.
2. Enter a username and password.

You will now be prompted to authenticate on your windows / mac / linux to access folders on Berryaudio

## Using Storage as Your Library

You can browse storage and play music from it directly, or add it to your library:

1. Select a folder.
2. Open the **Actions** menu (`...`).
3. Select **Add to Library**.

For more information, see the [Library](/audio-source/library) page.
