import { Component } from '@angular/core';
import { HeadsetListComponent } from './headset-list/headset-list.component';

@Component({
  selector: 'app-headsets',
  standalone: true,
  imports: [HeadsetListComponent],
  templateUrl: './headsets.component.html',
  styleUrl: './headsets.component.scss',
})
export class HeadsetsComponent {}
