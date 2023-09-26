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
	
	private String Type;
	
	private String Element;
	
	private String Monster;

	public long getid() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getType() {
		return Type;
	}

	public void setType(String type) {
		Type = type;
	}

	public String getElement() {
		return Element;
	}

	public void setElement(String element) {
		Element = element;
	}

	public String getMonster() {
		return Monster;
	}

	public void setMonster(String monster) {
		Monster = monster;
	}

	public Weapon(String type, String element, String monster) {
		super();
		this.Type = type;
		this.Element = element;
		this.Monster = monster;
	}
	
	public Weapon() {
		
	}
}
