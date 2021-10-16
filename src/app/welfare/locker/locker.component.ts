import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.scss']
})
export class LockerComponent implements OnInit {
  dtOptions: DataTables.Settings = {};


  closeResult = '';
  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.dtOptions = {
     /*  processing: true,
      serverSide: true, */
      ajax: {
        url: '/assets/locker.json',
        dataSrc: '',
      },
      columns: [
        {
          title: 'LOCK NO',
          data: 'lock_no'
        }, 
        {
          title: 'Sex',
          data: 'sex'
        }, 
        {
          title: 'EMP NO',
          data: 'emp_no'
        },
        {
          title: 'NAME',
          data: 'name'
        }, 
        {
          title: 'DEPT',
          data: 'dept'
        }, 
        {
          title: 'ENTR DATE',
          data: 'entr_date'
        },
        {
          title: 'RESIGN',
          data: 'resign'
        }, 
        {
          title: 'CATEGORY',
          data: 'category'
        }, 
        {
          title: 'RETURN_KEY',
          data: 'return_key'
        },
        {
          title: 'UPD DATE',
          data: 'upd_date'
        }, 
        {
          title: 'REMARK',
          data: 'remark'
        }, 
        /* {
          title: '',
          data: 'lock_no',
          render: function(data, type) {
            return '<i class="fas fa-ellipsis-v"></i>';
          }
        } */
      ]
    }
  }
  }
