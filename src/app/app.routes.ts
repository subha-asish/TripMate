import { Routes } from '@angular/router';
import { CustomerMgmtComponent } from './customer-mgmt/customer-mgmt.component';
import { TourMgmtComponent } from './tour-mgmt/tour-mgmt.component';
import { BookingMgmtComponent } from './booking-mgmt/booking-mgmt.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'customers',
        component: CustomerMgmtComponent
    },
    {
        path: 'tours',
        component: TourMgmtComponent
    },
    {
        path: 'bookings',
        component: BookingMgmtComponent
    }
];
