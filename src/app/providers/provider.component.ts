import { Component } from '@angular/core';
import { ProvidersService } from '../providers.service';
import { Provider } from '../providers';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-providers',
  imports: [CommonModule, RouterLink],
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.css'
})
export class ProviderComponent {

providers: Provider[] = [];

constructor(private providersService: ProvidersService) {
 }

 ngOnInit(): void {
  this.providersService.getProviders().subscribe((providersList) => {
    this.providers = providersList;
  });
  console.log('ProvidersComponent initialized');
 }
}