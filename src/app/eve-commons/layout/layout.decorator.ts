import { ModuleLocation } from './layout.interface';
import { EveLayoutContainer } from './layout.container';

export function EveLayout(data: ModuleLocation) {
  return function (target: Function) {
    target.prototype.description = data.description;
    target.prototype.location = data.location;
    target.prototype.path = data.path;

    EveLayoutContainer.add(target.name, data, target);
  };
}
