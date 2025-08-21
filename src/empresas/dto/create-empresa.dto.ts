import { ApiProperty } from "@nestjs/swagger";
import { TipoEmpresa } from "../enum/tipo_empresa.enum";

export class CreateEmpresaDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    sitioWeb: string;

    @ApiProperty({enum: TipoEmpresa})
    tipo: TipoEmpresa;
}
