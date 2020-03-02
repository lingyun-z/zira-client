import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  imports: [SharedModule],
  declarations: [MainLayoutComponent, LeftMenuComponent],
  providers: [],
})
export class LayoutModule {}
