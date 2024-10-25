import { IsInt, IsNumber, IsOptional, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateCastDto {
    @IsString()
    @MinLength(3)
    name: string;

    @IsNumber()
    @IsInt()
    @IsPositive()
    age: number;

    @IsString()
    @IsOptional() 
    breed?: string;
}
