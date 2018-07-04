import { TestBed, inject } from '@angular/core/testing';

import { AudioDevicesService } from './audio-devices-service.service';

describe('AudioDevicesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudioDevicesService]
    });
  });

  it('should be created', inject([AudioDevicesService], (service: AudioDevicesService) => {
    expect(service).toBeTruthy();
  }));
});
