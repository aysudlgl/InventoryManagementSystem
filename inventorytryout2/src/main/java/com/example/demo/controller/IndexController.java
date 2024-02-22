package com.example.demo.controller;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
@Controller
public class IndexController {
	
	
	
	@GetMapping("/")
	public String index() {
		return "index";
	}
	@PostMapping("/register")
	public String userRegistration(@ModelAttribute User user) {
		System.out.println(user.toString());
		return "index";
	}

}
