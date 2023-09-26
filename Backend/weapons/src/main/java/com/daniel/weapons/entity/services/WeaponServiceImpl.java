package com.daniel.weapons.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daniel.weapons.entity.dao.IWeaponDao;
import com.daniel.weapons.entity.models.Weapon;

@Service
public class WeaponServiceImpl implements IWeaponService{
	
	@Autowired
	private IWeaponDao weaponDao;
	
	@Override
	public Weapon get(long id) {
		return weaponDao.findById(id).get();
	}

	@Override
	public List<Weapon> getAll() {
		return (List<Weapon>) weaponDao.findAll();
	}

	@Override
	public void post(Weapon weapon) {
		weaponDao.save(weapon);
		
	}

	@Override
	public void update(Weapon weapon, long id) {
		weaponDao.findById(id).ifPresent((x)->{
			weapon.setId(id);
			weaponDao.save(weapon);
		});
	}

	@Override
	public void delete(long id) {
		weaponDao.deleteById(id);
		
	}

}
