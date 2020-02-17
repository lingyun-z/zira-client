import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [SharedModule],
  declarations: [MainLayoutComponent, NavbarComponent],
  providers: [],
})
export class LayoutModule {}
