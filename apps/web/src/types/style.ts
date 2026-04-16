export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type FontFamily = 'sans' | 'serif' | 'mono';
export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';

export interface TextStyle {
  color: string;
  fontSize: string;
  fontWeight: FontWeight;
  textAlign: TextAlign;
  fontFamily: FontFamily;
  isItalic: boolean;
  isUnderline: boolean;
  isUppercase: boolean;
}