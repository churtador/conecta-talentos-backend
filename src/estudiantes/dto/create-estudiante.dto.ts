import { ApiProperty } from "@nestjs/swagger";

export class CreateEstudianteDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    apellidos: string;

    @ApiProperty()
    edad: number;

    @ApiProperty()
    profesion: string;

    @ApiProperty()
    email: string;

    constructor(
        nombre: string,
        apellidos: string,
        edad: number,
        profesion: string,
        email: string
    ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.profesion = profesion;
        this.email = email;
    }
}
