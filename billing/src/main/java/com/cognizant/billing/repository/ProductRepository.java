package com.cognizant.billing.repository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cognizant.billing.model.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product,Integer>{
	
}
