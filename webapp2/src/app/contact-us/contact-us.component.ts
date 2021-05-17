import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsService } from './contact-us.service';
import Swal from 'sweetalert2';
import { Home } from '../home/home';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private contactusservice : ContactUsService,private router:Router) { }
  customer : Home = new Home();
  submitted = false;

 

  ngOnInit(): void {
  }

  newHome(): void {
    this.submitted = false;
    this.customer = new Home();
  }

  save() {
    this.contactusservice
    .createCust(this.customer).subscribe(data => {
      console.log(data)
      this.customer = new Home();
      Swal.fire("Submitted Successfully");
      this.gotoList();
      
    }, 
    error => console.log(error));
    Swal.fire("Submitted not Successfully");
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

}
