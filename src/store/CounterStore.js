import { makeObservable, observable, computed, action } from "mobx"

export class CounterStore {
    counterValue = 0;

    constructor() {
        makeObservable(this, {
            counterValue: observable,
            increment: action,
            decrement: action,
        })
        
    }

    increment = () => {
        this.counterValue = this.counterValue + 1;
    }

    decrement = () =>{
        this.counterValue--;
    }
}

