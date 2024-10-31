import { IsNotEmpty, IsString, IsOptional, IsUrl, IsEnum } from 'class-validator';

export enum WorkStatus {
  HIDDEN = 'hidden',
  VISIBLE = 'visible',
}

export class CreateWorkDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsUrl()
  clientUrl: string;

  @IsOptional()
  @IsEnum(WorkStatus)
  status?: WorkStatus;

  @IsOptional()
  @IsString()
  imagePath?: string;
}
