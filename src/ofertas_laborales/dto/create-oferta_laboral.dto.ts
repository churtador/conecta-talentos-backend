import { ApiProperty } from "@nestjs/swagger";
import { TipoModalidad } from "../enum/tipo_modalidad.enum";
import { EstadoOferta } from "../enum/estado_oferta.enum";


export class CreateOfertaLaboralDto {

    @ApiProperty()
    descripcion: string;

    @ApiProperty()
    cargo: string;

    @ApiProperty()
    region: string;

    @ApiProperty( {enum: TipoModalidad})
    tipo: TipoModalidad;

    @ApiProperty( {enum: EstadoOferta} )
    estado: EstadoOferta;

    @ApiProperty()
    empresaId: number;
}
