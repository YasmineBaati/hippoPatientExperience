import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedTime: string = '';

  setSelectedTime(time: string): void {
    this.selectedTime = time;
  }

  getSelectedTime(): string {
    return this.selectedTime;
  }

  getSelectedTimeWith15MinutesAdded(): string {
    if (this.selectedTime) {
      // Parse the selectedTime string into hours and minutes
      const [hours, minutes] = this.selectedTime.split(':').map(Number);

      // Add 15 minutes
      const newMinutes = minutes + 15;

      // Calculate the new time, accounting for hour overflow
      const newHours = hours + Math.floor(newMinutes / 60);
      const finalMinutes = newMinutes % 60;

      // Format the result as HH:mm
      return `${String(newHours).padStart(2, '0')}:${String(finalMinutes).padStart(2, '0')}`;
    }

    return '';
  }
}
