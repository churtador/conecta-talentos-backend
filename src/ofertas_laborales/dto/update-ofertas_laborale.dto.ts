import { PartialType } from '@nestjs/swagger';
import { CreateOfertasLaboraleDto } from './create-oferta_laboral.dto';

export class UpdateOfertasLaboraleDto extends PartialType(CreateOfertasLaboraleDto) {}
