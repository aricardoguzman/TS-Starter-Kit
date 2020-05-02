import { PageView } from './page-view';
import '../custom-components/cards/card-component';
import '../container/ripple-container';
import '../custom-components/input/custom-input';
import '../custom-components/cards/carousel-component';
import '../custom-components/clock/custom-counter';
interface Car {
    arranca: number;
    camina: number;
    colision: number;
    color: string;
    estado: number;
    falla_mecanica: number;
    garantia_inspeccion: number;
    id: number;
    inundado: number;
    linea: string;
    marca: string;
    minimo_requerido: number;
    modelo: string;
    numero_chasis: string;
    numero_motor: string;
    observacion: string;
    placa: string;
    precio_base: number;
    tipo: string;
}
export declare class HomeView extends PageView {
    data: Array<Car>;
    fotos: any;
    photobank: Array<any>;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-html").TemplateResult;
    private _saveVehicle;
    attributeChangedCallback(name: string, old: string | null, value: string | null): Promise<void>;
    private parseFotos;
    getToken(): Promise<unknown>;
}
export {};
//# sourceMappingURL=home-view.d.ts.map