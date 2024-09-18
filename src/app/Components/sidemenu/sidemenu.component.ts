import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  /*
  
  */
  userName: string = "Calo Telo";
  theme: string = "";
  widthMenu: number = 25;
  visibleMenu: boolean = true;


  setVisibilityMenu(): boolean {
    this.visibleMenu = !this.visibleMenu;// flase -> true true.>false
    return this.visibleMenu;
  }

  setThemeColor(color: string): void {
    this.currentColorIndex = (this.currentColorIndex + 1) % this.themeColors.length;
    this.theme = this.themeColors[this.currentColorIndex];
  }

  setSizesMenu() {
    this.widthMenu += 10;
    if (this.widthMenu > 100) {
      this.widthMenu = 50;
    }
  }

  themeColors = ['rgb(19, 90, 114)', '#ff6600', '#4B0082', '#8A0000'];
  currentColorIndex = 0;
}
