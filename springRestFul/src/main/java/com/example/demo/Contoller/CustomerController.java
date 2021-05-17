package com.example.demo.Contoller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Customer;
import com.example.demo.service.CustomerService;

@RestController
@RequestMapping(CustomerController.BASE_URL)
public class CustomerController {
	
	public static final String BASE_URL = "/api/v1/customer";
	
	private final CustomerService customerService;
	
	public CustomerController(CustomerService customerService) {
		this.customerService = customerService;
	}
	@GetMapping
	List<Customer> getAllcust(){
	return	customerService.findAllCustomer();
	}
	
	@GetMapping("/{id}")
	public Customer getCustomerById(@PathVariable Long id) {
		return customerService.findCustomerById(id);
	}
	@PostMapping("/create")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Customer>  saveCustomer(@RequestBody Customer customer) {
		return new ResponseEntity<>(customerService.saveCustomer(customer),HttpStatus.CREATED);
	}
	@DeleteMapping("/delete/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public String delCustomer(@PathVariable Long id) {
		return customerService.delCustomerById(id);
	}
	@PutMapping("/update/{id}")
	@ResponseStatus(HttpStatus.OK)
	public String updateCustomer(@PathVariable Long id,@RequestBody Customer customer) {
		return customerService.updateCustomer(id,customer);
	}
}
