/*
 * package com.example.demo.BootStrap;
 * 
 * import org.springframework.boot.CommandLineRunner; import
 * org.springframework.stereotype.Component;
 * 
 * import com.example.demo.CustomerRepo.CustomerRepository; import
 * com.example.demo.domain.Customer;
 * 
 * @Component public class BootstrapData implements CommandLineRunner{
 * 
 * private final CustomerRepository customerRepository; public
 * BootstrapData(CustomerRepository customerRepository) {
 * this.customerRepository=customerRepository; // TODO Auto-generated
 * constructor stub }
 * 
 * @Override public void run(String... args) throws Exception { // TODO
 * Auto-generated method stub System.out.println("loading coustomer data");
 * 
 * Customer c1 = new Customer(); c1.setfName("spring"); c1.setlName("boot");
 * customerRepository.save(c1);
 * 
 * Customer c2 = new Customer(); c2.setfName("by spring"); c2.setlName("guru");
 * customerRepository.save(c2);
 * 
 * System.out.println("cutomerr save "+customerRepository.count());
 * 
 * 
 * 
 * }
 * 
 * }
 */