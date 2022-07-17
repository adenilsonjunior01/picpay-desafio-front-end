import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  // FAZER CHAMADA PARA O SERVIÇO DE LOGOUT E LIMPAR STORAGE
  public logout(): void {
    this.router.navigateByUrl('/login')
  }
}
