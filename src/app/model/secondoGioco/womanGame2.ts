export class WomanGame2 {
    private _name: string;
        private _profPic: string;
    private _value: number;


    constructor(name: string, profPic: string, value: number,) {
        this._name = name;
        this._value = value;
        this._profPic = profPic
    }

    // Getter per name
    get name(): string {
        return this._name;
    }

    // Setter per name
    set name(newName: string) {
        if (!newName || newName.trim() === '') {
            throw new Error('Name cannot be empty');
        }
        this._name = newName;
    }

    get profPic(): string {
        return this._profPic;
    }

    set profPic(newProfPic: string) {
        if (!newProfPic || newProfPic.trim() === '') {
            throw new Error('Profile picture URL cannot be empty');
        }
        this._profPic = newProfPic;
    }

    // Getter per value
    get value(): number {
        return this._value;
    }

    // Setter per value
   set value(newValue: number) {
  if (newValue === null || newValue === undefined || isNaN(newValue)) {
    throw new Error('Value must be a valid number');
  }
  this._value = newValue;
}


    // Metodo di utilità per debug/log
    public toString(): string {
        return `WomanGame2: { name: ${this._name}, value: ${this._value} }`;
    }
}
