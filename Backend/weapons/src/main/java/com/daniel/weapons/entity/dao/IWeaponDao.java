package com.daniel.weapons.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.daniel.weapons.entity.models.Weapon;

public interface IWeaponDao extends CrudRepository<Weapon, Long>{

}
