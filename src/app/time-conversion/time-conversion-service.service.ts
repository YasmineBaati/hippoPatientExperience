// time-conversion.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeConversionService {

  fromStringToDate(timeString: string): Date | null {
    const [hours, minutes] = timeString.split(':').map(Number);
    
    // Check if the parsed values are valid
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60) {
      return null; // Invalid time format
    }

    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0); // Optionally set seconds to 0

    return date;
  }
}
