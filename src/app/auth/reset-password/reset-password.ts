import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MateriallistModule } from '../../shared/materiallist/materiallist-module';
import { SQr } from '../../core/service/other/s-qr';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [MateriallistModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss'
})
export class ResetPassword {

}