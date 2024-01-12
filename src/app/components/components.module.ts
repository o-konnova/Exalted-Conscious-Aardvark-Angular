import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Question1 } from './question1/question1.component'
import { FeatureCard } from './feature-card/feature-card.component'

@NgModule({
  declarations: [Question1, FeatureCard],
  imports: [CommonModule, RouterModule],
  exports: [Question1, FeatureCard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
