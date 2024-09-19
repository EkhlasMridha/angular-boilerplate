import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfirmationPopupService } from './confirmation-popup.service';
import { ModalConfig } from './configs/types';
import {
  CONFIRMATION_MODAL_CONFIG,
  DefaultConfig,
} from './configs/modal.config';

export const DefaultComponentConfig: Partial<ModalConfig> = {
  ...DefaultConfig,
};

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [ConfirmationPopupService],
})
export class ConfimationModalModule {
  static forChild(
    config: Partial<ModalConfig> = {}
  ): ModuleWithProviders<ConfimationModalModule> {
    return {
      ngModule: ConfimationModalModule,
      providers: [
        {
          provide: CONFIRMATION_MODAL_CONFIG,
          useValue: {
            default: DefaultComponentConfig,
            config,
          },
        },
      ],
    };
  }
}
