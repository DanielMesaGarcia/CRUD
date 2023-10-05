package com.daniel.weapons.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daniel.weapons.entity.models.Weapon;
import com.daniel.weapons.entity.services.IWeaponService;

@RestController
@CrossOrigin(origins="*")
public class WeaponController {
	@Autowired
	IWeaponService weaponService;
	
	@GetMapping("/weapons")
	public List<Weapon> getAllWeapons(){
		return weaponService.getAll();
	}
	
	@GetMapping("/weapons/{id}")
	public Weapon getOne(@PathVariable(value = "id") long id) {
		return weaponService.get(id);
	}
	
	@PostMapping("/weapons")
	public void post(Weapon weapon) {
		weaponService.post(weapon);
	}
	
	@PutMapping("/weapons/{id}")
	public void put(Weapon weapon, @PathVariable(value ="id") long id) {
		weaponService.update(weapon, id);
	}
	
	@DeleteMapping("/weapons/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		weaponService.delete(id);
	}
}
