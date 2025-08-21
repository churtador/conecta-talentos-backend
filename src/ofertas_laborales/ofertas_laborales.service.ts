import { Injectable } from '@nestjs/common';
import { CreateOfertaLaboralDto } from './dto/create-oferta_laboral.dto';
import { UpdateOfertasLaboraleDto } from './dto/update-ofertas_laborale.dto';
import { OfertaLaboral } from './entities/oferta_laboral.entity';
import { EmpresasService } from 'src/empresas/empresas.service';

@Injectable()
export class OfertasLaboralesService {
  ofertas: OfertaLaboral[] = [];

  constructor(private readonly empresasService: EmpresasService) {}

  create(createOfertasLaboraleDto: CreateOfertaLaboralDto): OfertaLaboral {
    const empresa = this.empresasService.findOne(createOfertasLaboraleDto.empresaId);

    const fechaActual = new Date();
    const ofertaCreada = new OfertaLaboral(
      this.ofertas.length + 1,
      fechaActual,
      createOfertasLaboraleDto.descripcion,
      createOfertasLaboraleDto.cargo,
      createOfertasLaboraleDto.region,
      createOfertasLaboraleDto.tipo,
      createOfertasLaboraleDto.estado,
      empresa
    );
    this.ofertas.push(ofertaCreada);
    return ofertaCreada;
  }

  findAll() {
    return `This action returns all ofertasLaborales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ofertasLaborale`;
  }

  update(id: number, updateOfertasLaboraleDto: UpdateOfertasLaboraleDto) {
    return `This action updates a #${id} ofertasLaborale`;
  }

  remove(id: number) {
    return `This action removes a #${id} ofertasLaborale`;
  }
}
