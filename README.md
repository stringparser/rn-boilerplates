# React Native Boilerplates Monorepo

This monorepo contains multiple React Native boilerplate projects, managed with **npm workspaces**. Each boilerplate is set up with TypeScript, unit/integration testing (Jest), and end-to-end testing (Maestro).

## Pre-requisites

- **Node.js**: Install node.js@v22. You can use [`nvm`](https://github.com/nvm-sh/nvm) for example
- **JDK**: install the Java Development Kit (needed for android and maestro). You can find instructions [here](https://reactnative.dev/docs/set-up-your-environment?platform=android#jdk)
- **Maestro CLI**: For E2E testing, install Maestro globally:
  - macOS:
    ```sh
    brew tap mobile-dev-inc/tap
    brew install maestro
    ```
  - Other platforms: See [Maestro Install Guide](https://maestro.mobile.dev/install)
  - Check your version: `maestro --version`

## Getting Started

Each subfolder is a different react-native project

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Navigate to a boilerplate:**

3. **Run the app:**
   - See each package's README for platform-specific commands.

## Testing

### Unit/Integration Tests (Jest)
- Run from any package:
  ```sh
  npm test
  ```

### End-to-End Tests (Maestro)
- Install Maestro CLI globally (see https://maestro.mobile.dev/install)
- Run from any package:
  ```sh
  npm run test:e2e
  ```

## Adding New Boilerplates
- Scaffold a new project on the root directory
- Add folder it to the `workspaces` array in the root `package.json` if needed

## Project Rules

- **Workspace Usage:** All boilerplates should be placed in the `packages/` directory and registered in the root `package.json` workspaces array.
- **Dependency Pinning:** All dependencies and devDependencies in each package must be pinned to exact versions for reproducible installs.
- **E2E Flows:** Each package must have its own `maestro/` directory for E2E flows.
- **Testing:** Use Jest for unit/integration tests and Maestro for E2E tests. Keep test scripts up to date in each package's `package.json`.
- **Documentation:** Update the README in each package with relevant setup, test, and usage instructions.

### Architecture Guidelines

- **Feature-Based Structure:**
  - Each project should use a top-level `features/` folder. Each subfolder (e.g., `features/<module-name>/`) represents a distinct part of the app.
  - Inside each feature module: place `screens/`, `components/`, and `hooks/` specific to that feature.
  - Example:
    ```
    src/features/
      user/
        screens/
        components/
        hooks/
      settings/
        screens/
        components/
        hooks/
    ```
  - Lower-level, shared components should live in a top-level `components/` folder outside of `features/`.
  - If the `features/` folder seems cumbersome you can also place all the feature folders at the top-level
  ```sh
    src/
      app/ # routing
      components/
      user/
        screens/
        components/
        hooks/
      settings/
        screens/
        components/
        hooks/
   ```

- **Routing Separation:**
  - All navigation logic should live in a dedicated folder (e.g., `app/` same as Expo Router has).
  - This folder is responsible for importing the necessary screens and assembling the app's navigation structure.
  - Keeping navigation logic in one place makes it easier to change and maintain.

- **Component & Navigation Usage:**
  - Screens and components should not use navigation directly.
  - If navigation is needed, use a dedicated hook (not the router's hook directly) or pass a callback as a prop.

**Rationale:**
- The feature folder structure keeps the app modular, making it easier to scale and maintain.
- Separating routing logic ensures all navigation is centralized, simplifying changes and reducing coupling.

---

For more details, see each boilerplate's README.