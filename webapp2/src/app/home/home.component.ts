import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from './home';
import { HomeService } from './home.service';
import { Observable } from "rxjs";
import swal from 'sweetalert/typings/core';
import Swal from 'sweetalert2';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newComponent = "working from component.ts";
  home: any;
  buttons : any;
  id:any;
  lName:any;
  fName:any;
  doj:any;

  constructor(private homeservice:HomeService,private router:Router) { }

  ngOnInit(): void {
   
  this.reloadData();
  }

  getCust(h:any) {
    this.router.navigate(['updateCustomer',h.id,h.fName,h.lName,h.doj]);
    console.log('Selected person is ' + h.id);
    this.id=h.id;
    console.log('Selected person is ' + h.fName);
    this.fName=h.fName;
    console.log('Selected person is ' + h.lName);
    this.lName=h.lName;
    console.log('Selected person is ' + h.doj);
    this.doj=h.doj;
    console.log('Selected person is working'); 
    //this.router.navigate(['updateCustomer',h.id,h.fName,h.lName,h.doj]);
  }







  reloadData(){
    this.home = this.homeservice.getAllcust();
    console.log("beforevalue");
    this.homeservice.getAllcust().subscribe(data =>{console.log(data)
    this.home=data;
},error=>console.log(error));

//console.log("aftervalue");
  }

  

  deleteCust(id: number) {
    console.log("Deleting id");
    Swal.fire("working");
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.homeservice.deletecustomer(id)
        .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
        Swal.fire(
          
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }


}
