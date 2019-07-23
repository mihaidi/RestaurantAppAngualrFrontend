import { Food } from './food';
export class Menu {

    id: Number;
    name: String;
    isArchived: Boolean;
    food: Food[];


    constructor(id: Number, name: String, isArchived: Boolean, food: Food[]) {
        this.id = id;
        this.name = name;
        this.isArchived = isArchived;
        this.food = food;
    }



}
