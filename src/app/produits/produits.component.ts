import { Component, OnInit } from '@angular/core'; // Import OnInit
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {
  // Implement OnInit
  produits: Produit[];
  constructor(private produitService: ProduitService) {
    this.produits = [];
  }

  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();
  }

  supprimerProduit(p: Produit) {
    //console.log(p);
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.produitService.supprimerProduit(p);
  }
}
