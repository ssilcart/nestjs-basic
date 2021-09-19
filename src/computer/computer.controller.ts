import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    const cpuCompute = this.cpuService.compute(5, 5);
    const diskData = this.diskService.getData();

    return [cpuCompute, diskData];
  }
}
