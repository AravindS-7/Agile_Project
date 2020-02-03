package com.cognizant.product.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.product.model.Offers;
import com.cognizant.product.model.Product;
import com.cognizant.product.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
	
	public static final Logger LOGGER = LoggerFactory.getLogger(ProductController.class);
	
	@Autowired
	private ProductService productService;
	
	@GetMapping
	public List<Product> getAllProducts(){
		LOGGER.info("Controller Get all products");
		return productService.getAllProducts();
	}
	
	@GetMapping("/{productId}")
	public Product getProductById(@PathVariable int productId) {
		LOGGER.info("Controller Get product");
		return productService.getProductById(productId);
	}
	
	@PostMapping("/add")
	public void addProduct(@RequestBody Product product) {
		productService.addProduct(product);
	}
	
	@PutMapping("/modify")
	public void modifyProduct(@RequestBody Product product) {
		LOGGER.info("Controller modify product");
		productService.modifyProduct(product);
	}
	
	@DeleteMapping("/delete/{productId}")
	public void deleteProduct(@PathVariable int productId) {
		productService.deleteProduct(productId);
	}
	
	@GetMapping("/cat/{type}")
	public List<Product> getProductByType(@PathVariable String type){
		return productService.getProductByType(type);
	}
	
	@GetMapping("/name/{name}")
	public Product getProductByName(@PathVariable String name) {
		return productService.getProductByName(name);
	}
	
	@GetMapping("/day")
	public Offers getCategory() {
		return this.productService.getCategory();
	}
	
	@GetMapping("/getRating")
	public List<Product> getProductsByRating(){
		return this.productService.getProductsByRating();
	}
	
	@PostMapping("/addRating")
	public void addRating(@RequestBody Product product){
		this.productService.addRating(product);
	}
}
