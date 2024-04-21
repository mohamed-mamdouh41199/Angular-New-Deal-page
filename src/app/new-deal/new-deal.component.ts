import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-deal',
  standalone: true,
  imports: [CommonModule , ChipsModule , ButtonModule , FormsModule],
  templateUrl: './new-deal.component.html',
  styleUrl: './new-deal.component.scss'
})

export class NewDealComponent
{
  selectedPlace: string = '...';
  title: string = "إنشاء صفقة جديدة";

  // Dummy locations
  places =
  [
    "التجمع الأول",
    "التجمع الخامس",
    "المعادي",
    "مدينة نصر",
    "التجمع الأول",
    "التجمع الخامس",
    "المعادي",
    "مدينة نصر",
  ];
  sentencePrefix = 'شراء / تأجير شقة سكنية في منطقة';

  isListPlacesVisible = false;
  toggleListPlacesVisibility() {
    this.isListPlacesVisible = !this.isListPlacesVisible;
  }
  selectPlace(place: string) {
    this.selectedPlace = place;
    this.isListPlacesVisible = false;
  }


  // Dummy Client names
  dummyData = [
    { name: "محمد ممدوح محمد"},
    { name: "محمد"},
    { name: "صبري"},
    { name: "محمد ممدوح محمد صبري"},
  ];
  isListNamesVisible: boolean = false;
  toggleListVisibility() {
    this.isListNamesVisible = !this.isListNamesVisible;
  }

  updatePlaceholder(name: string) {
    // Update the placeholder text with the selected name
    const placeholderElement = document.querySelector('.placeholder');
    if (placeholderElement) {
      placeholderElement.textContent = name;
      this.isListNamesVisible = false;
    }
  }

  // custom progress  bar ranges
  sliderValue = 10;
  rangeValFunc(event: any): void {
    this.sliderValue = event.target.value;
  }

  // Dummy admin names and imgs
  dummyAdmins = [
    { name: "محمد ممدوح " , image:"../assets/img2.jpeg" },
    { name: "محمد الغريب " , image:"../assets/img1.jpeg" },
    { name: "ممدوح محمد  " , image:"../assets/img2.jpeg" },
    { name: "محمد الغريب " , image:"../assets/img1.jpeg" },
  ];

  isListAdminsVisible: boolean = false;
  toggleListAdminsVisibility() {
    this.isListAdminsVisible = !this.isListAdminsVisible;
  }

  updateAdminName(name: string , image: string ) {
    // Update the placeholder text with the selected name
    const AdminName = document.querySelector('.name');
    const AdminImage = document.querySelector('img');
    if (AdminName && AdminImage) {
      AdminName.textContent = name;
      AdminImage.src = image;
      this.isListAdminsVisible = false;
    }
  }

  // Chips section
  chipsValues: string[] = [];
  colors: string[] = ['Blue' , 'Green' , 'Red'];

  addChip(value: string) {
    this.chipsValues.push(value);
  }

  getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
