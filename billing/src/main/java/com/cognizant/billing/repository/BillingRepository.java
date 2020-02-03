package com.cognizant.billing.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognizant.billing.model.Bill;


@Repository
public interface BillingRepository extends JpaRepository<Bill,Integer>{
	
	@Query(value="SELECT * FROM Bill b where b.bl_us_id = ? and bl_date=curdate()", nativeQuery = true)
	public List<Bill> getBillByUserId(@Param("userId") int userId);
	
	@Query(value="select sum(bl_rate) as total from bill where bl_us_id=? and bl_date=curdate()", nativeQuery = true)
	int total(@Param("userId") int userId);
	
	@Query(value="select * from bill b where b.bl_us_id=? order by bl_date desc", nativeQuery = true)
	List<Bill> getPurchaseHistoryById(@Param("userId") int userId);
	
}
