package com.daniel.weapons.entity.models;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "weapons")
public class Weapon implements Serializable {
	private static final long serialVersionUID =1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String type;
	
	private String element;
	
	private String monster;

	public long getid() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String gettype() {
		return type;
	}

	public void settype(String type) {
		this.type = type;
	}

	public String getelement() {
		return element;
	}

	public void setelement(String element) {
		this.element = element;
	}

	public String getmonster() {
		return monster;
	}

	public void setmonster(String monster) {
		this.monster = monster;
	}

	public Weapon(String type, String element, String monster) {
	    super();
	    this.type = type;
	    this.element = element;
	    this.monster = monster;
	}

	
	public Weapon() {
		
	}
}
