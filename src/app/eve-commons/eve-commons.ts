import { EveLayoutContainer } from './layout/layout.container';

export { ModuleLocation, ContainerLayout } from './layout/layout.interface';
export { EveLayoutContainer } from './layout/layout.container';
export { EveLayout } from './layout/layout.decorator';
export { EveNavbar } from './layout/layout.navbar';
export { EveSidebar } from './layout/layout.sidebar';

export class ModuleManager {
  static publish(modules: Array< any > = []): Array< any > {
    EveLayoutContainer.container.forEach((value) => {
      modules.push(value.scope);
    });
    console.log('imports', modules);
    return modules;
  }
}
