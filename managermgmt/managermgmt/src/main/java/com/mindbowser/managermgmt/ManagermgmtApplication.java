package com.mindbowser.managermgmt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;


@SpringBootApplication 
@ImportResource(value = { "classpath:app-config.xml" })
public class ManagermgmtApplication {

	public static void main(String[] args) {
		SpringApplication.run(ManagermgmtApplication.class, args);
	}

}
