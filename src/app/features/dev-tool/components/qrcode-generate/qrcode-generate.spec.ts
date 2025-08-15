import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeGenerate } from './qrcode-generate';

describe('QrcodeGenerate', () => {
  let component: QrcodeGenerate;
  let fixture: ComponentFixture<QrcodeGenerate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrcodeGenerate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeGenerate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
