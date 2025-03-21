import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Piatto } from '../../models/Piatto';
import { PiattoService } from '../../services/piatto.service';

@Component({
  selector: 'app-piatto-component',
  standalone: true, // Standalone component (Angular 15+)
  imports: [CommonModule, FormsModule], // Importa moduli necessari
  templateUrl: './piatto-component.component.html',
  styleUrls: ['./piatto-component.component.css']
})
export class PiattoComponentComponent implements OnInit {
  piatti: Piatto[] = [];
  nuovoPiatto: Piatto = { name: '', price: 0, description: '' };

  constructor(private piattoService: PiattoService) {}

  ngOnInit(): void {
    this.loadPiatti();
  }

  loadPiatti(): void {
    this.piattoService.getUsers().subscribe(piatti => {
      this.piatti = piatti;
    });
  }

  addPiatto(): void {
    if (!this.nuovoPiatto.name || this.nuovoPiatto.price <= 0) {
      alert("Nome e prezzo sono obbligatori!");
      return;
    }

    this.piattoService.addUser(this.nuovoPiatto).subscribe(piatto => {
      this.piatti.push(piatto);
      this.nuovoPiatto = { name: '', price: 0, description: '' }; // Reset form
    });
  }
}
