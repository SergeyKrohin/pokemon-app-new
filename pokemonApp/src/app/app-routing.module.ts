import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { EvolutionChainWrapperComponent } from './components/evolution-chain-wrapper/evolution-chain-wrapper.component';
import { EvolutionChainResolver } from './services/evolution-chain-resolver/evolution-chain-resolver.service';

const routes: Routes = [
    {
        path: 'pokemon-list',
        component: PokemonListComponent
    },
    {
        path: 'evolution-chain-wrapper/:id',
        component: EvolutionChainWrapperComponent,
        resolve: {
            evolutionChain: EvolutionChainResolver
        }
    },
    {
        path: '**',
        redirectTo: '/pokemon-list',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
