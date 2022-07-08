import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NavInfoComponent } from './components/nav-info/nav-info.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { SearchBrandComponent } from './components/search-brand/search-brand.component';
import { FooterComponent } from './components/footer/footer.component';
import { UcarsDefinitionComponent } from './components/ucars-definition/ucars-definition.component';
import { UcarsQuestionsComponent } from './components/ucars-questions/ucars-questions.component';
import { MenuContentComponent } from './components/menu-content/menu-content.component';
import { FlowInfoComponent } from './components/flow-info/flow-info.component';
import { FeaturedMenuComponent } from './components/featured-menu/featured-menu.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    UserComponent,
    NavInfoComponent,
    NavigationComponent,
    HeadlineComponent,
    SearchBrandComponent,
    MenuContentComponent,
    FooterComponent,
    UcarsDefinitionComponent,
    UcarsQuestionsComponent,
    FlowInfoComponent,
    FeaturedMenuComponent,
  ],
  imports: [CommonModule, UserRoutingModule, MaterialModule, OwlModule],
})
export class UserModule {}
