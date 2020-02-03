package com.cognizant.billing.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.cognizant.billing.model.Bill;
import com.cognizant.billing.model.User;
import com.cognizant.billing.repository.BillingRepository;
import com.cognizant.billing.repository.UserRepository;

@Service
public class BillingService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BillingRepository billingRepository;
	
	
//	@Transactional
//	public User getUserById(String userId) {
//		return userRepository.getUserById(userId);
//	}
	
	@Transactional
	public User getUserByContactNumber(long contactNumber) {
		return userRepository.getUserByNumber(contactNumber);
	}
	
	@Transactional
	public void submitBill(@RequestBody Bill bill) {	
		billingRepository.save(bill);
	}
	
	@Transactional
	public List<Bill> getBillByUserId(int userId) {
		 return billingRepository.getBillByUserId(userId);
	}
	
	@Transactional
	public List<Bill> getPurchaseHistoryById(int userId){
		return billingRepository.getPurchaseHistoryById(userId);
	}
	
	@Transactional
	public int total(int userId) {
		return billingRepository.total(userId);
	}
}
