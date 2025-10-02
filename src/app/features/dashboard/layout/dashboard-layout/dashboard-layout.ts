import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MenuCard } from '../../../../pages/home/menu-card/menu-card';
import { SSafeStorage } from '../../../../core/service/global/safe-storage/s-safe-storage';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { DashboardSidebar } from '../dashboard-sidebar/dashboard-sidebar';
import { DashboardHeader } from '../dashboard-header/dashboard-header';

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    DashboardSidebar,
    RouterOutlet,
    MateriallistModule,
    DashboardHeader,
  ],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss',
})
export class DashboardLayout {
  userdata: any = {};
  constructor(private route: ActivatedRoute, private storage: SSafeStorage) {}

  ngOnInit(): void {
    debugger;
    const UserData = this.storage.getItem('userdata');
    if (!UserData) {
      this.route.queryParamMap.subscribe((params) => {
        this.userdata = {
          token: params.get('token'),
          email: params.get('email'),
          name: params.get('name'),
          role: params.get('role'),
        };
        this.storage.setItem('userdata', this.userdata);
      });
    }
  }
}
