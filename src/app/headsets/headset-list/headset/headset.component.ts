import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-headset',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './headset.component.html',
  styleUrl: './headset.component.scss',
})
export class HeadsetComponent {
  @Input() name!: string;
  @Input() imagePath!: string;
}
