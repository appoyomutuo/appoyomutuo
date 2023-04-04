import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto'
import { Tarea } from '../models/tareas';
import { Usuario } from '../models/usuario';
import { Foro } from '../models/foro';
import { Peticion } from '../models/peticion';
import { Participanteproyecto } from '../models/participanteproyecto';
// import 'rxjs/add/operator/map';
import { finalize, map, tap } from 'rxjs/operators';
import { collection, query, where, getDocs } from "firebase/firestore";
import { getDatabase, ref, push, set } from "firebase/database";

import { ProfileComponent } from '../components/profile/profile.component';
// import 'rxjs/Rx';

// const db = getDatabase();
// const projectsRef = ref(db, 'Proyectos');

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {
  
  proyectosCollection: AngularFirestoreCollection<Proyecto>;
  proyectos: Observable<Proyecto[]>;
  proyectosDoc: AngularFirestoreDocument<Proyecto> | undefined;
  
  downloadURL: Observable<string> | undefined;
  fb: any;

  tareasCollection: AngularFirestoreCollection<Tarea>;
  tareas: Observable<Tarea[]>;
  tareasDoc: AngularFirestoreDocument<Tarea> | undefined;

  peticionesCollection: AngularFirestoreCollection<Peticion>;
  peticiones: Observable<Peticion[]>;
  peticionesDoc: AngularFirestoreDocument<Peticion> | undefined;

  participanteProyectoCollection: AngularFirestoreCollection<Participanteproyecto>;
  participanteProyecto: Observable<Participanteproyecto[]>;
  participanteProyectoDoc: AngularFirestoreDocument<Participanteproyecto> | undefined;

  usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;
  usuariosDoc: AngularFirestoreDocument<Usuario> | undefined;
  

  forosCollection: AngularFirestoreCollection<Foro>;
  foros: Observable<Foro[]>;
  forosDoc: AngularFirestoreDocument<Foro> | undefined;
  
  constructor(public afs: AngularFirestore, private storage: AngularFireStorage) {
    // PROYECTOS
    this.proyectosCollection = this.afs.collection('Proyectos', ref => ref.orderBy('name', 'desc'));

    this.proyectos = this.proyectosCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Proyecto;
        data.id = a.payload.doc.id;
        return data;
      });
    }))

    // USUARIOS
    // this.usuariosCollection = this.afs.collection('Usuarios');
  }

  // ==============================================================================>PROYECTOS
  getItems(){
    console.log("usando servicio");
    return this.proyectos;
  }

  addItem(item: Proyecto){
    this.proyectosCollection?.add(item);
    console.log("proyecto añadido", item)
  }

  // addImages(filesData:any[]){
  //   var n = Date.now();
  //   var files = filesData;
  //   // console.log("files", files)
  //   const filePath = `ProyectImages/${n}`;
  //   const fileRef = this.storage.ref(filePath);
  //   var urlFiles: string[] = []
  //   for (let index = 0; index < files.length; index++) {
  //     // console.log("files", files[index])
  //     const task = this.storage.upload(`ProyectImages/${n}`, files[index].name);
  //     task
  //       .snapshotChanges()
  //       .pipe(
  //         finalize(() => {
  //           this.downloadURL = fileRef.getDownloadURL();
  //           this.downloadURL.subscribe(url => {
  //             if (url) {
  //               this.fb = url;
  //               urlFiles.push(this.fb)
  //             }
  //             console.log("urlFiles",urlFiles);
  //           });
  //         })
  //       )
  //       .subscribe(url => {
  //         if (url) {
  //           console.log(url);
  //         }
  //       });
  //   }
  //   // console.log("urlFiles",urlFiles)
  //   return urlFiles
  // }

  addItem2(item:Proyecto, filesData:any[]){
    var n = Date.now();
    var files = filesData;
    console.log("files", files)
    var urlFiles: string[] = []
    for (let index = 0; index < files.length; index++) {
      // console.log("files", files[index])
      const task = this.storage.upload(`ProyectImages/${files[index].name}`, files[index]);
      task
      .snapshotChanges()
      .pipe(
        finalize(() => {
            var filePath = `ProyectImages/${files[index].name}`;
            var fileRef = this.storage.ref(filePath);
            console.log("file ref", fileRef)
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.fb = url;
                urlFiles.push(this.fb)
                console.log("this fb", this.fb)
              }
              if(urlFiles.length == files.length){
                item.imagenes = urlFiles
                this.proyectosCollection?.add(item);
                console.log("proyecto añadido", item)
              }
            });
          })
        )
        .subscribe(url => {
          if (url) {
            console.log(url);
          }
        });
    }
  }

  updateItem(item:Proyecto){
    this.proyectosDoc = this.afs.doc(`Proyectos/${item.id}`);
    this.proyectosDoc.update(item);
    
  }

  deleteItem(item: Proyecto){
    this.proyectosDoc = this.afs.doc(`Proyectos/${item.id}`);
    this.proyectosDoc.delete();
    console.log("elemento borrado");
  }

  addNewImages(item:Proyecto, newImages:any){
    var n = Date.now();
    var files = newImages;
    console.log("files", files)
    var urlFiles: string[] = []
    for (let index = 0; index < files.length; index++) {
      // console.log("files", files[index])
      const task = this.storage.upload(`ProyectImages/${files[index].name}`, files[index]);
      task
      .snapshotChanges()
      .pipe(
        finalize(() => {
            var filePath = `ProyectImages/${files[index].name}`;
            var fileRef = this.storage.ref(filePath);
            console.log("file ref", fileRef)
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.fb = url;
                item.imagenes.push(this.fb)
                console.log("this fb", this.fb)
                this.updateItem(item);
              }
            });
          })
        )
        .subscribe(url => {
          if (url) {
            console.log(url);
          }
        });
    }
  }

  searchItemByMail(mail:string){
    var myProjects =this.afs.collection('Proyectos', ref => ref.where('owner', '==', mail)).snapshotChanges().pipe(
      map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data() as Proyecto;
          data.id = a.payload.doc.id;
          data.$key = a.payload.doc.id;
          return data;
        });
      })
    );
    return  myProjects
  }

  getItemByID(id:any){
    var project = this.afs.collection("Proyectos").doc(id).valueChanges().pipe(
      tap(docs => console.log('docs', docs)),
      map(val => val)
    );
    console.log("proyecto encontrado", project)
    return project
  }

  // ==============================================================================>BÚSQUEDAS
  getItemsByCategoria(categoria:string){
    var projects =this.afs.collection('Proyectos', ref => ref.where('categoria', '==', categoria)).snapshotChanges().pipe(
      map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data() as Proyecto;
          data.id = a.payload.doc.id;
          data.$key = a.payload.doc.id;
          return data;
        });
      })
    );
    return  projects
  }

  getItemsByComunidad(comunidad:string){
    console.log("mellaman")
    var projects =this.afs.collection('Proyectos', ref => ref.where('comunidad', '==', comunidad)).snapshotChanges().pipe(
      map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data() as Proyecto;
          data.id = a.payload.doc.id;
          data.$key = a.payload.doc.id;
          return data;
        });
      })
    );
    return  projects
  }

  // ==============================================================================>TAREAS
  addTask(task:any){
    this.tareasCollection = this.afs.collection('Tareas');
    this.tareasCollection?.add(task);
    console.log("tarea añadida", task)
  }

  getTasksByIDProject(idProject:any){
    var tasks =this.afs.collection('Tareas', ref => ref.where('idProyecto', '==', idProject)).snapshotChanges().pipe(
      map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data() as Tarea;
          data.idTarea = a.payload.doc.id;
          data.$key = a.payload.doc.id;
          return data;
        });
      })
    );
    return  tasks
  }

  updateTask(task:Tarea){
    this.proyectosDoc = this.afs.doc(`Tareas/${task.idTarea}`);
    this.proyectosDoc.update(task);
  }

  editTask(task:any){
    console.log("update task", task.newTask)
    this.proyectosDoc = this.afs.doc(`Tareas/${task.newTask.idTarea}`);
    this.proyectosDoc.update(task.newTask);
  }

  deleteTask(item: any){
    this.proyectosDoc = this.afs.doc(`Tareas/${item.newTask.idTarea}`);
    this.proyectosDoc.delete();
    console.log("elemento borrado", item.newTask.idTarea);
  }

  // ==============================================================================>PETICIONES
  addPeticion(peticion:any){
    this.peticionesCollection = this.afs.collection('Peticiones');
    this.peticionesCollection?.add(peticion);
    console.log("peticion añadida", peticion)
  }

  getPeticionesByMail(userMail:any){
    var peticiones = this.afs.collection('Peticiones', ref => ref.where('mailOwner', '==', userMail)).snapshotChanges().pipe(
      map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data() as Peticion;
          data.idPeticion = a.payload.doc.id;
          data.$key = a.payload.doc.id;
          return data;
        });
      })
    );
    return  peticiones
  }

  updatePeticion(peticion:Peticion){
    this.peticionesDoc = this.afs.doc(`Peticiones/${peticion.idPeticion}`);
    this.peticionesDoc.update(peticion);
  }

  // ==============================================================================>PARTICIPANTES-PROYECTOS
  searchParticipantesByMail(participanteMail:any){
    var participaciones = this.afs.collection('ParticipanteProyecto', ref => ref.where('mailParticipante', '==', participanteMail)).snapshotChanges().pipe(
      map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data() as Participanteproyecto;
          data.id = a.payload.doc.id;
          data.$key = a.payload.doc.id;
          return data;
        });
      })
    );
    return  participaciones
  }

  addParticipante(item:Participanteproyecto){
    this.participanteProyectoCollection = this.afs.collection('ParticipanteProyecto');
    this.participanteProyectoCollection?.add(item);
    console.log("participante añadido", item)
  }

  // ==============================================================================>FORO
  createForoAddFirstMensaje(item:Foro){
    this.forosCollection = this.afs.collection('Foros');
    this.forosCollection?.add(item);
    console.log("foro añadido", item)
  }
  getForoByIdProject(idProyecto:any){
    console.log("id proyecto para foro: ", idProyecto)
    var foro = this.afs.collection('Foros', ref => ref.where('idProyecto', '==', idProyecto)).snapshotChanges().pipe(
      map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data() as Foro;
          data.idForo = a.payload.doc.id;
          data.$key = a.payload.doc.id;
          return data;
        });
      })
    );
    return  foro
  }

  // ==============================================================================>USUARIO
  addUsuario(item:Usuario){
    this.usuariosCollection = this.afs.collection('Usuarios');
    this.usuariosCollection?.add(item);
    console.log("usuario añadido", item)
  }

  deleteUsuario(itemID: any){
    this.proyectosDoc = this.afs.doc(`Usuarios/${itemID}`);
    this.proyectosDoc.delete();
    console.log("usuario borrado");
  }

  addUsuarioAndImage(item:Usuario, filesData:any[]){
    // this.usuariosCollection = this.afs.collection('Usuarios');
    var n = Date.now();
    var files = filesData;
    console.log("files", files)
    var urlFiles: string[] = []
    for (let index = 0; index < files.length; index++) {
      // console.log("files", files[index])
      const task = this.storage.upload(`UsuariosImages/${files[index].name}`, files[index]);
      task
      .snapshotChanges()
      .pipe(
        finalize(() => {
            var filePath = `UsuariosImages/${files[index].name}`;
            var fileRef = this.storage.ref(filePath);
            console.log("file ref", fileRef)
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.fb = url;
                urlFiles.push(this.fb)
                console.log("this fb", this.fb)
              }
              if(urlFiles.length == files.length){
                item.foto = urlFiles
                // this.usuariosCollection?.add(item);
                // console.log("usuario añadido", item)
                this.addUsuario(item)
              }
            });
          })
        )
        .subscribe(url => {
          if (url) {
            console.log(url);
          }
        });
    }
  }

  getUsuarioByMail(userMail:any){
    var usuario = this.afs.collection('Usuarios', ref => ref.where('mail', '==', userMail)).snapshotChanges().pipe(
      map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data() as Usuario;
          data.idUsuario = a.payload.doc.id;
          data.$key = a.payload.doc.id;
          return data;
        });
      })
    );
    return  usuario
  }

  updateUsuario(usuario:Usuario){
    console.log("update usuario", usuario)
    this.peticionesDoc = this.afs.doc(`Usuarios/${usuario.idUsuario}`);
    this.peticionesDoc.update(usuario);
  }

  updateUsuarioAndImage(item:Usuario, filesData:any[]){
     // this.usuariosCollection = this.afs.collection('Usuarios');
     var n = Date.now();
     var files = filesData;
     console.log("files", files)
     var urlFiles: string[] = []
     for (let index = 0; index < files.length; index++) {
       // console.log("files", files[index])
       const task = this.storage.upload(`UsuariosImages/${files[index].name}`, files[index]);
       task
       .snapshotChanges()
       .pipe(
         finalize(() => {
             var filePath = `UsuariosImages/${files[index].name}`;
             var fileRef = this.storage.ref(filePath);
             console.log("file ref", fileRef)
             this.downloadURL = fileRef.getDownloadURL();
             this.downloadURL.subscribe(url => {
               if (url) {
                 this.fb = url;
                 urlFiles.push(this.fb)
                 console.log("this fb", this.fb)
               }
               if(urlFiles.length == files.length){
                 item.foto = urlFiles
                 // this.usuariosCollection?.add(item);
                 // console.log("usuario añadido", item)
                 this.updateUsuario(item)
               }
             });
           })
         )
         .subscribe(url => {
           if (url) {
             console.log(url);
           }
         });
     }
  }
}
