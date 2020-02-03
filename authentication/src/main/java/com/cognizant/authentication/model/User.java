package com.cognizant.authentication.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Entity
@Table(name = "user")
public class User {
	public static final Logger LOGGER = LoggerFactory.getLogger(User.class);

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "us_id")
	private int id;

	@Column(name = "us_firstname")
	private String firstName;

	@Column(name = "us_lastname")
	private String lastName;

	@Column(name = "us_age")
	private int age;

	@Column(name = "us_gender")
	private String gender;

	@Column(name = "us_contact_number")
	private long contactNumber;

	@Column(name = "us_user_id")
	private String userId;

	@Column(name = "us_password")
	private String password;

	@Column(name = "us_user_type")
	private String userType;

	@Column(name = "us_status")
	private String status;

	@Column(name = "us_secret_question_1")
	private String secretQuestion1;

	@Column(name = "us_secret_answer_1")
	private String secretAnswer1;

	@Column(name = "us_secret_question_2")
	private String secretQuestion2;

	@Column(name = "us_secret_answer_2")
	private String secretAnswer2;

	@Column(name = "us_secret_question_3")
	private String secretQuestion3;

	@Column(name = "us_secret_answer_3")
	private String secretAnswer3;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "ur_us_id"), inverseJoinColumns = @JoinColumn(name = "ur_ro_id"))
	private Set<Role> roleList;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getSecretQuestion1() {
		return secretQuestion1;
	}

	public void setSecretQuestion1(String secretQuestion1) {
		this.secretQuestion1 = secretQuestion1;
	}

	public String getSecretAnswer1() {
		return secretAnswer1;
	}

	public void setSecretAnswer1(String secretAnswer1) {
		this.secretAnswer1 = secretAnswer1;
	}

	public String getSecretQuestion2() {
		return secretQuestion2;
	}

	public void setSecretQuestion2(String secretQuestion2) {
		this.secretQuestion2 = secretQuestion2;
	}

	public String getSecretAnswer2() {
		return secretAnswer2;
	}

	public void setSecretAnswer2(String secretAnswer2) {
		this.secretAnswer2 = secretAnswer2;
	}

	public String getSecretQuestion3() {
		return secretQuestion3;
	}

	public void setSecretQuestion3(String secretQuestion3) {
		this.secretQuestion3 = secretQuestion3;
	}

	public String getSecretAnswer3() {
		return secretAnswer3;
	}

	public void setSecretAnswer3(String secretAnswer3) {
		this.secretAnswer3 = secretAnswer3;
	}

	public static Logger getLogger() {
		return LOGGER;
	}

	public Set<Role> getRoleList() {
		return roleList;
	}

	public void setRoleList(Set<Role> roleList) {
		this.roleList = roleList;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + ", gender="
				+ gender + ", contactNumber=" + contactNumber + ", userId=" + userId + ", password=" + password
				+ ", userType=" + userType + ", status=" + status + ", secretQuestion1=" + secretQuestion1
				+ ", secretAnswer1=" + secretAnswer1 + ", secretQuestion2=" + secretQuestion2 + ", secretAnswer2="
				+ secretAnswer2 + ", secretQuestion3=" + secretQuestion3 + ", secretAnswer3=" + secretAnswer3 + "]";
	}

}
