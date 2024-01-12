import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card',
  templateUrl: 'feature-card.component.html',
  styleUrls: ['feature-card.component.css'],
})
export class FeatureCard {
  @Input()
  SubHeading: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.'
  @Input()
  Heading: string = 'Lorem ipsum'
  constructor() {}
}
