package com.cognizant.billing.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.cognizant.billing.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	User findByUserId(String userId);

	@Query(value="from User u where u.userId =:userId" )
	User getUserById(@Param("userId") String userId);
	
	@Query(value="from User u where u.contactNumber =:contactNumber")
	User getUserByNumber(@Param("contactNumber") long contactNumber);

}
