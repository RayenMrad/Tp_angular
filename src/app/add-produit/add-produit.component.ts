import { Component, OnInit } from '@angular/core'; // Import OnInit
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();

  message: string = ''; // Initialized as an empty string

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    // Initialization logic can go here
  }

  addProduit() {
    //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message =
      'Produit ' + this.newProduit.nomProduit + ' ajouté avec succès !'; // Added spaces for readability
  }
}
