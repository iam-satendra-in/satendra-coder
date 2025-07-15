import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CBecomeAMember } from '../../about/c-become-a-member/c-become-a-member';

@Component({
  selector: 'app-reachout-card',
  imports: [],
  templateUrl: './reachout-card.html',
  styleUrl: './reachout-card.scss',
})
export class ReachoutCard {
  constructor(private dialog: MatDialog, private router: Router) {}
  BecomeAMember() {
    this.router.navigate(['/contact']);
  }
}
