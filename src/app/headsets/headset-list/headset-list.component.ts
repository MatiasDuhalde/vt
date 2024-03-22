import { Component } from '@angular/core';
import { HeadsetComponent } from './headset/headset.component';
import { ReferenceLinkComponent } from '../../references/reference-link/reference-link.component';

@Component({
  selector: 'app-headset-list',
  standalone: true,
  imports: [HeadsetComponent, ReferenceLinkComponent],
  templateUrl: './headset-list.component.html',
  styleUrl: './headset-list.component.scss',
})
export class HeadsetListComponent {}
