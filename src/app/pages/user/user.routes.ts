import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../user/user.component').then((p) => p.UserComponent)
    }
]