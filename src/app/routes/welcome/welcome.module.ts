import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, WelcomeRoutingModule, FormsModule],
  declarations: [WelcomeComponent],
})
export class WelcomeModule {}
