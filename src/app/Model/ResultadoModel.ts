export class ResultadoModel {
    public codigo: number;
    public resultado: any;

    constructor(codigo?: number,
                resultado?: any) {
        this.codigo = codigo;
        this.resultado = resultado;
    }
}
