import { Component } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Tutorial } from '../../../../model/admin.model';
import { MateriallistModule } from '../../../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-admin-tutorial-list',
  imports: [MateriallistModule],
  templateUrl: './admin-tutorial-list.component.html',
  styleUrl: './admin-tutorial-list.component.scss',
})
export class AdminTutorialListComponent {
  tutorials: Tutorial[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getTutorials().subscribe((tutorials) => {
      this.tutorials = tutorials;
    });
  }

  deleteTutorial(id: string) {
    if (confirm('Are you sure you want to delete this tutorial?')) {
      this.adminService.deleteTutorial(id);
    }
  }
}
