import { Component, OnInit } from '@angular/core'; // Import OnInit
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();

  message: string = ''; // Initialized as an empty string

  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit(): void {
    // Initialization logic can go here
  }

  addProduit() {
    this.produitService.ajouterProduit(this.newProduit).subscribe((prod) => {
      console.log(prod);
      this.router.navigate(['produits']);
    });
  }
}
