import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FullCalendarModule } from '@fullcalendar/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { EventComponent } from './event/event.component';
import { CreateeventComponent } from './createevent/createevent.component';
import { EventeditComponent } from './eventedit/eventedit.component';
import { BookingComponent } from './booking/booking/booking.component';
import { CreatebookingComponent } from './booking/createbooking/createbooking.component';
import { EditbookingComponent } from './booking/editbooking/editbooking.component';
import { AdminbookingComponent } from './booking/adminbooking/adminbooking.component';
import { BookingcalenderComponent } from './booking/bookingcalender/bookingcalender.component';
import { AdminSideMenuComponent } from './admin/admin-side-menu/admin-side-menu.component';
import { AdminBodyComponent } from './admin/admin-body/admin-body.component';
import { AdminuserComponent } from './user/adminuser/adminuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { PaymentComponent } from './booking/payment/payment.component';
import { AdminfoodComponent } from './food/adminfood/adminfood.component';
import { FoodComponent } from './food/food/food.component';
import { EditfoodComponent } from './food/editfood/editfood.component';
import { CreatefoodComponent } from './food/createfood/createfood.component';
import { ViewbookingComponent } from './booking/viewbooking/viewbooking.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AdmincontactComponent } from './contact/admincontact/admincontact.component';
import { CreatecontactComponent } from './contact/createcontact/createcontact.component';
import { EditcontactComponent } from './contact/editcontact/editcontact.component';
import { CreatefeedbackComponent } from './feedback/createfeedback/createfeedback.component';
import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { AdminfeedbackComponent } from './feedback/adminfeedback/adminfeedback.component';
import { EditfeedbackComponent } from './feedback/editfeedback/editfeedback.component';
import { EditphotographyComponent } from './photography/editphotography/editphotography.component';
import { PhotographyComponent } from './photography/photography/photography.component';
import { AdminphotographyComponent } from './photography/adminphotography/adminphotography.component';
import { CreatephotographyComponent } from './photography/createphotography/createphotography.component';
import { CreateauspiciousComponent } from './auspicious/createauspicious/createauspicious.component';
import { AuspiciousComponent } from './auspicious/auspicious/auspicious.component';
import { AdminauspiciousComponent } from './auspicious/adminauspicious/adminauspicious.component';
import { EditauspiciousComponent } from './auspicious/editauspicious/editauspicious.component';
import { EditcalendarComponent } from './calendar/editcalendar/editcalendar.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { AdmincalendarComponent } from './calendar/admincalendar/admincalendar.component';
import { AdminsubscriberComponent } from './subscriber/adminsubscriber/adminsubscriber.component';
import { CreatecalendarComponent } from './calendar/createcalendar/createcalendar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LightgalleryModule } from 'lightgallery/angular';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    AdmindashboardComponent,
    UserprofileComponent,
    LogoutComponent,
    UserdetailsComponent,
    ContactusComponent,
    ViewUserComponent,
    CreateuserComponent,
    EventComponent,
    CreateeventComponent,
    EventeditComponent,
    BookingComponent,
    CreatebookingComponent,
    EditbookingComponent,
    AdminbookingComponent,
    BookingcalenderComponent,
    AdminSideMenuComponent,
    AdminBodyComponent,
    AdminuserComponent,
    EdituserComponent,
    AdminFooterComponent,
    PaymentComponent,
    AdminfoodComponent,
    FoodComponent,
    EditfoodComponent,
    CreatefoodComponent,
    ViewbookingComponent,
    ContactComponent,
    AdmincontactComponent,
    CreatecontactComponent,
    EditcontactComponent,
    CreatefeedbackComponent,
    FeedbackComponent,
    AdminfeedbackComponent,
    EditfeedbackComponent,
    EditphotographyComponent,
    PhotographyComponent,
    AdminphotographyComponent,
    CreatephotographyComponent,
    CreateauspiciousComponent,
    AuspiciousComponent,
    AdminauspiciousComponent,
    EditauspiciousComponent,
    EditcalendarComponent,
    CalendarComponent,
    AdmincalendarComponent,
    AdminsubscriberComponent,
    CreatecalendarComponent,
    AboutusComponent,
    GalleryComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    LightgalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
