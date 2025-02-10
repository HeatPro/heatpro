import { Problem } from '@/components/ui/HeatProComponents/SignaledProblemCard';
import { Part } from '@/components/ui/HeatProComponents/PartsCard';
import * as ImagePicker from 'expo-image-picker';

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

export interface InterventionData {
  problems: Problem[];
  verifications: string[];
  partsReplaced: Part[];
  partsOrdered: Part[];
  comment: string;
  media: { icon: string; color?: string; }[];
}

export interface Part {
  id: number;
  name: string;
  reference: string;
  file: ImagePicker.ImagePickerAsset | null;
}

export default types;