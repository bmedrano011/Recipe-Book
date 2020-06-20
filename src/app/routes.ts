import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'recipes', component: RecipesComponent},
      { path: 'shopping-list', component: ShoppingListComponent},
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
