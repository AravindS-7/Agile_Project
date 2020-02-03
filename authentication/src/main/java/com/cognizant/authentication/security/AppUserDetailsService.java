package com.cognizant.authentication.security;

import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cognizant.authentication.exception.UserAlreadyExistsException;
import com.cognizant.authentication.model.AppUser;
import com.cognizant.authentication.model.Role;
import com.cognizant.authentication.model.User;
import com.cognizant.authentication.repository.RoleRepository;
import com.cognizant.authentication.repository.UserRepository;


@Service
public class AppUserDetailsService implements UserDetailsService  {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;

	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public void signup(User newUser) throws UserAlreadyExistsException {
		User user = userRepository.findByUserId(newUser.getUserId());
		if (user != null) {
			throw new UserAlreadyExistsException();
		} else {
			String roleType = newUser.getUserType();
			Role role = roleRepository.findRoleByRoleType(roleType);
			newUser.setRoleList(new HashSet<Role>());
			newUser.getRoleList().add(role);
			userRepository.save(newUser);
		}
	}

	@Override
	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User user = userRepository.findByUserId(userId);

		if (user == null) {
			throw new UsernameNotFoundException("Username is not found");
		} else {

			return new AppUser(user);
		}
	}
}
