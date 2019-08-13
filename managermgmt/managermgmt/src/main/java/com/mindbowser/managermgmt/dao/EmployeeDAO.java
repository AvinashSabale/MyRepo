package com.mindbowser.managermgmt.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.mindbowser.managermgmt.model.Employee;


@Repository
@Component
public class EmployeeDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	//Get List Of All Employee
	public List<Employee> getEmployees(){
		List<Employee> entries = new ArrayList<>();
		try {
			Session session = sessionFactory.openSession();
			try {
				
				//String hql = "FROM Employee";
				Query query = session.createQuery("FROM Employee e");
				entries = query.list();
				//System.out.println(entries);
				return entries;
			} finally {
				
				session.close();
			}
		} catch (Exception e) {
			
			throw new RuntimeException(e);
		}
	}
	
	//Adding New Employee
	public void addEmployee(Employee employee){
		try{
			Session session = sessionFactory.openSession();
			try{
				session.persist(employee);
			}finally{
				session.close();
			}
		}catch(Exception e){
			throw new RuntimeException(e);
		}	
	}
	//Update Existing Employee
	public void updateEmployee(String email){
		try{
			Session session = sessionFactory.openSession();
			try{
				
				Employee emp = (Employee) session.get(Employee.class, email);
				emp.setFirstName(emp.getFirstName());
				emp.setFirstName(emp.getLastName());
				emp.setAddress(emp.getAddress());
				emp.setDob(emp.getDob());
				emp.setMobile(emp.getMobile());
				emp.setCity(emp.getCity());
				
				session.update(emp);
				
			}finally{
				session.close();
			}
		}catch(Exception e){
			throw new RuntimeException(e);
		}	
	}
	//Delete Employee
	public void deleteEmployee(String email){
		try{
			Session session = sessionFactory.openSession();
			try{
				Employee emp = (Employee) session.get(Employee.class, email);
				session.remove(emp);
			}finally{
				session.close();
			}
		}catch(Exception e){
			throw new RuntimeException(e);
		}	
	}
	
}
