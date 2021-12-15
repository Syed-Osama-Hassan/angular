import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { passwordValidator } from './utility/password.validator';
import { validate } from './utility/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  registrationForm : FormGroup= this.fb.group({});

  // registrationForm = new FormGroup({
  //   userName: new FormControl('John'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      // Using form builder
  this.registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), validate(/admin/)]],
    email: [''],
    password: [''],
    confirmPassword: [''],
    subscribe: [false],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    }),
    alternateEmails: this.fb.array([])
    
  }, {validator: passwordValidator});
    this.registrationForm.get('subscribe')?.valueChanges.subscribe(
      checkedValue => {
        const email = this.registrationForm.get('email');

        if(checkedValue){
          email?.setValidators(Validators.required);
        }else {
          email?.clearValidators();
        }

        email?.updateValueAndValidity();
      }
    )

  }

  loadData(){
    // Set all values 
    // this.registrationForm.setValue({
    //   userName: 'John',
    //   password: 'a',
    //   confirmPassword: 'a',
    //   address: {
    //     city: 'city',
    //     state: 'state',
    //     postalCode: 'postalCode'
    //   }
    // });

    // Set only required values
    this.registrationForm.patchValue({
      userName: 'John',
      password: 'a',
      confirmPassword: 'a'
    });
  }

  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmails(){
    this.alternateEmails.push(this.fb.control(''));
  }

  onSubmit(){
    console.log(this.registrationForm.value);
  }

}
