import {Component, OnInit} from "@angular/core";
import {ErrorApiResponse} from "../../api/models/error-api-response";
import {Line} from "../../api/models/line";
import {AdminService} from "../../api/services";
import {Station} from "../../api/models/station";
import {Router} from "@angular/router";

@Component({
	selector: "app-adminlines",
	templateUrl: "./adminlines.component.html",
	styleUrls: ["./adminlines.component.css"]
})
export class AdminlinesComponent implements OnInit {

	constructor(private adminService: AdminService, private router: Router) {
	}

	lines: Line[] = [];

	lineTypes = ["Gradska", "Prigradska"];

	displayColumns = [
		{key: "id", name: "#", auto: true},
		{key: "name", name: "Ime", auto: true},
		{key: "color", name: "Boja", auto: false},
		{key: "lineType", name: "Tip linije", auto: false},
		{key: "actions", name: "Akcije", auto: false},
	];

	displayColumnsParsed = Array.from(this.displayColumns, (x) => x.key);

	ngOnInit() {
		this.refreshData();
	}

	refreshData() {
		this.adminService.getLines().subscribe(
			(lines: Line[]) => {
				this.lines = lines;
			},
			(error: ErrorApiResponse) => {
				alert("Error " + error.errorMessage);
			}
		);
	}

	add() {
		this.router.navigate(["/admin/lines/edit"]);
	}

	edit(line: Line) {
		this.router.navigate(["/admin/lines/edit", {id: line.id}]);
	}

	delete(line: Line) {
		this.adminService.deleteLine({id: line.id}).subscribe(
			() => {
				this.refreshData();
			},
			(error: ErrorApiResponse) => {
				alert("Error " + error.errorMessage);
			}
		);
	}

}
