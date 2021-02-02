import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() link: string;
  @Output('delete') deleteEvent: EventEmitter<void>=new EventEmitter<void>();

  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;
  constructor(private renderer: Renderer2){}

  ngOnInit() {
    //work out if there is a text overflow and if not,then hide this truncator
    
  }
    
  onXButtonClick()
  {
      this.deleteEvent.emit();
  }
    


  }

