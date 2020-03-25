import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { ProjectService } from 'app/core/services/project.service';
import { CreateUserDialogComponent } from 'app/shared/component/create-user-dialog/create-user-dialog.component';

@NgModule({
  imports: [SharedModule, UserManagementRoutingModule],
  declarations: [UserManagementComponent],
  exports: [UserManagementComponent],
  providers: [ProjectService],
  entryComponents: [CreateUserDialogComponent],
})
export class UserManagementModule {}
