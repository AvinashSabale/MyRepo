package com.mindbowser.managermgmt.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.mindbowser.managermgmt.model.Manager;

@Repository
public class ManagerDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	
	@Transactional
	//Signup for Manager
	public void saveManager(Manager manager){		
		try{
			Session session = sessionFactory.openSession();
			try{
				session.persist(manager);
			}finally{
				session.close();
			}
		}catch(Exception e){
			throw new RuntimeException(e);
		}
	}
	
	//Manager Authntication (Login)
	public boolean authenticate(Manager manager){
		try{
			Session session = sessionFactory.openSession();
			try{
				Criteria crt = session.createCriteria(Manager.class);
				crt.add(Restrictions.eq("email", manager.getEmail()));
				crt.add(Restrictions.eq("password", manager.getPassword()));
				List<Manager> list = crt.list();
				int n = list.size();
				return n == 1;
			}finally{
				session.close();
			}
		}catch(Exception e){
			throw new RuntimeException(e);
		}
		
	}
	
}
