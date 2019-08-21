import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";

@Component({
    selector: "Vorschau",
    moduleId: module.id,
    templateUrl: "./vorschau.component.html"
})
export class VorschauComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
