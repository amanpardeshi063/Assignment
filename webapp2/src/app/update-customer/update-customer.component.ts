import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Home } from '../home/home';
import { UpdateCustomerService } from './update-customer.service';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
id:number | undefined;
fName:any;
lName:any;
doj:any;

  home: any;
  constructor(private route: ActivatedRoute,private router: Router,
    private updateCustomerService:UpdateCustomerService) {
     
     }
     

  ngOnInit(): void {
this.home = new Home;

    this.id = this.route.snapshot.params['id'];
    this.fName = this.route.snapshot.params['fname'];
    this.lName = this.route.snapshot.params['lname'];
    this.doj = this.route.snapshot.params['doj'];
    console.log(this.id,this.fName,this.lName,this.doj);
    this.home.id = this.id;
    this.home.fName = this.fName;
    this.home.lName = this.lName;
    this.home.doj = this.doj;
    console.log(this.home);
  }
  onSubmit(){
    console.log("submitted");
    console.log(this.home);
    this.updateCustomerService
    .updateCust(this.id,this.home).subscribe(data => {
      console.log(data)
      this.home = new Home();
      this.gotoList();
      
    }, error => console.log(error));
    this.gotoList();
    Swal.fire("Submitted not Successfully");
  }
  gotoList() {
    Swal.fire("Submitted Successfully");
    this.router.navigate(['/home']);
  }
}
