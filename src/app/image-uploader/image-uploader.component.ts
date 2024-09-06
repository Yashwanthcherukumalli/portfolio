import { Component } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss'
})
export class ImageUploaderComponent {
  imageSrc: any = null;
  zoom: number = 1;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  zoomIn() {
    if (this.zoom < 3) this.zoom += 0.1;
  }

  zoomOut() {
    if (this.zoom > 0.01) this.zoom -= 0.1;
  }

  resetZoom() {
    this.zoom = 1;
  }
}
