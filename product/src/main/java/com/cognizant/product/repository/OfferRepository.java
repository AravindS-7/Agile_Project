package com.cognizant.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.cognizant.product.model.Offers;

@Repository
public interface OfferRepository extends JpaRepository<Offers,Integer>{
	
	@Query(value="SELECT * FROM offers WHERE of_day=dayname(curdate())", nativeQuery=true)
	Offers getCategory(); 
}
