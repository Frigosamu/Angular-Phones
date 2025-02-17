import { Routes } from "@angular/router";
import { ProductDetailsComponent } from "./app/product-details/product-details.component";
import { ProductListComponent } from "./app/product-list/product-list.component";
import { ProviderComponent } from "./app/providers/provider.component";
import { ProviderDetailsComponent} from "./app/providers-details/provider-details.component";

const routeConfig: Routes = [
    {
    path: '',
    component: ProductListComponent,
    title: 'Home page'
    },
    {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product details'
    },
    {
        path: 'providers',
        component: ProviderComponent,
        title: 'Providers'
    },
    {
        path: 'providers/:providerId',
        component: ProviderDetailsComponent,
        title: 'Providers details'
    }
];
    
    export default routeConfig;