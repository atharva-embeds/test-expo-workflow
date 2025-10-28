# Agent Guidelines for napp

## Build Commands

- **Start dev server**: `npm start` or `expo start`
- **Android**: `npm run android` or `expo start --android`
- **iOS**: `npm run ios` or `expo start --ios`
- **Web**: `npm run web` or `expo start --web`
- **Prebuild**: `npm run prebuild` or `expo prebuild`

## Lint & Format Commands

- **Lint**: `npm run lint` (ESLint + Prettier check)
- **Format**: `npm run format` (ESLint fix + Prettier write)

## Code Style Guidelines

- **TypeScript**: Strict mode enabled, use explicit types
- **Imports**: React first, then React Native components, then local imports
- **Styling**: Prefer NativeWind (Tailwind) classes over StyleSheet when possible
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Fonts**: Use `font-mono` class or `fontFamily: 'monospace'` for consistent typography
- **Error Handling**: Use try/catch for async operations, validate props in components
- **Components**: Export default functions, use functional components with hooks
