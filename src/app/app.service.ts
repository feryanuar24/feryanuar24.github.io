import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { collection, Firestore, onSnapshot } from '@angular/fire/firestore';
import { ProjectType } from './app.type';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private db = inject(Firestore);

  getProjects(): Observable<ProjectType[]> {
    return new Observable<ProjectType[]>((observer) => {
      const projectsRef = collection(this.db, 'projects');

      const unsubscribe = onSnapshot(
        projectsRef,
        (snapshot) => {
          const projects = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as ProjectType[];

          observer.next(projects);
        },
        (error) => {
          console.error('Error fetching projects:', error);
          observer.error(error);
        },
      );

      return () => unsubscribe();
    });
  }

  getProjectById(id: string): Observable<ProjectType | undefined> {
    return this.getProjects().pipe(
      map((projects) => projects.find((project) => project.id === id)),
    );
  }
}
