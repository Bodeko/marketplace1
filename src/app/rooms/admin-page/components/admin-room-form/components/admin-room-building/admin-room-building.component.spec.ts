import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { BuildingService } from '@app/buildings/service';
import { PersonSharedModule } from '@app/persons/shared';

import { AdminRoomBuildingComponent } from './admin-room-building.component';

describe('AdminRoomBuildingComponent', () => {
  let component: AdminRoomBuildingComponent;
  let fixture: ComponentFixture<AdminRoomBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputModule, MatSelectModule, ReactiveFormsModule, MockModule(PersonSharedModule)],
      declarations: [AdminRoomBuildingComponent],
      providers: [
        {
          provide: BuildingService,
          useValue: {
            building$: jest.fn(() => of()),
            buildingsByPerson$: jest.fn(() => of()),
          } as Partial<BuildingService>,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
