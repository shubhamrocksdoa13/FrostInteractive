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
	timeSlotAmounts = [];
	StudioDropdownConfig = {
		placeholder: 'Select Studio Name'
	};
	SelectStartTimeConfig = {
		placeholder: 'Select Start Time'
	}
	SelectEndTimeConfig = {
		placeholder: 'Select End Time'
	}
	searchData = {
		"studioName":this.studios,
		"localDate":''
	};
	showTime = false;
	createData = {
		"date":'',
		"studioName":'',
		"studioScheduleSlotList":
		[{
			"startTime":'',
			"endTime":'',
			"faculty":"vdsghGFVS",
			"assignerName":"GDVBS"
		}]
	};
// 	testData= {
// "date":"2019-01-28",
// "studioName":"Studio-1",
// "studioScheduleSlotList":[
// {
// "startTime":"00:00:00",
// "endTime":"00:00:00",
// "faculty":"vdsghGFVS",
// "assignerName":"GDVBS"
// }
// ]
// };
	updateData = [];
	studioBooked = {
		startTime: '',
		endTime: ''
	};
	studioName: string;
	studioList = ['Studio-1','Studio-2','Studio-3','Studio-4','Studio-5','Studio-6'];
	startTime = ['01:00:00', '02:00:00', '03:00:00', '04:00:00', '05:00:00', '06:00:00', '07:00:00'];
	endTime = ['02:00:00', '03:00:00', '04:00:00', '05:00:00', '06:00:00', '07:00:00', '08:00:00'];

	constructor(
		private studioService: StudioService
		) { }

	ngOnInit() {
		console.log(this.createData);
		
	}
	selectStudioName(event) {
		this.studioName = event.value;
	}
	selectStartTime(event, i) {
		this.createData.studioScheduleSlotList.push({
			"startTime":'',
			"endTime":'',
			"faculty":"vdsghGFVS",
			"assignerName":"GDVBS"
		});
		this.createData.studioScheduleSlotList[i].startTime = event.value;

	}           
	selectEndTime(event, i) {
		this.createData.studioScheduleSlotList[i].endTime = event.value;
	} 
	showTimeSlots(){
		this.showTime = true;
	}
	selectAmountTimeSlots(){

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
	addTImeSlot(){
		this.timeSlotAmounts.push(1);
		console.log(this.timeSlotAmounts);
		
	}
	timeSlotsBooked(){
		this.showTime = true;
	}
	createScheduleShow(){
		event.preventDefault();
		this.makeScheduleModal.show();
	}
	createSubmit(){ 
		this.createData.studioName = this.studioName;
		console.log(this.createData);
		// console.log(this.testData);
		// let s =JSON.parse(JSON.stringify(this.testData)); 
		// console.log(s);
		
		this.studioService.createSschedule(this.createData).subscribe(res => {
			console.log(res);
		});
	}
	updateSubmit(){
		this.createData.studioName = this.studioName;
		// this.updateData.studioName = this.studioName;
		console.log(this.createData);
		this.studioService.updateSschedule(this.createData).subscribe(res => {
			console.log(res);
			if(res) {
				
			}
		});
	}

}
