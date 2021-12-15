import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('', 'john@example.com',2222222,'','morning',true);
  topicHasError = true;
  submitted = false;
  errorMessage="";

  constructor(private _enrollmentService: EnrollmentService){

  }


  validateTopic(value:string){
    if(value === 'default'){
      this.topicHasError = true;
    }else {
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
        .subscribe(
          data => console.log('success!', data),
          error => this.errorMessage = error.statusText
        );
  }


}
