import { ApiProperty } from "@nestjs/swagger";
import { TipoEmpresa } from "../enum/tipo_empresa.enum";

export class Empresa {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nombre: string;

    @ApiProperty()
    sitioWeb: string;

    @ApiProperty()
    tipo: TipoEmpresa;

    constructor(
        id: number,
        nombre: string,
        sitioWeb: string,
        tipo: TipoEmpresa
    ) {
        this.id = id;
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.tipo = tipo;
    }
}
