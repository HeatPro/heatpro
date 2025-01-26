export interface IPContextType {
  ipAddress: string;
  setIPAddress: (ip: string) => void;
}

export interface ThemeColors {
  light: string;
  dark: string;
}

// Add default export
const types = {
  IPContextType: {} as IPContextType,
  ThemeColors: {} as ThemeColors,
};

export default types;