package com.daniel.weapons.entity.services;

import java.util.List;

import com.daniel.weapons.entity.models.Weapon;

public interface IWeaponService {
	public Weapon get(long id);
	public List<Weapon> getAll();
	public void post(Weapon weapon);
	public void update(Weapon weapon, long id);
	public void delete(long id);
}
