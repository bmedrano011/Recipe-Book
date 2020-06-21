import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
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
