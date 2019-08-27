import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import {MyErrorStateMatcher} from "../mailErrorCathcer";
import {ApiService} from "../api/api.service";

@Component({
  	selector: "app-registration",
  	templateUrl: "./register.component.html",
  	styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {

	constructor(private fb: FormBuilder, private apiService: ApiService) {
	}

	passengerTypes = ["Regularani", "Student", "Penzioner"];

	matcherEmail = new MyErrorStateMatcher();

	registrationForm = this.fb.group({
		firstName: ["", [Validators.required]],
		lastName: ["", [Validators.required]],
		email: ["", [Validators.required, Validators.email]],
		password: ["", [Validators.required, Validators.minLength(6)]],
		confirmPassword: ["", [Validators.required, Validators.minLength(6)]],
		dayOfBirth: ["", [Validators.required]],
		address: ["", [Validators.required]],
		passengerType: [0, [Validators.required]],
		additionalInfo: [""]
	});

  	ngOnInit() {
  	}

	onSubmit() {
		this.apiService.registerUser(this.registrationForm.value, {
			success: (data) => {
				// TODO: do something with server response
			},
			error: (code, message) => {
				alert("Error " + message);
			}
		});
	}
}