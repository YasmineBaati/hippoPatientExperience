import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/components/shared-service/shared-service.component';
import { Consultation } from 'src/app/consultation/consultation';
import { ConsultationService } from 'src/app/consultation/consultation.service';
import { SessionService } from 'src/app/session/session.service';
import { TimeConversionService } from 'src/app/time-conversion/time-conversion-service.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
  startTime!: Date | null;
  endTime: any;
  selectedOption: string = 'no'; // Default to 'no'
  concerns! : string;
  diseases! : string;
  previous! : string;
  doctorId! : any;
  patientId!: any;
  consultationData: { [key: string]: any } = {};



  constructor(private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private consultationService: ConsultationService,
    private timeConversionService: TimeConversionService,
    private sessionService: SessionService

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.doctorId = +params['id'];
      if (this.doctorId) {
        console.log("doctorId:", this.doctorId)
      }
    });
    this.patientId = this.sessionService.getPatientId();
    console.log("patientId:",this.patientId)
    this.startTime = this.timeConversionService.fromStringToDate(this.sharedService.getSelectedTime());
    console.log(this.startTime)
    if (this.startTime) {
      // Valid date
      console.log("StartTime:", this.startTime);
    } else {
      // Invalid date format
      console.error("Invalid StartTime format");
    }
    this.endTime = this.timeConversionService.fromStringToDate(this.sharedService.getSelectedTimeWith15MinutesAdded())
    if (this.endTime) {
      // Valid date
      console.log("endTime:", this.endTime);
    } else {
      // Invalid date format
      console.error("Invalid endTime format");
    }
  }

  // Move the route parameter retrieval and logging to a separate method
  questionResponses: { [key: string]: string } = {};


  // Current index of the question being displayed
  currentQuestionIndex: number = 0;

  // Sample questions for the demo
  questions: any[] = [
    {
      id: 1,
      text: 'Do you have any concerns?',
      answer: null
    },


    {
      id: 2,
      text: 'Are you currently on any medication?',
      answer: null
    },
    {
      id: 3,
      text: 'Do you have any diseases?',
      answer: null
    }
    // ... you can add more questions as needed
  ];

  // Go to the next question

  onRadioChange(option: string) {
    this.selectedOption = option;
    if (this.selectedOption === 'no') {
      // Clear the textarea response when "No" is selected
      this.clearResponse();
    }
  }

  onNext(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  // Go to the previous question
  onPrev(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }
  // Function to store the textarea response in the variable
  onTextareaChange(questionId: number, response: string) {
    const key = 'question' + questionId;
    this.questionResponses[key] = response;
  }

  // Function to clear the textarea response
  clearResponse() {
    const key = 'question' + this.questions[this.currentQuestionIndex].id;
    this.questionResponses[key] = 'nothing'; // Set it to "nothing"
  }
  
  // Function to submit the questionnaire (to be implemented)
  onSubmit() {
    console.log('Questionnaire responses:', this.questionResponses);
    this.concerns = this.questionResponses["question1"];
    this.previous = this.questionResponses["question2"];
    this.diseases = this.questionResponses["question3"];

    this.consultationData['concerns'] = this.concerns;
    this.consultationData['diseases'] = this.diseases;
    this.consultationData['previous'] = this.previous;
    this.consultationData['startTime'] = this.startTime;
    this.consultationData['endTime'] = this.endTime;
    this.consultationData['status'] = "pending";


    console.log("waaaa",this.consultationData)
    this.consultationService.createConsultation(this.consultationData,this.doctorId,this.patientId).subscribe(
      (response: Consultation) => {
        console.log("created cons",response);
        this.router.navigate(['/patients/payment']);
      },
      (error : HttpErrorResponse) => {
        console.log("error",error)
      }
    )
   // You can send this data to create a consultation here
    // this.consultationService.createConsultation(this.questionResponses);
  }


}
