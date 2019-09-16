export class Moneda {
    public id: number;
    public descripcion: string;
    public cotizacion: number;

    constructor(id?: number, descripcion?: string, cotizacion?: number) {
        this.id = id;
        this.descripcion = descripcion;
        this.cotizacion = cotizacion;
    }
}
