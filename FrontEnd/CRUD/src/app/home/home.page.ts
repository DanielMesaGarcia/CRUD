import { Component, ElementRef } from '@angular/core';
import { WeaponService } from '../services/weapon.service';


var ids;
var upd = false;


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

  constructor(private weaponService: WeaponService, private elementRef: ElementRef) { }



  ngOnInit() {
    this.getAllWeapons();
  }

  delWeapon(id: number) {
    this.weaponService.deleteWeapon(id).subscribe((response) => {
      this.refreshTable();
    });
  }

  updWeapon(weaponIndex: any) {
    const weaponToUpdate = this.weapons[weaponIndex];
    this.id = weaponToUpdate.id;
    ids = this.id;
    this.type = weaponToUpdate.type;
    this.element = weaponToUpdate.element;
    this.monster = weaponToUpdate.monster;
    upd = true;
    const avisoDiv = this.elementRef.nativeElement.querySelector('#aviso');
    avisoDiv.style.display = 'block';
  }

  reset() {
    this.id = 0;
    ids = 0;
    this.type = '';
    this.element = '';
    this.monster = '';
    upd = false;
    const avisoDiv = this.elementRef.nativeElement.querySelector('#aviso');
    avisoDiv.style.display = 'none';
  }

  

  onSubmit() {
    const errorDiv = this.elementRef.nativeElement.querySelector('#error');
    errorDiv.style.display = 'none';
    if (this.validateInputs()) {
      if (upd == false) {
        console.log('Create clicked');
        const weaponData = {
          type: this.type,
          element: this.element,
          monster: this.monster
        };
        console.log(weaponData.element);
        this.weaponService.createWeapon(weaponData.type, weaponData.element, weaponData.monster).subscribe((response) => {

          this.refreshTable();
        });
      } else if (upd == true) {
        this.weaponService.updateWeapon(this.id, this.type, this.element, this.monster).subscribe((response) => {
          this.refreshTable();
        });
        upd = false;
      }
      this.id = 0;
      ids = 0;
      this.type = '';
      this.element = '';
      this.monster = '';
      upd = false;
    } else{
      const errorDiv = this.elementRef.nativeElement.querySelector('#error');
      errorDiv.style.display = 'block';
    }
    const avisoDiv = this.elementRef.nativeElement.querySelector('#aviso');
    avisoDiv.style.display = 'none';
  }

  getAllWeapons() {
    this.weaponService.getWeapons().subscribe((response: any) => {
      this.weapons = response;
    });
  }

  refreshTable() {
    this.getAllWeapons();
  }

  private validateInputs(): boolean {
    // Expresiones regulares para validar los campos
    const typeRegex = /^[a-zA-Z\s]+$/;
    const elementRegex = /^[a-zA-Z]+$/;
    const monsterRegex = /^[a-zA-Z\s\-?'']+$/;

    // Verificar si los campos cumplen con las expresiones regulares
    const isTypeValid = typeRegex.test(this.type);
    const isElementValid = elementRegex.test(this.element);
    const isMonsterValid = monsterRegex.test(this.monster);

    // Devolver true si todos los campos son válidos, de lo contrario, false
    return isTypeValid && isElementValid && isMonsterValid;
  }
}