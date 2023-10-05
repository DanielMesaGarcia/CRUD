import { Component } from '@angular/core';
import { WeaponService } from '../services/weapon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weapons: any = [];
  action: string = '';
  id: number = 0;
  type: any;
  element: any;
  monster: any;

  constructor(private weaponService: WeaponService) {}

  ngOnInit() {
    this.getAllWeapons();
  }

  onSubmit() {
    if (this.action === 'Create') {
      console.log('Create clicked');
      const weaponData = {
        type: this.type,
        element: this.element,
        monster: this.monster
      };
      console.log(weaponData.element);
      this.weaponService.createWeapon(weaponData.type,weaponData.element,weaponData.monster).subscribe((response) => {
        
        this.refreshTable();
      });
    } else if (this.action === 'Delete') {
      this.weaponService.deleteWeapon(this.id).subscribe((response) => {
        this.refreshTable();
      });
    } else if (this.action === 'Update') {
      const weaponData = {
        type: this.type,
        element: this.element,
        monster: this.monster
      };
      this.weaponService.updateWeapon(this.id, weaponData).subscribe((response) => {
        this.refreshTable();
      });
    }
  }

  getAllWeapons() {
    this.weaponService.getWeapons().subscribe((response: any) => {
      this.weapons = response;
    });
  }

  refreshTable() {
    this.getAllWeapons();
  }
}