package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class SpringRestFulApplication implements CommandLineRunner {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	public static void main(String[] args) {
		SpringApplication.run(SpringRestFulApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("SpringRestFull is started");
	}

}
/*spring.datasource.url=jdbc:h2:file:/data/sampledata  
spring.datasource.url=jdbc:h2:C:/data/sampledata 
 * 
 * 
 * 
 * spring.datasource.url=jdbc:mysql://localhost:3306/customer
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.formate_sql=true
spring.jpa.hibernate.ddl-auto=update*/
