package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.Customer;

public interface CustomerService {
	
	Customer findCustomerById(Long id);
	
	List<Customer> findAllCustomer();
	
	Customer saveCustomer(Customer customer);
	
	String delCustomerById(Long id);
	
	String updateCustomer(Long id, Customer customer);

}
