package com.mindbowser.managermgmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mindbowser.managermgmt.model.Employee;
import com.mindbowser.managermgmt.model.Manager;
import com.mindbowser.managermgmt.service.ManagerService;

@RestController
public class ManagerController {

	@Autowired
	private ManagerService managerService;
	
	@PostMapping(value="signup", consumes="application/json")
	public String signup(@RequestBody Manager manager){
		managerService.saveManager(manager);
		return "success";
	}
	
	@PostMapping(value="login", consumes="application/json")
	public String login(@RequestBody Manager manager){
		boolean result = managerService.authenticate(manager);
		return result ? "success" : "failed";
	}
	
	@GetMapping(value="getEmployees", produces={"application/json", "application/xml"})
	public List<Employee> getEmployees(){
		return managerService.getEmployees();
	}
	
	@PostMapping(value="addEmployee", consumes="application/json")
	public void addEmployee(Employee employee){
		managerService.addEmployee(employee);
	}
	
	@GetMapping(value="updateEmployee/{id}", produces={"application/json", "application/xml"})
	public void updateEmployee(@PathVariable String id){
		managerService.updateEmployee(id);
	}
	
	@GetMapping(value="deleteEmployee/{id}", produces={"application/json", "application/xml"})
	public void deleteEmployee(@PathVariable String id){
		managerService.deleteEmployee(id);
	}
}
