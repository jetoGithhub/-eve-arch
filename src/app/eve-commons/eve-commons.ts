import { EveLayoutContainer } from './layout/layout.container';
import { ModuleLocation, ContainerLayout } from './layout/layout.interface';

export { ModuleLocation, ContainerLayout } from './layout/layout.interface';
export { EveLayoutContainer } from './layout/layout.container';
export { EveLayout } from './layout/layout.decorator';

export class ModuleManager {
  static publish(modules: Array< any > = []): Array< any > {
    EveLayoutContainer.container.forEach((value) => {
      modules.push(value.scope);
    });
    console.log('imports', modules);
    return modules;
  }
}

export class LayoutController {
  getItems( moduleLocation: string ): Array< ModuleLocation > {
    const elements = [];
    EveLayoutContainer.container.forEach((value) => {
      if (value.data.location.toLocaleLowerCase().trim() === moduleLocation ) {
        elements.push(value.data);
      }
    });
    return elements;
  }
}
