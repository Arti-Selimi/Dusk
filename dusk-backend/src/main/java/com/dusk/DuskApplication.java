package com.dusk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EntityScan("com.dusk.model")
public class DuskApplication {

	public static void main(String[] args) {
		SpringApplication.run(DuskApplication.class, args);
	}

}
