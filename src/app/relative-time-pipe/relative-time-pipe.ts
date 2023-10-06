import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: string | Date | null): string {
    if (value === null) {
      return ''; // Handle the case where value is null
    }
  
    const currentDate = new Date();
    const inputDate = typeof value === 'string' ? new Date(value) : value;
    const diffInSeconds = Math.floor((currentDate.getTime() - inputDate.getTime()) / 1000);
  
    if (diffInSeconds < 60) {
      return 'Just now';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes}m ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours}h ago`;
    } else {
      return "";
    }
  }
  
}
