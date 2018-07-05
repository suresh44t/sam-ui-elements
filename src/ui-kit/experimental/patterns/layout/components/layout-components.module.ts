import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { SamPageNextComponent } from './page';
import { MdSidenavModule } from './sidenav';
import { SamActionBarComponent } from './actionbar.component';
import { SamLayoutComponent } from './layout.component';
import { SamMainComponent } from './main.component';
import { SamDatabankPaginationComponent } from './pagination.component';
import { SamToolbarComponent } from './toolbar.component';
import {
  SamFeedbackWrapperComponent
} from './feedback-wrapper.component';
import {
  SamFiltersWrapperComponent
} from './filters-wrapper.component';
import {
  SamResourcesWrapperComponent
} from './resources-wrapper.component';
import {
  SamDatabankTitleSectionDirective
} from './title-section.component';
import { MdExpansionModule } from './expansion';
import { SamPageActionDirective } from './page-action.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdSidenavModule,
    MdExpansionModule
  ],
  declarations: [
    // Components
    SamActionBarComponent,
    SamLayoutComponent,
    SamMainComponent,
    SamDatabankPaginationComponent,
    SamToolbarComponent,
    SamFeedbackWrapperComponent,
    SamFiltersWrapperComponent,
    SamResourcesWrapperComponent,
    SamDatabankTitleSectionDirective,
    SamPageNextComponent,
    
    // Directives
    SamPageActionDirective
  ],
  exports: [
    MdExpansionModule,
    MdSidenavModule,
    SamActionBarComponent,
    SamLayoutComponent,
    SamMainComponent,
    SamDatabankPaginationComponent,
    SamToolbarComponent,
    SamFeedbackWrapperComponent,
    SamFiltersWrapperComponent,
    SamResourcesWrapperComponent,
    SamDatabankTitleSectionDirective,
    SamPageNextComponent,
    SamPageActionDirective
  ]
})
export class SamLayoutComponentsModule {}