import { Module } from '@nestjs/common';
import { OfertasLaboralesService } from './ofertas_laborales.service';
import { OfertasLaboralesController } from './ofertas_laborales.controller';
import { EmpresasModule } from 'src/empresas/empresas.module';

@Module({
  controllers: [OfertasLaboralesController],
  providers: [OfertasLaboralesService],
  imports: [EmpresasModule]
})
export class OfertasLaboralesModule {}
