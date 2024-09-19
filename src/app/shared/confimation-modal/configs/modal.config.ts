import { InjectionToken } from '@angular/core';
import { ModalConfig, ModalToken, ThemeType } from './types';

export const ModalThemeMap = new Map<ThemeType, string>([
  ['success', '#009900'],
  ['error', '#ff0000'],
  ['general', '#242424'],
  ['warn', '#FFCC00'],
]);

export const DefaultConfig: Partial<ModalConfig> = {
  successColor: '#009900 ',
  errorColor: '#ff0000 ',
  warnColor: '#FFCC00 ',
  generalColor: '#242424',
  type: 'general',
  modalWidth: 'auto',
  disableClose: false,
  isLoader: false,
  loaderText: 'Loading ...',
  color: 'primary',
  onConfirm: () => {},
  onCancel: () => {},
};

export const CONFIRMATION_MODAL_CONFIG = new InjectionToken<ModalToken>(
  'ModalToken'
);
