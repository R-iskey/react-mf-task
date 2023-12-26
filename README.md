# Picsart Task - Micro Frontends with Nx and React.js

### Description
This project demonstrates the implementation of micro frontends using Nx and React.js. It showcases a simple assignment as an example of my skills in React.js and web development.

### Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Environment](#environment)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Solutions & Decisions](#solutions--decisions)

### Features
- **Home Page**
  - Displays a list of todos
  - Allows creation, deletion, and toggling of todos
- **Users Page**
  - Shows a list of users
  - Enables user deletion
- **Users Detail Page**
  - Provides detailed user information
  - Includes a back button for navigation

### Tech Stack
- React.js
- Typescript
- Nx (Webpack Module Federation)
- ChakraUI
- SWR

### Environment
- Node.js v18.x
- npm v8

### Installation
Ensure Node.js and npm are installed. Run `yarn install` to set up the necessary dependencies.

### Usage
- For running specific apps: `npx nx serve host`, `npx nx serve {home|users}`
- For running host with remotes: `yarn serve-all`
- For building the project: `yarn build`
- For bundle analysis: `yarn analyze:prod:stats`

### Folder Structure
The project structure adheres to NX best practices ([NX Concepts](https://nx.dev/concepts/more-concepts/applications-and-libraries)).
```bash
/project-root
|-- apps
|   |-- home # remote app home
|   |-- host # host app
|   |-- users # remote app users
|-- lib
|   |-- home # home app specific components
|   |-- users # users app specific components
|   |-- shared # shared components and services
|   |-- ui # shared low-level components
|-- dist # built application folder
```

### Solutions & Decisions
- **Decision 1: Using NX Monorepo**
  - Simplifies managing all apps in one place

- **Decision 2: SWR Implementation**
  - Improves performance and manages HTTP cache for reduced API requests
  - Provides optimistic updates

- **Decision 3: Chakra UI Integration**
  - Utilizes production-ready components
  - Note: Consideration for custom UI library due to Chakra UI's bundle size

- **Decision 4: No State Management**
  - Utilizes ThemeProvider (React Context) from ChakraUI for theme switching

### Solution Details
The project demonstrates the use of Webpack module federation to create independently deployable micro frontends, aiming to speed up build commands and improve development efficiency.

The application comprises four libraries: `home`, `users`, `shared`, and `ui`, showcasing a system created by two teams (`home` and `users`).

#### Serving Locally
- `nx serve host`: Builds all remotes and restores them from cache for static viewing.
- `nx serve host --devRemotes=home,users`: Builds and starts dev servers for `home` and `users`.

**Read More:** [Guide on Module Federation and Faster Builds](https://nx.dev/module-federation/faster-builds)

