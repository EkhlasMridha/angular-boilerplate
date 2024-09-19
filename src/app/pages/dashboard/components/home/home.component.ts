import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { BookingStatusEnum } from 'app-utils/app.contstants';
import { formatISO } from 'date-fns';
import { BookingService } from 'http-services/booking.service';
import { WorkshopBookingService } from 'http-services/workshop-booking.service';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { MemberWorkshopQuery, SelectOptionType } from 'types/common.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  upcomingBookingFilter: MemberWorkshopQuery = {
    startDate: formatISO(new Date(), { representation: 'date' }),
    status: 0,
  };
  upcomingBookingParams = new BehaviorSubject<MemberWorkshopQuery>(
    this.upcomingBookingFilter
  );
  displayedColumns = ['name', 'duration', 'progress'];
  constructor(
    private workshopBooking: WorkshopBookingService,
    private bookingService: BookingService
  ) {}

  bookings$ = this.upcomingBookingParams.pipe(
    switchMap((params) => {
      return this.workshopBooking.getMemberWorkshops({
        ...params,
        order: 'asc',
      });
    })
  );

  attendance$ = this.bookingService.getAttendance();

  pastWorkshops$ = this.workshopBooking.getMemberWorkshops({
    endDate: formatISO(new Date(), { representation: 'date' }),
    status: BookingStatusEnum.Accepted,
    pageNumber: 1,
    pageSize: 10,
    order: 'desc',
  });

  progressColorMap = new Map<number | string, string>([
    [1, 'bg-white not-started'],
    [2, 'bg-accent'],
    [3, 'bg-success color-white'],
  ]);
  progressValuePair: Record<number, string> = {
    1: 'Not started',
    2: 'Started',
    3: 'Completed',
  };

  filterList: SelectOptionType<number>[] = [
    {
      label: 'All',
      value: 0,
    },
    {
      label: 'Pending',
      value: BookingStatusEnum.Pending,
    },
    {
      label: 'Accepted',
      value: BookingStatusEnum.Accepted,
    },
    {
      label: 'Rejected',
      value: BookingStatusEnum.Rejected,
    },
  ];

  onFilterChange(select: MatSelectChange) {
    this.upcomingBookingFilter.status = select.value;
    this.upcomingBookingParams.next(this.upcomingBookingFilter);
  }
}
