# hikayat-daily-ui

A React Native UI component library with design tokens, theming (light/dark), and glassmorphism support.

## Installation

```bash
yarn add @hikayat/hikayat-daily-ui
# or
npm install @hikayat/hikayat-daily-ui
```

### Peer Dependencies

```bash
yarn add react-native-linear-gradient react-native-svg
```

> `react-native-linear-gradient` and `react-native-svg` are optional — only needed if you use `GlassContainer` or SVG-based components.

### Font Setup

This library uses the **Roboto** font family. Link the fonts in your React Native project:

- `Roboto-Light`
- `Roboto-Regular`
- `Roboto-Medium`
- `Roboto-Bold`
- `Roboto-Black`

## Quick Start

Wrap your app with `ThemeProvider`:

```tsx
import { ThemeProvider } from '@hikayat/hikayat-daily-ui';

export default function App() {
  return (
    <ThemeProvider defaultPreference="system">
      <YourApp />
    </ThemeProvider>
  );
}
```

Use components and tokens:

```tsx
import {
  Text,
  Button,
  TextInput,
  Spacer,
  Colors,
  spacing,
  useThemeColors,
} from '@hikayat/hikayat-daily-ui';

function MyScreen() {
  const colors = useThemeColors();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: spacing.md }}>
      <Text variant="h2" weight="bold">Hello World</Text>
      <Spacer unit={16} />
      <TextInput label="Email" placeholder="you@example.com" />
      <Spacer unit={12} />
      <Button title="Sign In" onPress={() => {}} variant="primary" fullWidth />
    </View>
  );
}
```

## What's Included

### Design Tokens

| Token | Description |
|-------|-------------|
| `Colors` | 80+ semantic color tokens across 14 palettes |
| `Gradients` | 50+ gradient presets (glass, AI, status, overlay) |
| `spacing` | 4px grid system (xxs through massive) |
| `borderRadius` | Consistent border radius scale |
| `typography` | 30+ Material Design 3-inspired text presets |
| `fontFamily` | Roboto font family definitions |
| `fontSize` | xs (10) through 5xl (40) |
| `iconSize` / `avatarSize` | Standard size scales |
| `hitSlop` | Accessibility touch target presets |

### Theme System

- Light and dark themes with 60+ semantic color properties
- `ThemeProvider` with system preference detection
- `useThemeColors()`, `useThemeGradients()`, `useIsDarkMode()` hooks
- `onThemeChange` callback for external persistence (Redux, AsyncStorage, etc.)

### Components

| Component | Description |
|-----------|-------------|
| `Text` | Semantic typography with 8 variants and 7 weights |
| `Button` | 6 variants (primary, secondary, action, outline, ghost, danger), 3 sizes, loading state |
| `TextInput` | Label, error, icon slots, focus state, theme-aware |
| `Toggle` | Theme-aware switch with 3 sizes |
| `Spacer` | Vertical/horizontal spacing with preset sizes |
| `Divider` | Horizontal/vertical separators |
| `GlassContainer` | iOS glassmorphism with 7 variants (accepts optional LinearGradient) |
| `Modal` | 4 types (success, error, warning, info) with primary/secondary buttons |

## Theme Persistence

The `ThemeProvider` is storage-agnostic. Use `onThemeChange` to persist:

```tsx
<ThemeProvider
  defaultPreference={savedPreference}
  onThemeChange={(pref) => AsyncStorage.setItem('theme', pref)}
/>
```

## Color Palettes

- **Primary** — Slate Blue-Gray (#7D93A0)
- **Secondary** — Slate Purple (#7D82A0)
- **Tertiary** — Slate Teal (#7DA09C)
- **Success** — Sage Green (#5CA37E)
- **Warning** — Muted Gold (#C3B43C)
- **Error** — Terracotta (#B85C47)
- **Info** — Steel Blue (#4A6E84)
- **AI Teal** — Aurora (#14B8A6)
- **AI Purple** — Aurora (#A855F7)
- **AI Gold** — Amber (#F59E0B)
- **AI Violet** — Deep (#7C3AED)

## License

MIT
