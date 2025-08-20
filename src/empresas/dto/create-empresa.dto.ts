import { ApiProperty } from "@nestjs/swagger";
import { TipoEmpresa } from "../enum/tipo_empresa.enum";

export class CreateEmpresaDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nombre: string;

    @ApiProperty()
    sitioWeb: string;

    @ApiProperty()
    tipo: TipoEmpresa;
}
