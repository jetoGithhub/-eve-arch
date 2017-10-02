export interface ModuleLocation {
  location: string;
  description: string;
  path: string;
}

export interface ContainerLayout {
  module: string;
  data: ModuleLocation;
  scope: Function;
}
