import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { ModulosService } from './services/modulos.service';
import { AlumnoService } from './services/alumno.service';
import { CarreraService } from './services/carrera.service';
import { ClaseService } from './services/clase.service';
import { ClaseAlumnoService } from './services/clase-alumno.service';
import { CursoService } from './services/curso.service';
import { GrupoAcademicoService } from './services/grupo-academico.service';
import { ProfesorCursoService } from './services/profesor-curso.service';
import { ProfesorService } from './services/profesor.service';
import { PuestoService } from './services/puesto.service';
import { SalonService } from './services/salon.service';
import { LoginService } from './services/login.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CardModuloComponent } from './components/card-modulo/card-modulo.component';
import { ModuloComponent } from './components/modulo/modulo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ClasesAlumnosComponent } from './components/clases-alumnos/clases-alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { GruposAcademicosComponent } from './components/grupos-academicos/grupos-academicos.component';
import { ProfesoresCursosComponent } from './components/profesores-cursos/profesores-cursos.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { PuestosComponent } from './components/puestos/puestos.component';
import { SalonesComponent } from './components/salones/salones.component';
import { AgregarCarreraComponent } from './components/carreras/agregar-carrera/agregar-carrera.component';
import { AgregarPuestoComponent } from './components/puestos/agregar-puesto/agregar-puesto.component';
import { AgregarCursoComponent } from './components/cursos/agregar-curso/agregar-curso.component';
import { AgregarSalonComponent } from './components/salones/agregar-salon/agregar-salon.component';
import { AgregarGrupoAcademicoComponent } from './components/grupos-academicos/agregar-grupo-academico/agregar-grupo-academico.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ModulosComponent,
    AboutComponent,
    FooterComponent,
    CardModuloComponent,
    ModuloComponent,
    BuscadorComponent,
    CarrerasComponent,
    TablaComponent,
    AlumnosComponent,
    ClasesComponent,
    ClasesAlumnosComponent,
    CursosComponent,
    GruposAcademicosComponent,
    ProfesoresCursosComponent,
    ProfesoresComponent,
    PuestosComponent,
    SalonesComponent,
    AgregarCarreraComponent,
    AgregarPuestoComponent,
    AgregarCursoComponent,
    AgregarSalonComponent,
    AgregarGrupoAcademicoComponent,
    LoadingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    ModulosService,
    AlumnoService,
    CarreraService,
    ClaseAlumnoService,
    ClaseService,
    CursoService,
    GrupoAcademicoService,
    ProfesorCursoService,
    ProfesorService,
    PuestoService,
    SalonService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
