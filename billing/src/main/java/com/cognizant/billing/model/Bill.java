package com.cognizant.billing.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="bill")
public class Bill {
	public static final Logger LOGGER = LoggerFactory.getLogger(Bill.class);
	
	@NotNull
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bl_id")
	private int id;
	
	@Column(name = "bl_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	private Date billDate;
	
	@Column(name = "bl_quantity")
	private int quantity;
	
	@Column(name = "bl_rate")
	private int ratePerQuantity;
	
	@ManyToOne
	@JoinColumn(name="bl_us_id" ,referencedColumnName = "us_id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name="bl_pr_id",referencedColumnName = "pr_id")
	private Product product;

	public Bill() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}

	public Date getBillDate() {
		return billDate;
	}

	public void setBillDate(Date billDate) {
		this.billDate = billDate;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getRatePerQuantity() {
		return ratePerQuantity;
	}

	public void setRatePerQuantity(int ratePerQuantity) {
		this.ratePerQuantity = ratePerQuantity;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}



	
public Product getProduct() { return product;  }  public void
	  setProduct(Product product) { this.product = product;  }
	  
	   @Override public String toString() { return "Bill [id=" + id +
	  ", billDate=" + billDate + ", quantity=" + quantity + ", rate=" + ratePerQuantity +
	  ", user="  + user + ", product=" + product + "]"; }
	 	
	
}
