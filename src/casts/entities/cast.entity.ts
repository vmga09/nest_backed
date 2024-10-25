import { Delete } from "@nestjs/common";
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Cast {
    //@PrimaryGeneratedColumn()
    @Column({ primary: true, type: "int",generated: true })
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column({default: null})
    breed: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
