export class ToolbarButton {
    text: string;
    callback: Function;
    orientation: Orientation;
}

export enum Orientation {
    Left,
    Middle,
    Right
}

export class ToolbarCollection {

    buttons: Array<ToolbarButton> = [];

    addButton(text: string, callback: Function, orientation = Orientation.Right) {
        let button = new ToolbarButton();
        button.text = text;
        button.callback = callback;
        button.orientation = orientation;

        this.buttons.push(button);
    }
}

export interface IToolbarComponent {
    addButtons(toolbar: ToolbarCollection): void;
}
