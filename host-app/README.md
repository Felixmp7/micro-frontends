# Host App

This is the main application that orchestrates and consumes the microfrontends.

## Technologies Used

- React + TypeScript
- Vite
- Styled-components
- Context API for language management
- Vitest for testing

## Architecture

- By-type structure: `components/`, `hooks/`, `context/`, `adapters/`, `services/`.
- Adapters serve as bridges between the host and the microfrontends.
- Uses custom hooks and contexts to manage global state.