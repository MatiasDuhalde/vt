import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headset',
  standalone: true,
  imports: [],
  templateUrl: './headset.component.html',
  styleUrl: './headset.component.scss',
})
export class HeadsetComponent {
  @Input() name!: string;
  @Input() imagePath!: string;
}
