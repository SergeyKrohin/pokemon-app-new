import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EvolutionChainComponent } from './components/evolution-chain/evolution-chain.component';
import { EvolutionChainWrapperComponent } from './components/evolution-chain-wrapper/evolution-chain-wrapper.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { Loader } from './components/shared/loader.component';
import { PokemonDataService } from './services/pokemon-data/pokemon-data.service'
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http/http.service';
import { EvolutionChainResolver } from './services/evolution-chain-resolver/evolution-chain-resolver.service';
import { FilterPipe } from './pipes/filter.pipe';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PokemonListComponent,
    EvolutionChainComponent,
    EvolutionChainWrapperComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PokemonDataService,
    HttpService,
    EvolutionChainResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
