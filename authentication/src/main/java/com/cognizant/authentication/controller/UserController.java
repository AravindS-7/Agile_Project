package com.cognizant.authentication.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.authentication.exception.UserAlreadyExistsException;
import com.cognizant.authentication.model.User;
import com.cognizant.authentication.repository.UserRepository;
import com.cognizant.authentication.security.AppUserDetailsService;


@RestController
@RequestMapping("/users")
public class UserController {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private AppUserDetailsService appUserDetailsService;

	@PostMapping
	public void signup(@RequestBody @Valid User user) throws UserAlreadyExistsException {
		LOGGER.debug("user:{}", user);
		user.setPassword(passwordEncoder().encode(user.getPassword()));
		appUserDetailsService.signup(user);

	}

	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@GetMapping()
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	@PutMapping
	public void updateUser(@RequestBody User user) {
		userRepository.save(user);
	}
	
	@GetMapping("/{userId}")
	public User getUserById(@PathVariable String userId) {
		return userRepository.getUserById(userId);
	}

}
