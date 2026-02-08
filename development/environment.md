---
outline: deep
---
# Environment

Once you have setup the Raspberry Pi and connected to your network, you can then SSH to the Pi from your terminal of your choice using the standard `pi` as username and `raspberry` as password.

Assuming you are in `/home/pi` directory, you can then follow the steps below
Stopping the existing berryaudio service using the following command:


## Backend
```bash
sudo systemctl stop berryaudio.service
source env/bin/activate
berryaudio -v   # -v is the verbose argument and runs and shows debug messages as well

```


## Frontend

You will need to install nodejs if you do not already have it.
```bash
sudo apt-get install nodejs npm
```

### Development

```bash
cd berryaudio/web/frontend/
npm install
npm run dev

```

Frontend will now be accessible on http://<your_ip>:5173

### Build

```bash
npm run build

```

Frontend will now be accessible on http://berryaudio.local