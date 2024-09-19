import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import { ContentComponent } from '../content/content.component';

@NgModule({
  declarations: [EmptyComponent],
  imports: [CommonModule, ContentComponent],
  exports: [EmptyComponent],
})
export class EmptyModule {}
