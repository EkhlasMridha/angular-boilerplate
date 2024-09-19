import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalThemeMap } from '../configs/modal.config';
import { ModalConfig } from '../configs/types';
import { ConfirmationPopupService } from '../confirmation-popup.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  modalConfig: Partial<ModalConfig>;
  typeColor: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) config: Partial<ModalConfig>,
    private ref: MatDialogRef<ConfirmationPopupService>
  ) {
    this.modalConfig = config;
    this.typeColor = this.setModalColor(this.modalConfig);
  }

  primaryButton(event: Event) {
    this.modalConfig?.onConfirm?.(event);
    this.ref.close();
  }
  secodaryButton(event: Event) {
    this.modalConfig?.onCancel?.(event);
    this.ref.close();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.modalConfig.onDestroy?.();
  }

  private setModalColor(config: Partial<ModalConfig>) {
    return ModalThemeMap.get(config.type ?? 'general')!;
  }
}
