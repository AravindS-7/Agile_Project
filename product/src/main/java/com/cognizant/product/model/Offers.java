package com.cognizant.product.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="offers")
public class Offers {
	
	@NotNull
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="of_id")
	private int offerId;
	
	@Column(name="of_day")
	private String offerDay;
	
	@Column(name="of_pr_type")
	private String productType;
	
	@Column(name="of_discount")
	private int discount;
	
	@Column(name="of_text")
	private String offerText;

	public Offers() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getOfferId() {
		return offerId;
	}

	public void setOfferId(int offerId) {
		this.offerId = offerId;
	}

	public String getOfferDay() {
		return offerDay;
	}

	public void setOfferDay(String offerDay) {
		this.offerDay = offerDay;
	}

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public String getOfferText() {
		return offerText;
	}

	public void setOfferText(String offerText) {
		this.offerText = offerText;
	}

	@Override
	public String toString() {
		return "Offers [offerId=" + offerId + ", offerDay=" + offerDay + ", productType=" + productType + ", discount="
				+ discount + ", offerText=" + offerText + "]";
	}
	
	
}
