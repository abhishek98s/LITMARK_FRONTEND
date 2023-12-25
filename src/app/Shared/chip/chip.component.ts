import { Component, Input } from '@angular/core';
import { Chip } from 'src/app/Model/folder';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() chip!: Chip;
}
