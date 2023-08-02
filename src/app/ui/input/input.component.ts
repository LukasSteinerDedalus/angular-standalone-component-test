import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from 'src/app/logger.service';

type InputValue = string | number | undefined;
type InputType = 'text' | 'number' | 'email';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() inputId = Math.random().toString(16);
  @Input() label = '';
  @Input() value: InputValue;
  @Input() type: InputType = 'text';
  @Output() valueChange = new EventEmitter<InputValue>(undefined);

  constructor(private loggerService: LoggerService) {
    this.loggerService = loggerService;
  }

  onInput($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(target.value);
    this.loggerService.log('TEST: ' + target.value.toString());
  }
}
