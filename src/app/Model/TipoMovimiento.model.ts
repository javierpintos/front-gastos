export class TipoMovimiento {
    public id: number;
    public descripcion: string;

    constructor(id?: number, descripcion?: string) {
        this.id = id;
        this.descripcion = descripcion;
    }
}