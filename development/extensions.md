---
outline: deep
---
# Extensions

Creating extensions is a great way to extend the existing features and functionalities of berryaudio.

To start creating an extension, create a folder in the berryaudio folder called `myextension` (lowercase and no spaces).

Create the following blank files in your folder:

```
berryaudio
|_myextension
    |_ __init__.py      # initialize the extension
    |_ myextension.py   # the extension class itself
    |_ config.yaml      # the extension configurations all configs in here are stored in the db
```

Once your extension is ready you can add it to the `main.py` in the berryaudio folder to the extensions list:

```
berryaudio
|_main.py
```

## main.py

```python
extensions = [
    ...
    "myextension",
]
```

## myextension.py

```python
import logging
logger = logging.getLogger(__name__)

class MyextensionExtension(Actor):
    def __init__(self, name, core, db, config):
        super().__init__()
        self._name = name
        self._core = core
        self._db = db
        self._config = config
    
    async def on_config_update(self, config):
        print(config)
        # when config is saved from the frontend it arrives here
        pass
    
    async def on_start(self):
        # everything you do here starts when berryaudio starts first
        pass
    
    async def on_event(self, message):
        print(message)
        # messages sent to this extension arrive here with the event
        pass
    
    async def on_stop(self):
        # when berryaudio stops gracefully, use this to stop services or exit a thread etc
        pass
    
    def on_function_name(self, param_1, param_2):
        print(param_1, param_2)
        # any function created with the prefix on_ becomes your method and is accessible from the api and be called 
        # http://berryaudio.local/rpc/ using the POST method 
        pass
```

## JSON RPC Request

```python
{
  "jsonrpc": "2.0",
  "method": "myextension.function_name",
  "params": {
    "param_1": "some text",
    "param_2": true
  },
  "id": 3
}
````

While this is just a basic understanding of how an extension works, you can look at other extensions and their implementations to learn more.

For further answers you can use our community forums section to post your queries.
