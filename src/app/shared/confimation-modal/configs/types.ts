import { ThemePalette } from '@angular/material/core';
export type ThemeType = 'success' | 'warn' | 'error' | 'general';
export interface ModalConfig {
  warnColor: string;
  successColor: string;
  errorColor: string;
  generalColor: string;
  type: ThemeType;
  matIcon: string;
  localIcon: string;
  headerText: string;
  description: string;
  primaryButtonName: string;
  secondaryButtonName: string;
  modalWidth: string;
  disableClose: boolean;
  isLoader: boolean;
  loaderText: string;
  panelClass: string | string[];
  color: ThemePalette;
  onConfirm: (event: any) => any;
  onCancel: (event: any) => any;
  onDestroy: () => void;
}

export interface ModalToken {
  default: ModalConfig;
  config: Partial<ModalConfig>;
}
