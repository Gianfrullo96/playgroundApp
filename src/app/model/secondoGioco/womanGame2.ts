export class WomanGame2 {
  private _name: string;
  private _profPic: string;
  private _value: number;
  private _action: string;

  constructor(name: string, profPic: string, value: number, action: string) {
    this._name = name;
    this._profPic = profPic;
    this._value = value;
    this._action = action;
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

  // Getter per profPic
  get profPic(): string {
    return this._profPic;
  }

  // Setter per profPic
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

  // Getter per action
  get action(): string {
    return this._action;
  }

  // Setter per action
  set action(newAction: string) {
    if (!newAction || newAction.trim() === '') {
      throw new Error('Action cannot be empty');
    }
    this._action = newAction;
  }

  // Metodo di utilità per debug/log
  public toString(): string {
    return `WomanGame2: { name: ${this._name}, value: ${this._value}, action: ${this._action} }`;
  }
}
