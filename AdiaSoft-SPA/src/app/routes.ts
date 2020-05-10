import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './Home/Home.component';


export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'forgotPassword', component: ForgotComponent },
    // { path: 'imgCropper', component: AppImgCropperComponent },
    // { path: 'signIn', component: SigninComponent },
    // { path: 'confirmEmail/:code', component: ConfirmEmailComponent, resolve: { user: EmailConfirmResolver } },
    // { path: 'resetPassword/:code', component: ResetPasswordComponent, resolve: { user: ResetPasswordResolver } },
    // { path: 'selfRegister/:code', component: SelfRegisterComponent, resolve: { user: EmailConfirmResolver } },

    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            // { path: '', component: HomePanelComponent },
            // { path: 'home', component: HomePanelComponent, resolve: { user: UserHomeResolver } },

        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
