import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css'],
})
export class SiderbarComponent {
  @Output() output = new EventEmitter<string>();
  stringa_: string = 'Sono la stringa figlio';

  clickAndSend() {
    this.output.emit(this.stringa_);
  }
}
