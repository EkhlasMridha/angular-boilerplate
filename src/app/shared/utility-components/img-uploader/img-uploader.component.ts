import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DEFAULT_IMAGE_PATH } from 'app-utils/files.const';

@Component({
  selector: 'img-uploader',
  standalone: true,
  imports: [],
  templateUrl: './img-uploader.component.html',
  styleUrl: './img-uploader.component.scss',
})
export class ImgUploaderComponent {
  defaultImage = DEFAULT_IMAGE_PATH;
  @Input() imagePath: string = DEFAULT_IMAGE_PATH;

  @Output() onFileChange = new EventEmitter<File>();

  @ViewChild('uplaoderInput') uplaoderInput?: ElementRef<HTMLInputElement>;

  onUploadFile() {
    this.uplaoderInput?.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const selectedFile: File | null =
      (event.target as HTMLInputElement).files?.[0] ?? null;

    if (selectedFile) {
      const reader = new FileReader();
      this.onFileChange.emit(selectedFile);
      reader.onload = (e: any) => {
        this.imagePath = e.target?.result;
      };

      reader.readAsDataURL(selectedFile);
    }
  }
}
