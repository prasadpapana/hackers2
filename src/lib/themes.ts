export const themeOptions = [
  { value: 'light', label: 'Light', swatch: '#2563EB' },
  { value: 'dark', label: 'Dark', swatch: '#60A5FA' },
  { value: 'system', label: 'System', swatch: '#64748B' },
  { value: 'civic-blue', label: 'Civic Blue', swatch: '#1D4ED8' },
  { value: 'indian-civic', label: 'Indian Civic', swatch: '#000080' },
  { value: 'midnight', label: 'Midnight', swatch: '#38BDF8' },
  { value: 'forest', label: 'Forest', swatch: '#15803D' },
  { value: 'slate', label: 'Slate', swatch: '#475569' },
] as const;

export type ThemeName = typeof themeOptions[number]['value'];

export const darkThemes: ThemeName[] = ['dark', 'midnight'];
