import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from '../app/services/auth.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CircularmenuComponent } from './components/circularmenu/circularmenu.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PopupFiltersComponent } from './components/popup-filters/popup-filters.component';
import { ProjectCreatorComponent } from './components/project-creator/project-creator.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ProyectoService } from './services/proyecto.service';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { LoginroomComponent } from './components/loginroom/loginroom.component';
import { LoginComponent } from './components/login/login.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginbuttonComponent } from './components/loginbutton/loginbutton.component';
import { PrincipalsliderComponent } from './components/principalslider/principalslider.component';
import { PopupWarningComponent } from './components/popup-warning/popup-warning.component';
import { MyprojectsComponent } from './components/myprojects/myprojects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { PopupMapaComponent } from './components/popup-mapa/popup-mapa.component';
import { PopupNewtareaComponent } from './components/popup-newtarea/popup-newtarea.component';
import { PopupPeticionComponent } from './components/popup-peticion/popup-peticion.component';
import { MypeticionesComponent } from './components/mypeticiones/mypeticiones.component';
import { ForoComponent } from './components/foro/foro.component';
import { PopupAcceptpeticionComponent } from './components/popup-acceptpeticion/popup-acceptpeticion.component';
import { MapaDetalleComponent } from './components/mapa-detalle/mapa-detalle.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { PopupEditarperfilComponent } from './components/popup-editarperfil/popup-editarperfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CircularmenuComponent,
    BuscadorComponent,
    PopupFiltersComponent,
    ProjectCreatorComponent,
    CarrouselComponent,
    LoginroomComponent,
    LoginComponent,
    NewuserComponent,
    LogoutComponent,
    ProfileComponent,
    LoginbuttonComponent,
    PrincipalsliderComponent,
    PopupWarningComponent,
    MyprojectsComponent,
    ProjectDetailComponent,
    FaqComponent,
    ContactComponent,
    TareasComponent,
    ProjectListComponent,
    PopupMapaComponent,
    PopupNewtareaComponent,
    PopupPeticionComponent,
    MypeticionesComponent,
    ForoComponent,
    PopupAcceptpeticionComponent,
    MapaDetalleComponent,
    ProjectEditComponent,
    CategoriasComponent,
    PopupEditarperfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    routing,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [appRoutingProviders, ProyectoService, AuthService],
  bootstrap: [AppComponent, LoginbuttonComponent]
})
export class AppModule { }
