package com.cognizant.product.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.product.model.Offers;
import com.cognizant.product.model.Product;
import com.cognizant.product.repository.OfferRepository;
import com.cognizant.product.repository.ProductRepository;

@Service
public class ProductService {
	
	public static final Logger LOGGER = LoggerFactory.getLogger(ProductService.class);
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private OfferRepository offerRepository;
	
	@Transactional
	public List<Product> getAllProducts() {
		LOGGER.info("Service Get all products");
		return productRepository.findAll();
	}
	
	@Transactional
	public Product getProductById(int id) {
		LOGGER.info("Service Get product");
		Optional<Product> product = productRepository.findById(id);
		if(product.isPresent()) {
			return product.get();
		}
		return null;
	}
	
	@Transactional
	public void addProduct(Product product) {
		productRepository.save(product);
	}
	
	@Transactional
	public void modifyProduct(Product product) {
		productRepository.save(product);
	}
	
	@Transactional
	public void deleteProduct(int id) {
		productRepository.deleteById(id);
	}
	
	@Transactional
	public List<Product> getProductByType(String type) {
		return productRepository.getProductByType(type);
	}
	
	@Transactional
	public Product getProductByName(String name) {
		return productRepository.getProductByName(name);
	}
	
	@Transactional
	public Offers getCategory() {
		return offerRepository.getCategory();
	}
	
	@Transactional
	public List<Product> getProductsByRating(){
		return productRepository.getProductsByRating();
	}
	
	@Transactional
	public void addRating(Product product) {
		productRepository.save(product);
	}
}
