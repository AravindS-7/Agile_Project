package com.cognizant.billing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.billing.model.Bill;
import com.cognizant.billing.model.User;
import com.cognizant.billing.service.BillingService;

@RestController
@RequestMapping("/billing")
public class BillingController {
	
	@Autowired
	private BillingService billingService;
	
//	@GetMapping("/{userId}")
//	public User getUserById(@PathVariable String userId) {
//		return billingService.getUserById(userId);
//	}
	
	@GetMapping("/contact/{contactNumber}")
	public User getUserByContactNumber(@PathVariable long contactNumber) {
		return billingService.getUserByContactNumber(contactNumber);
	}
	
	@PostMapping("/addBill")
	public void submitBill(@RequestBody Bill bill) {	
		billingService.submitBill(bill);
	}
	
	@GetMapping("/{userId}")
	public List<Bill> getBillByUserId(@PathVariable int userId) {
		return billingService.getBillByUserId(userId);
	}
	
	@GetMapping("/history/{userId}")
	public List<Bill> getPurchaseHistoryById(@PathVariable int userId){
		return billingService.getPurchaseHistoryById(userId);
	}
	
	@GetMapping("/total/{userId}")
	public int total(@PathVariable int userId) {
		return billingService.total(userId);
	}
}
