package com.cognizant.product.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name="product")
public class Product {
	
	public static final Logger LOGGER = LoggerFactory.getLogger(Product.class);
	
	@NotNull
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pr_id")
	private int id;
	
	@Column(name = "pr_code")
	private String code;
	
	@Column(name = "pr_name")
	private String name;
	
	@Column(name = "pr_type")
	private String type;
	
	@Column(name = "pr_brand")
	private String brand;
	
	@Column(name = "pr_quantity_type")
	private String quantityType;
	
	@Column(name = "pr_rate_per_quantity")
	private int ratePerQuantity;
	
	@Column(name = "pr_stock_count")
	private int stockCount;
	
	@Column(name = "pr_add_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	private Date addDate;
	
	@Column(name = "pr_aisle")
	private String aisle;
	
	@Column(name = "pr_shelf")
	private String shelf;
	
	@Column(name = "pr_date_of_manufacture")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	private Date dateOfManufacture;
	
	@Column(name = "pr_date_of_expiry")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	private Date dateOfExpiry;
	
	@Column(name = "pr_image")
	private String image;
	
	@Column(name = "pr_rating")
	private int rating;

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getQuantityType() {
		return quantityType;
	}

	public void setQuantityType(String quantityType) {
		this.quantityType = quantityType;
	}

	public int getRatePerQuantity() {
		return ratePerQuantity;
	}

	public void setRatePerQuantity(int ratePerQuantity) {
		this.ratePerQuantity = ratePerQuantity;
	}

	public int getStockCount() {
		return stockCount;
	}

	public void setStockCount(int stockCount) {
		this.stockCount = stockCount;
	}

	public Date getAddDate() {
		return addDate;
	}

	public void setAddDate(Date addDate) {
		this.addDate = addDate;
	}

	public String getAisle() {
		return aisle;
	}

	public void setAisle(String aisle) {
		this.aisle = aisle;
	}

	public String getShelf() {
		return shelf;
	}

	public void setShelf(String shelf) {
		this.shelf = shelf;
	}

	public Date getDateOfManufacture() {
		return dateOfManufacture;
	}

	public void setDateOfManufacture(Date dateOfManufacture) {
		this.dateOfManufacture = dateOfManufacture;
	}

	public Date getDateOfExpiry() {
		return dateOfExpiry;
	}

	public void setDateOfExpiry(Date dateOfExpiry) {
		this.dateOfExpiry = dateOfExpiry;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", code=" + code + ", name=" + name + ", type=" + type + ", brand=" + brand
				+ ", quantityType=" + quantityType + ", ratePerQuantity=" + ratePerQuantity + ", stockCount="
				+ stockCount + ", addDate=" + addDate + ", aisle=" + aisle + ", shelf=" + shelf + ", dateOfManufacture="
				+ dateOfManufacture + ", dateOfExpiry=" + dateOfExpiry + ", image=" + image + ", rating=" + rating
				+ "]";
	}
	
	
}
