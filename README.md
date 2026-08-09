# BerryAudio Documentation

Documentation for **BerryAudio**, built with VitePress.

## Installation

Install the dependencies:

```bash
npm install
```

## Bruno Collection

The Bruno API collection is located in:

```
bruno/
```

The collection is used to generate the API documentation.

## Development

Generate the API documentation:

```bash
npm run docs:bruno
```

Start the documentation site:

```bash
npm run docs:dev
```

The documentation will be available at:

```
http://localhost:5173
```

## Build

Build the documentation for production:

```bash
npm run docs:build
```

Preview the production build:

```bash
npm run docs:preview
```

## Commands

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run docs:dev` | Start the documentation site |
| `npm run docs:bruno` | Generate API documentation from `bruno/` |
| `npm run docs:build` | Build the documentation |
| `npm run docs:preview` | Preview the production build |