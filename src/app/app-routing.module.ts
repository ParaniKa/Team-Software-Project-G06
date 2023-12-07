import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

import { LogoutComponent } from './logout/logout.component';

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
import { ViewbookingComponent } from './booking/viewbooking/viewbooking.component';

import { AdminSideMenuComponent } from './admin/admin-side-menu/admin-side-menu.component';
import { AdminBodyComponent } from './admin/admin-body/admin-body.component';
import { AdminuserComponent } from './user/adminuser/adminuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { BookingcalenderComponent } from './booking/bookingcalender/bookingcalender.component';
import { PaymentComponent } from './booking/payment/payment.component';

import { AdminfoodComponent } from './food/adminfood/adminfood.component';
import { CreatefoodComponent } from './food/createfood/createfood.component';
import { EditfoodComponent } from './food/editfood/editfood.component';
import { FoodComponent } from './food/food/food.component';

import { ContactComponent } from './contact/contact/contact.component';
import { CreatecontactComponent } from './contact/createcontact/createcontact.component';
import { EditcontactComponent } from './contact/editcontact/editcontact.component';
import { AdmincontactComponent } from './contact/admincontact/admincontact.component';

import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { CreatefeedbackComponent } from './feedback/createfeedback/createfeedback.component';
import { EditfeedbackComponent } from './feedback/editfeedback/editfeedback.component';
import { AdminfeedbackComponent } from './feedback/adminfeedback/adminfeedback.component';

import { AdminsubscriberComponent } from './subscriber/adminsubscriber/adminsubscriber.component';

import { PhotographyComponent } from './photography/photography/photography.component';
import { CreatephotographyComponent } from './photography/createphotography/createphotography.component';
import { EditphotographyComponent } from './photography/editphotography/editphotography.component';
import { AdminphotographyComponent } from './photography/adminphotography/adminphotography.component';
import { AuspiciousComponent } from './auspicious/auspicious/auspicious.component';
import { CreateauspiciousComponent } from './auspicious/createauspicious/createauspicious.component';
import { EditauspiciousComponent } from './auspicious/editauspicious/editauspicious.component';
import { AdminauspiciousComponent } from './auspicious/adminauspicious/adminauspicious.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { CreatecalendarComponent } from './calendar/createcalendar/createcalendar.component';
import { EditcalendarComponent } from './calendar/editcalendar/editcalendar.component';
import { AdmincalendarComponent } from './calendar/admincalendar/admincalendar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';

import { AuthGuard } from './Guard/auth.guard';





const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'register',component:RegisterComponent},//,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent},

  {path:'admindashboard',component:AdmindashboardComponent},

  {path:'userprofile',component:UserprofileComponent},
  {path:'userdetails',component:UserdetailsComponent},

  {path:'logout',component:LogoutComponent},

  {path:'contactus',component:ContactusComponent},

  {path:'view-user',component:ViewUserComponent},
  {path:'createuser',component:CreateuserComponent},

  {path:'event',component:EventComponent},
  {path:'createevent',component:CreateeventComponent},
  {path:':id/edit',component:EventeditComponent},

  {path:'booking/booking',component:BookingComponent},
  {path:'booking/createbooking',component:CreatebookingComponent},
  {path:':id/editbooking',component:EditbookingComponent},
  {path:'booking/adminbooking',component:AdminbookingComponent},
  {path:'booking/bookingcalender',component:BookingcalenderComponent},
  {path:'booking/bookingpayment' ,component:PaymentComponent},
  {path:':id/viewbooking' ,component:ViewbookingComponent},


  {path:'admin/admin-side-menu',component:AdminSideMenuComponent},
  {path:'admin/admin-body',component:AdminBodyComponent},


  {path:'user/adminuser',component:AdminuserComponent},
  {path:':id/edituser',component:EdituserComponent},

  {path:'food/food',component:FoodComponent},
  {path:'food/createfood',component:CreatefoodComponent},
  {path:':id/editfood',component:EditfoodComponent},
  {path:'food/adminfood',component:AdminfoodComponent},

  {path:'contact/contact',component:ContactComponent},
  {path:'contact/createcontact',component:CreatecontactComponent},
  {path:':id/editcontact',component:EditcontactComponent},
  {path:'contact/admincontact',component:AdmincontactComponent},

  {path:'feedback/feedback',component:FeedbackComponent},
  {path:'feedback/createfeedback',component:CreatefeedbackComponent},
  {path:':id/editfeedback',component:EditfeedbackComponent},
  {path:'feedback/adminfeedback',component:AdminfeedbackComponent},

  {path:'photography/photography',component:PhotographyComponent},
  {path:'photography/createphotography',component:CreatephotographyComponent},
  {path:':id/editphotography',component:EditphotographyComponent},
  {path:'photography/adminphotography',component:AdminphotographyComponent},

  {path:'auspicious/auspicious',component:AuspiciousComponent},
  {path:'auspicious/createauspicious',component:CreateauspiciousComponent},
  {path:':id/editauspicious',component:EditauspiciousComponent},
  {path:'auspicious/adminauspicious',component:AdminauspiciousComponent},

  {path:'calendar/calendar',component:CalendarComponent},
  {path:'calendar/createcalendar',component:CreatecalendarComponent},
  {path:':id/editcalendar',component:EditcalendarComponent},
  {path:'calendar/admincalendar',component:AdmincalendarComponent},

  {path:'subscriber/adminsubscriber',component:AdminsubscriberComponent},

  {path:'aboutus',component:AboutusComponent},
  {path:'gallery',component:GalleryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
