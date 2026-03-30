import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
import {Appearance, ColorSchemeName} from 'react-native';
import {
  ColorScheme,
  ThemePreference,
  ThemeColors,
  ThemeGradients,
  lightColors,
  darkColors,
  lightGradients,
  darkGradients,
} from '../tokens/theme';

// ------------------- CONTEXT TYPES -------------------  //

export interface ThemeContextValue {
  colorScheme: ColorScheme;
  themePreference: ThemePreference;
  colors: ThemeColors;
  gradients: ThemeGradients;
  isDark: boolean;
  setTheme: (preference: ThemePreference) => void;
  toggleTheme: () => void;
}

// ------------------- CONTEXT -------------------  //

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ------------------- PROVIDER PROPS -------------------  //

export interface ThemeProviderProps {
  children: ReactNode;
  /** Initial theme preference. Defaults to 'system'. */
  defaultPreference?: ThemePreference;
  /** Callback when theme preference changes (for external persistence). */
  onThemeChange?: (preference: ThemePreference) => void;
}

// ------------------- PROVIDER -------------------  //

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultPreference = 'system',
  onThemeChange,
}) => {
  const [themePreference, setThemePreferenceState] =
    useState<ThemePreference>(defaultPreference);

  // Track system color scheme
  const [systemScheme, setSystemScheme] = useState<ColorScheme>(() => {
    const scheme = Appearance.getColorScheme();
    return scheme === 'dark' ? 'dark' : 'light';
  });

  // Listen for system theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(
      ({colorScheme}: {colorScheme: ColorSchemeName}) => {
        setSystemScheme(colorScheme === 'dark' ? 'dark' : 'light');
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);

  // Resolve actual color scheme based on preference
  const colorScheme: ColorScheme = useMemo(() => {
    if (themePreference === 'system') {
      return systemScheme;
    }
    return themePreference;
  }, [themePreference, systemScheme]);

  const colors: ThemeColors = useMemo(() => {
    return colorScheme === 'dark' ? darkColors : lightColors;
  }, [colorScheme]);

  const gradients: ThemeGradients = useMemo(() => {
    return colorScheme === 'dark' ? darkGradients : lightGradients;
  }, [colorScheme]);

  const setTheme = useCallback(
    (preference: ThemePreference) => {
      setThemePreferenceState(preference);
      onThemeChange?.(preference);
    },
    [onThemeChange],
  );

  const toggleTheme = useCallback(() => {
    const next: ThemePreference = colorScheme === 'light' ? 'dark' : 'light';
    setThemePreferenceState(next);
    onThemeChange?.(next);
  }, [colorScheme, onThemeChange]);

  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      colorScheme,
      themePreference,
      colors,
      gradients,
      isDark: colorScheme === 'dark',
      setTheme,
      toggleTheme,
    }),
    [colorScheme, themePreference, colors, gradients, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// ------------------- HOOKS -------------------  //

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const useThemeColors = (): ThemeColors => {
  const {colors} = useTheme();
  return colors;
};

export const useThemeGradients = (): ThemeGradients => {
  const {gradients} = useTheme();
  return gradients;
};

export const useIsDarkMode = (): boolean => {
  const {isDark} = useTheme();
  return isDark;
};

export default ThemeContext;
