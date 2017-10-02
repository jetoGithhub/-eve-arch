import { ContainerLayout, ModuleLocation } from './layout.interface';

export class EveLayoutContainer {
  static container: Map< string, ContainerLayout > = new Map();
  static add(name:string, data: ModuleLocation, target: Function) {
    if (!this.container.get(name)) {
      this.container.set(name, {
        module: name,
        data: data,
        scope: target
      });
    }
  }
}
