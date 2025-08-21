import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';

@Module({
  controllers: [EmpresasController],
  providers: [EmpresasService],
  exports: [EmpresasModule],
})
export class EmpresasModule {}
