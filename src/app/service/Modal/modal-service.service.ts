import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  private modalState = new BehaviorSubject<boolean>(false);
  modalState$ = this.modalState.asObservable();

  setModalState(state: boolean) {
    this.modalState.next(state);
  }
}
