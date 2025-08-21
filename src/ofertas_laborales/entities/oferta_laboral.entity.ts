import { ApiProperty, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { TipoModalidad } from "../enum/tipo_modalidad.enum";
import { EstadoOferta } from "../enum/estado_oferta.enum";
import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Empresa } from "src/empresas/entities/empresa.entity";

export class OfertaLaboral {
    @ApiProperty()
    id: number;

    @ApiProperty()
    fechaCreacion: Date;

    @ApiProperty()
    descripcion: string;

    @ApiProperty()
    cargo: string;

    @ApiProperty()
    region: string;

    @ApiProperty()
    tipo: TipoModalidad;

    @ApiProperty()
    estado: EstadoOferta;

    @ApiProperty()
    empresa: Empresa;

    @ApiProperty()
    postulaciones: Estudiante[];

    constructor(
        id: number,
        fechaCreacion: Date,
        descripcion: string,
        cargo: string,
        region: string,
        tipo: TipoModalidad,
        estado: EstadoOferta,
        empresa: Empresa,
    ) {
        this.id = id;
        this.fechaCreacion = fechaCreacion;
        this.descripcion = descripcion;
        this.cargo = cargo;
        this.region = region;
        this.tipo = tipo;
        this.estado = estado;
        this.empresa = empresa;
        this.postulaciones = [];
    }
}
