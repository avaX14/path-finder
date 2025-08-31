# Software Sauna Code Challenge

This project is a **Path Finder App** that calculates and visualizes a walk path based on predefined rules.  
The application is built with **TypeScript + React**, focusing on clean code, modular design, and problem-solving.


## 🚀 Features

- Visualizes a pathfinding algorithm on a grid
- Supports dynamic start/end points
- Handles obstacles and shortest path calculation
- Clean and modular architecture
- Written in TypeScript for type safety


## 🛠️ Tech Stack

- **React**: ^19.1.1  
- **Vite**: ^4.3.9  
- **TypeScript**: ~5.8.3  
- **Tailwind CSS**: ^3.4.0  
- **Jest**: ^29.x (unit & acceptance testing)  
- **Node.js**: 18 (recommended)


## 📂 Project Structure
src/
├── components/ # Reusable UI components
├── utils/ # Pathfinding and helper logic
├── assets/ # Images, icons, etc.
├── constants/ # Centralized constants
├── types/ # TypeScript type definitions
├── validations/ # Input and schema validations
└── App.tsx # Main entry point

tests/
├── acceptance-tests # High-level integration/acceptance tests
└── unit-tests # Low-level unit tests

## Installation

```bash
git clone https://github.com/avaX14/path-finder.git
cd path-finder
npm install
npm start
```

## Testing
```bash
npm test
```

## Demo

### Selecting valid map

![App Demo](./src/assets/valid-map.gif)


### Selecting invalid map

![App Demo](./src/assets/invalid-map.gif)

### Creating custom maps

![App Demo](./src/assets/custom-map1.gif)
![App Demo](./src/assets/custom-map2.gif)
