import { TestBed } from '@angular/core/testing';

import { FriendprofileService } from './friendprofile.service';

describe('FriendprofileService', () => {
  let service: FriendprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
