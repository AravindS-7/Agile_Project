package com.cognizant.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.cognizant.authentication.model.Role;



@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

	@Query(value = "FROM Role r where r.type =:roleType")
	Role findRoleByRoleType(@Param("roleType")String roleType);
	
}
