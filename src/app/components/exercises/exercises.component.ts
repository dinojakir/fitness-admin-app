import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DbService, Documents } from 'src/app/services/db.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
})
export class ExercisesComponent implements OnInit {
  exercises: any[] = [];
  height: number = 600;

  constructor(private dbService: DbService) {}

  async ngOnInit(): Promise<void> {
    this.exercises = await firstValueFrom(
      this.dbService.getData(Documents.Exercises)
    );
  }
}
