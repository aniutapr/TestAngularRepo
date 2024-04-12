import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { LikesComponent } from '../my-profile-components/likes/likes.component';
import { LovesComponent } from '../my-profile-components/loves/loves.component';
import { ViewsComponent } from '../my-profile-components/views/views.component';
import { SmilesComponent } from '../my-profile-components/smiles/smiles.component';
import { TargetsComponent } from '../my-profile-components/targets/targets.component';
import { MeetingsComponent } from '../my-profile-components/meetings/meetings.component';
import { MenuComponent } from '../menu/menu.component';
import { ChartComponent } from '../my-profile-components/views/chart.component';
@NgModule({
  declarations: [
    MyProfileComponent,
    LikesComponent,
    LovesComponent,
    ViewsComponent,
    SmilesComponent,
    TargetsComponent,
    MeetingsComponent,
    MenuComponent,
    ChartComponent,
  ],
  imports: [CommonModule],
  exports: [MyProfileComponent],
})
export class MyProfileModule {}
