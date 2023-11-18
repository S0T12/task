import { IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  time?: string;

  @IsOptional()
  @IsString()
  completedAt?: string;

  @IsOptional()
  @IsString()
  canceledAt?: string;
}
