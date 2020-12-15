export default interface IManageState {
    category: MajorCategory;
    selectedFood: SelectedFood;
    quantity: QuantityState[];
}

export interface QuantityState {
    item: string;
    quanityt: number;
}

export interface SelectedFood {
    selectedFood: string;
}

export interface MajorCategory {
    food: string;
    utencils: string;
    toys: string;
}
export function defaultCategory(): MajorCategory {
    return {
        food: '',
        utencils: '',
        toys: ''
    }
}

export function defaultQuantity(selectedFood: string, majorCategory: MajorCategory) {
    let list = [selectedFood];
    for (let a in majorCategory) {
        if (a !== 'food') {
            list.push((majorCategory as any)[a]);
        }
    }
    let defObject: any = {};
    for (let i = 0; i < list.length; i++) {
        defObject[list[i]] = 0;
    }
    return defObject;

}