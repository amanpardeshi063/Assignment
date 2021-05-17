package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.CustomerRepo.CustomerRepository;
import com.example.demo.domain.Customer;

@Service
public class CustomerServiceIpl implements CustomerService{
	
	public final CustomerRepository customerRepositoy;
	
	public CustomerServiceIpl(CustomerRepository customerRepositoy ) {
		this.customerRepositoy = customerRepositoy;
		// TODO Auto-generated constructor stub
	}
	
	

	@Override
	public Customer findCustomerById(Long id) {
		// TODO Auto-generated method stub
		return customerRepositoy.findById(id).get();
	}

	@Override
	public List<Customer> findAllCustomer() {
		// TODO Auto-generated method stub
		return customerRepositoy.findAll();
	}

	@Override
	public Customer saveCustomer(@RequestBody Customer customer) {
		// TODO Auto-generated method stub
		return customerRepositoy.save(customer);
	}



	@Override
	public String delCustomerById(Long id) {
		customerRepositoy.deleteById(id);
		return "customer deleted successfully";
	}



	@Override
	public String updateCustomer(Long id, Customer customer) {
		Customer exCustomer = customerRepositoy.findById(id).get();
		exCustomer.setfName(customer.getfName());
		exCustomer.setlName(customer.getlName());
		exCustomer.setDoj(customer.getDoj());
		customerRepositoy.save(exCustomer);

		return "updated successfully";
	}
}
