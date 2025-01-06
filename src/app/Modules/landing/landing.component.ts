import { Component } from '@angular/core';
import { AccordionModule } from "../../Shared/accordion/accordion.module";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
