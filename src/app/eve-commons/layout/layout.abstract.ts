import { EveLayoutContainer } from './layout.container';
import { ModuleLocation } from './layout.interface';

export abstract class EveMenu {
  protected elementId: string;
  getItems(): Array<ModuleLocation> {
    var elements = [];
    EveLayoutContainer.container.forEach((value) => {
      if (value.data.location.toLocaleLowerCase().trim() === this.elementId) {
        elements.push(value.data);
      }
    });
    return elements;
  }
}
