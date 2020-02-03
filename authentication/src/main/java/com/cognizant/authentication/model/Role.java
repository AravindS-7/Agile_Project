package com.cognizant.authentication.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "role")
public class Role {
	@Id
	@Column(name = "ro_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "ro_name")
	private String name;
	
	@Column(name = "ro_type")
	private String type;

	@ManyToMany(fetch = FetchType.EAGER, mappedBy = "roleList")
//	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "ur_ro_id"), inverseJoinColumns = @JoinColumn(name = "ur_us_id"))
	@JsonIgnore
	private Set<User> userList;

	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<User> getUserList() {
		return userList;
	}
	
	

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public void setUserList(Set<User> userList) {
		this.userList = userList;
	}

	@Override
	public String toString() {
		return "Role [id=" + id + ", name=" + name + ", userList=" + userList + "]";
	}
}
