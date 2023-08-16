import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: number
    
    @Column()
    name: string
    
    @Column()
    email: string

    @Column()
    password: string

    @Column()
    avatar?: string

    @Column()
    address?: string

    @Column()
    gender: string
    
    @Column()
    create_at: Date

    @Column()
    update_at: Date

}