import { Component } from '@angular/core';
import { RESULTS } from './results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results = RESULTS;
  subjectResults = this.results.subject_results;
  meanMarks = this.results.mean_marks;
  streamPosition = this.results.stream_position;
  overallPosition = this.results.overall_position;
  pastPerformance = this.results.student_performance_over_time;
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  barChartLabels = this.pastPerformance.map(p => p.exam_name);
  barChartType = 'line';
  barChartLegend = false;
  barChartData = [
    {data: this.pastPerformance.map(p => p.avg_score), label: 'Average Score'}
  ];
  lineChartColors = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  subjectSelected = false;
  selectedSubject;

  showSubject(subj): void {
    this.selectedSubject = subj ? subj : null;
    this.subjectSelected = !this.subjectSelected;
  }

}
