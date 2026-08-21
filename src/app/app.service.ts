import { Service } from '@angular/core';
import { Observable } from 'rxjs';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { ProjectType } from './app.type';

const firebaseConfig = {
  apiKey: 'AIzaSyAlIhQyJs_NztxImACYH6p1pFohp-rHwwA',
  authDomain: 'my-portofolio-63497.firebaseapp.com',
  projectId: 'my-portofolio-63497',
  storageBucket: 'my-portofolio-63497.firebasestorage.app',
  messagingSenderId: '938872717107',
  appId: '1:938872717107:web:b6ddafbfab9d73af69c846',
  measurementId: 'G-V6B20828N0',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Service()
export class ProjectService {
  getProjects(): Observable<ProjectType[]> {
    return new Observable<ProjectType[]>((observer) => {
      const projectsRef = collection(db, 'projects');

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
}
