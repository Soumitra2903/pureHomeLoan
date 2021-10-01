import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Account } from '../account';
import { PersonaldetailsService } from '../personaldetails.service';
@Component({
  selector: 'app-loantracker',
  templateUrl: './loantracker.component.html',
  styleUrls: ['./loantracker.component.css']
})
export class LoantrackerComponent implements OnInit {
LoanTrackingForm=new FormGroup({
  ApplicationNumber:new FormControl(null,[Validators.required]),
  Phonenumber:new FormControl(null,[Validators.required])
})
message!:string;
  constructor(private router:Router,private service:PersonaldetailsService) { }

  ngOnInit(): void {
  }
get applicationnumber(){
    return this.LoanTrackingForm.get('ApplicationNumber')
  }
  get phonenumber()
  {
    return this.LoanTrackingForm.get('Phonenumber');
  }
  
  submit()
  {
    

    this.service.trackLoan(this.LoanTrackingForm.value).subscribe(res => {
      console.log(res)
      console.log('Login successful');
      
    },
    error=>this.message="Incorrect details"
    
    );this.router.navigate(['status/applicationId',{applicationId:this.LoanTrackingForm.value.ApplicationNumber}])
}

 
  
  

}