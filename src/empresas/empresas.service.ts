import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  empresas: Empresa[] = [];

  constructor() { }

  create(createEmpresaDto: CreateEmpresaDto): Empresa {
    const empresaEncontrada = this.empresas.find(
      (empresa: Empresa) =>
        empresa.nombre === createEmpresaDto.nombre,
    );
    if(empresaEncontrada) {
      throw new BadGatewayException('El nombre de empresa ya está registrado.');
    }
    const empresaCreada = new Empresa(
      this.empresas.length + 1,
      createEmpresaDto.nombre,
      createEmpresaDto.sitioWeb,
      createEmpresaDto.tipo,
    );
    this.empresas.push(empresaCreada);
    return empresaCreada;

  }

  findOne(id: number): Empresa {
    const empresaEncontrada = this.empresas.find(
          (empresa: Empresa) =>
            empresa.id === id,
        );
        if(!empresaEncontrada){
          throw new NotFoundException('Empresa no encontrado');
        }
    
        return empresaEncontrada;
  }

  findAll(): Empresa[] {
    return this.empresas;
  }


  remove(id: number): void {
    const indiceBusqueda = this.empresas.findIndex(
          (empresa: Empresa) =>
            empresa.id === id,
        );
        if(indiceBusqueda < 0){
          throw new NotFoundException('La empresa que quieres eliminar no existe.');
        }
        this.empresas.splice(indiceBusqueda, 1);
  }
}
