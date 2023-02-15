import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ProjectCreatorComponent } from './components/project-creator/project-creator.component';
import { LoginroomComponent } from './components/loginroom/loginroom.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyprojectsComponent } from './components/myprojects/myprojects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { MypeticionesComponent } from './components/mypeticiones/mypeticiones.component';
import { ForoComponent } from './components/foro/foro.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { CategoriasComponent } from './components/categorias/categorias.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'loginRoom', component:LoginroomComponent},
    {path: 'login', component:LoginComponent},
    {path: 'logout', component:LogoutComponent},
    {path: 'newuser', component:NewuserComponent},
    {path: 'profile', component:ProfileComponent},
    {path: 'myprojects', component:MyprojectsComponent},
    {path: 'home', component:HomeComponent},
    {path: 'categorias', component:CategoriasComponent},
    {path: 'buscador', component:BuscadorComponent},
    {path: 'creador', component:ProjectCreatorComponent},
    {path: 'edit-project', component:ProjectEditComponent},
    {path: 'projectDetail', component:ProjectDetailComponent},
    {path: 'tareas', component:TareasComponent},
    {path: 'foro', component:ForoComponent},
    {path: 'peticiones', component:MypeticionesComponent},
    {path: 'informacion', component:FaqComponent},
    {path: 'contacto', component:ContactComponent},
    {path: '**', component:HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, {
//     //    // Restore the last scroll position
//     //   scrollPositionRestoration: "enabled",
//     //   scrollOffset: [0, 0],
//     //   // Enable scrolling to anchors
//     //   anchorScrolling: "enabled",
//     });