import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs';

@Component({
  selector: 'app-table-payments',
  templateUrl: './table-payments.component.html',
  styleUrls: ['./table-payments.component.scss']
})
export class TablePaymentsComponent implements OnInit {
  public querySearch = new FormControl(null);
  public products: any;
  public display: boolean = false;
  public formEdit!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.products = this.mockData();
    this.listenerQuerySearch();
  }

  public createForm(): void {
    this.formEdit = this.formBuilder.group({
      usuario: [null, Validators.required],
      valor: [null, Validators.required],
      data: [null, Validators.required],
      titulo: [null]
    })
  }


  public listenerQuerySearch(): void {
    this.querySearch.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe({
      next: v => {
        if (v) {
          this.searchUser(v);
        } else {
          this.products = this.mockData();
          console.log(this.products);
        }
      }
    })
  }

  public searchUser(name: any): void {
    const result = this.products.filter((user: any) => user.name.toLowerCase().trim() === name.toLowerCase().trim());
    this.products = result;
    console.log(result);
  }

  public updateUser(user: any): void {
    this.formEdit.patchValue({
      usuario: user?.name,
      valor: user?.price,
      data: user?.rating,
      titulo: user?.inventoryStatus
    });
    this.showDialog();
  }

  public showDialog(): void {
    this.display = !this.display;
  }

  public get usuarioControl(): AbstractControl | null {
    return this.formEdit.controls['usuario'];
  }

  public get valorControl(): AbstractControl | null {
    return this.formEdit.controls['valor'];
  }

  public get dataControl(): AbstractControl | null {
    return this.formEdit.controls['data'];
  }

  public mockData(): Array<any> {
    return [
      {
        "id": "1000",
        "code": "f230fh0g3",
        "name": "Bamboo Watch",
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "price": 65,
        "category": "Accessories",
        "quantity": 24,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1001",
        "code": "nvklal433",
        "name": "Black Watch",
        "description": "Product Description",
        "image": "black-watch.jpg",
        "price": 72,
        "category": "Accessories",
        "quantity": 61,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "1002",
        "code": "zz21cz3c1",
        "name": "Blue Band",
        "description": "Product Description",
        "image": "blue-band.jpg",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "1003",
        "code": "244wgerg2",
        "name": "Blue T-Shirt",
        "description": "Product Description",
        "image": "blue-t-shirt.jpg",
        "price": 29,
        "category": "Clothing",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1004",
        "code": "h456wer53",
        "name": "Bracelet",
        "description": "Product Description",
        "image": "bracelet.jpg",
        "price": 15,
        "category": "Accessories",
        "quantity": 73,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "1005",
        "code": "av2231fwg",
        "name": "Brown Purse",
        "description": "Product Description",
        "image": "brown-purse.jpg",
        "price": 120,
        "category": "Accessories",
        "quantity": 0,
        "inventoryStatus": "OUTOFSTOCK",
        "rating": 4
      },
      {
        "id": "1006",
        "code": "bib36pfvm",
        "name": "Chakra Bracelet",
        "description": "Product Description",
        "image": "chakra-bracelet.jpg",
        "price": 32,
        "category": "Accessories",
        "quantity": 5,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "1007",
        "code": "mbvjkgip5",
        "name": "Galaxy Earrings",
        "description": "Product Description",
        "image": "galaxy-earrings.jpg",
        "price": 34,
        "category": "Accessories",
        "quantity": 23,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1008",
        "code": "vbb124btr",
        "name": "Game Controller",
        "description": "Product Description",
        "image": "game-controller.jpg",
        "price": 99,
        "category": "Electronics",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 4
      },
      {
        "id": "1009",
        "code": "cm230f032",
        "name": "Gaming Set",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "price": 299,
        "category": "Electronics",
        "quantity": 63,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      }
    ];
  }
}
