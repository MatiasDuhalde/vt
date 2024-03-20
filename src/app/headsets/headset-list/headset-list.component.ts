import { Component } from '@angular/core';
import { HeadsetComponent } from './headset/headset.component';

@Component({
  selector: 'app-headset-list',
  standalone: true,
  imports: [HeadsetComponent],
  templateUrl: './headset-list.component.html',
  styleUrl: './headset-list.component.scss',
})
export class HeadsetListComponent {}
