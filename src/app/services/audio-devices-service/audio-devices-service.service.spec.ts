import { TestBed, inject } from '@angular/core/testing';

import { AudioDevicesServiceService } from './audio-devices-service.service';

describe('AudioDevicesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudioDevicesServiceService]
    });
  });

  it('should be created', inject([AudioDevicesServiceService], (service: AudioDevicesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
