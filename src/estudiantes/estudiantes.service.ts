import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudiantesService {
  estudiantes: Estudiante[] = [];

  constructor() {
    
  }


  create(createEstudianteDto: CreateEstudianteDto): Estudiante {
    const estudianteEncontrado = this.estudiantes.find(
      (estudiante: Estudiante) =>
        estudiante.email === createEstudianteDto.email,
    );
    if (estudianteEncontrado) {
      throw new BadRequestException('El correo del estudiante ya está registrado')
    }
    const estudianteCreado = new Estudiante(
      this.estudiantes.length +1,
      createEstudianteDto.nombre,
      createEstudianteDto.apellidos,
      createEstudianteDto.edad,
      createEstudianteDto.profesion,
      createEstudianteDto.email,
    );
    this.estudiantes.push(estudianteCreado);
    return estudianteCreado;
  }

  findOne(id: number): Estudiante {
    const estudianteEncontrado = this.estudiantes.find(
      (estudiante: Estudiante) =>
        estudiante.id === id,
    );
    if(!estudianteEncontrado){
      throw new NotFoundException('estudiante no encontrado');
    }

    return estudianteEncontrado;
  }

  findAll() {
    return this.estudiantes;
  }


  update(id: number, updateEstudianteDto: UpdateEstudianteDto): Estudiante {
    const estudianteParaActualizar: Estudiante | undefined = this.estudiantes.find(e => e.id === id);
    if(!estudianteParaActualizar){
      throw new NotFoundException("El estudiante que quieres actualizar no existe");
    }

    if(updateEstudianteDto.nombre) {
      estudianteParaActualizar.nombre = updateEstudianteDto.nombre;
    }
    if(updateEstudianteDto.apellidos) {
      estudianteParaActualizar.apellidos = updateEstudianteDto.apellidos;
    }
    if(updateEstudianteDto.edad) {
      estudianteParaActualizar.edad = updateEstudianteDto.edad;
    }
    if(updateEstudianteDto.profesion) {
      estudianteParaActualizar.profesion = updateEstudianteDto.profesion;
    }

    return estudianteParaActualizar;
  }

  remove(id: number): void {
    const indiceBusqueda = this.estudiantes.findIndex(
      (estudiante: Estudiante) =>
        estudiante.id === id,
    );
    if(indiceBusqueda < 0){
      throw new NotFoundException('El estudiante que quieres eliminar no existe');
    }
    this.estudiantes.splice(indiceBusqueda, 1);
  }
}
