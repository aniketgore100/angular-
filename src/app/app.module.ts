import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReuseTableComponent } from './reuse-table/reuse-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProHeadComponent } from './pro-head/pro-head.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FooterComponent } from './footer/footer.component';
import { TestService } from './services/test.service';
import { EmployeeComponent } from './employee/employee.component';
@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    HeaderComponent,
    FormComponent,
    ChildComponent,
    UserDetailsComponent,
    ChildParentComponent,
    ReuseTableComponent,
    ProHeadComponent,
    HomeComponent,
    SellerAuthComponent,
    FooterComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
