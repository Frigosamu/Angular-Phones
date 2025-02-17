import { Component } from '@angular/core';
import { Provider } from '../providers';
import { ProvidersService } from '../providers.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-providers-details',
  imports: [RouterLink],
  templateUrl: './provider-details.component.html',
  styleUrl: './provider-details.component.css'
})
export class ProviderDetailsComponent {
  provider: Provider | undefined;
  products = [...products];

  constructor(private route: ActivatedRoute, private ProviderService: ProvidersService){}

  ngOnInit(): void{
    const routeParams = this.route.snapshot.paramMap;
    const providerIdFromRoute = Number(routeParams.get('providerId'));

    this.ProviderService.getProviders().subscribe(providers => {
      this.provider = providers.find(p => p.id === providerIdFromRoute);
    });

    this.products = products.filter(p => p.id === providerIdFromRoute);
  }

}