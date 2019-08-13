package com.mindbowser.managermgmt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindbowser.managermgmt.dao.EmployeeDAO;
import com.mindbowser.managermgmt.dao.ManagerDAO;
import com.mindbowser.managermgmt.model.Employee;
import com.mindbowser.managermgmt.model.Manager;

@Service
public class ManagerService {
	
	@Autowired
	private ManagerDAO managerDAO;
	
	@Autowired
	private EmployeeDAO employeeDAO;
	
	public void saveManager(Manager manager){
		managerDAO.saveManager(manager);
	}
	
	public boolean authenticate(Manager manager){
		return managerDAO.authenticate(manager);
	}

	public List<Employee> getEmployees(){
		return employeeDAO.getEmployees();
		
	}
	
	public void addEmployee(Employee employee){
		employeeDAO.addEmployee(employee);
	}
	
	public void updateEmployee(String email){
		employeeDAO.updateEmployee(email);
	}
	
	public void deleteEmployee(String email){
		employeeDAO.deleteEmployee(email);
	}
	
}
