import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SSafeStorage } from '../../../core/service/global/safe-storage/s-safe-storage';
import { MenuCard } from '../../../pages/home/menu-card/menu-card';

@Component({
  selector: 'app-dashboard-layout',
  imports: [MenuCard],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss'
})
export class DashboardLayout {

 constructor(
    private route: ActivatedRoute,
    private storage: SSafeStorage
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const token = params.get('token');
      const email = params.get('email');
      const name = params.get('name');
      if (token) this.storage.setItem('token', token);
      if (email) this.storage.setItem('userEmail', email);
      if (name) this.storage.setItem('userName', name);
    });
  }
}