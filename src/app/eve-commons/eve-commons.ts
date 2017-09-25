export interface ModuleLocation{
    location:string;
    description:string;
    path:string
}

export interface ContainerLayout{
    module:string,
    data:ModuleLocation
}

export class EveLayoutContainer{
    static container:Map<string,ContainerLayout> = new Map();
    static add(name:string,data:ModuleLocation){
        if(!this.container.get(name)){
            this.container.set(name, {
                module:name,
                data: data
            });
        }
    }

}
abstract class BaseEveMennu{
    protected elementId:string;
    getItems():Array<ModuleLocation>{
        let elements = [];
        EveLayoutContainer.container.forEach((value, key)=>{
            if(value.data.location.toLocaleLowerCase().trim() === this.elementId){
                elements.push(value.data);
            }
        });
        return elements;
    }
}
export class EveSidebar extends BaseEveMennu{
    elementId = 'sidebar';

}

export class EveNavbar extends BaseEveMennu{
   elementId = 'navbar';
}

export function EveLayout(data:ModuleLocation){
    return function (target: Function) {
        target.prototype.description = data.description;
        target.prototype.location = data.location;
        target.prototype.path = data.path;

        EveLayoutContainer.add(target.name, data);
    }
}

class EveRouter<T>{
    constructor(){

    }
}
