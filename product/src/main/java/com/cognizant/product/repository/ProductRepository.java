package com.cognizant.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.product.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer>{
	
	@Query(value="FROM Product p WHERE p.type=:type")
	public List<Product> getProductByType(@Param("type") String type);
	
	@Query(value="FROM Product p WHERE p.name=:name")
	public Product getProductByName(@Param("name") String name);
	
	@Query(value="FROM Product p WHERE p.rating>80")
	public List<Product> getProductsByRating();
	
}
