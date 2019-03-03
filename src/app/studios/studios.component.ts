import { Component, OnInit, ViewChild } from '@angular/core';
import { StudioService } from './studios.service';
import { SelectDropDownComponent } from 'ngx-select-dropdown';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
	selector: 'app-studios',
	templateUrl: './studios.component.html',
	styleUrls: ['./studios.component.css']
})
export class StudiosComponent implements OnInit {
	@ViewChild('studioSearchModal') public studioSearchModal: ModalDirective;
	@ViewChild('makeScheduleModal') public makeScheduleModal: ModalDirective;
	@ViewChild('updateScheduleModal') public updateScheduleModal: ModalDirective;

	studios = [{
		name:'Sample One'
	},{
		name:'Sample Two'
	},{
		name:'Sample Three'
	},{
		name:'Sample Four'
	},{
		name:'Sample Five'
	},{
		name:'Sample Six'
	}];
	StudioDropdownConfig = {
		placeholder: 'Select Studio Name'
	};
	searchData = {
		"studioName":this.studios,
		"localDate":''
	};
	createData = [{
		"date":'',
		"studioName":'',
		"studioScheduleSlotList":
		[{
			"startTime":'',
			"endTime":'',
			"faculty":"vdsghGFVS",
			"assignerName":"GDVBS"
		}]
	}];
	updateData = [];
	studioBooked = {
		startTime: '',
		endTime: ''
	}
	studioName: string;
	studioList = ['Studio-1','Studio-2','Studio-3','Studio-4','Studio-5','Studio-6']

	constructor(
		private studioService: StudioService
		) { }

	ngOnInit() {
		console.log(this.createData);
		
	}
	selectStudioName(event) {
              this.studioName = event.value;
            }            
	searchModalShow(event: Event) {
		event.preventDefault();
		this.studioSearchModal.show();
	}
	updateScheduleShow(event: Event){
		event.preventDefault();
		this.updateScheduleModal.show();
	}
	searchSubmit(){
		console.log(this.searchData.localDate);	
		this.studioService.studioSearch(this.searchData).subscribe(res => {
			console.log(res);
			if(res) {
				console.log("This function is called");
			}
		});
	}
	createScheduleShow(){
		event.preventDefault();
		this.makeScheduleModal.show();
	}
	createSubmit(){ 
		this.createData[0].studioName = this.studioName;
		console.log(this.createData);
		this.studioService.createSschedule(this.createData).subscribe(res => {
			console.log(res);
			if(res) {
				
			}
		});
	}
	updateSubmit(){
		this.updateData = this.createData;
		this.updateData[0].studioName = this.studioName;
		console.log(this.createData);
		this.studioService.updateSschedule(this.createData).subscribe(res => {
			console.log(res);
			if(res) {
				
			}
		});
	}

}
