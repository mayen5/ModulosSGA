import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { AboutComponent } from './components/about/about.component';
import { ModuloComponent } from './components/modulo/modulo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
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
import { LoginComponent } from './components/login/login.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'modulos', component: ModulosComponent },
    { path: 'about', component: AboutComponent },
    { path: 'alumnos', component: AlumnosComponent },
    { path: 'carreras', component: CarrerasComponent },
    { path: 'clases', component: ClasesComponent },
    { path: 'clases-alumnos', component: ClasesAlumnosComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'grupos-academicos', component: GruposAcademicosComponent },
    { path: 'profesores-cursos', component: ProfesoresCursosComponent },
    { path: 'profesores', component: ProfesoresComponent },
    { path: 'puestos', component: PuestosComponent },
    { path: 'salones', component: SalonesComponent },
    { path: 'agregar-carrera', component: AgregarCarreraComponent },
    { path: 'agregar-puesto', component: AgregarPuestoComponent },
    { path: 'agregar-curso', component: AgregarCursoComponent },
    { path: 'agregar-salon', component: AgregarSalonComponent },
    { path: 'agregar-grupo-academico', component: AgregarGrupoAcademicoComponent },
    { path: 'agregar-carrera/:id', component: AgregarCarreraComponent },
    { path: 'agregar-puesto/:id', component: AgregarPuestoComponent },
    { path: 'agregar-curso/:id', component: AgregarCursoComponent },
    { path: 'agregar-salon/:id', component: AgregarSalonComponent },
    { path: 'agregar-grupo-academico/:id', component: AgregarGrupoAcademicoComponent },
    { path: 'modulo/:id', component: ModuloComponent },
    { path: 'buscador/:termino', component: BuscadorComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
