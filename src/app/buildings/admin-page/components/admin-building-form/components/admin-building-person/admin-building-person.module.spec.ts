import { TestBed } from '@angular/core/testing';

import { AdminBuildingPersonModule } from './admin-building-person.module';

describe('AdminRoomGuestsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingPersonModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingPersonModule).toBeTruthy();
  });
});
