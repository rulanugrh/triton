import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Todo } from "./todo.entity";

@Entity()
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: number
    
    @Column()
    name: string
    
    @Column()
    description: string

    @OneToMany(() => Todo, (todo) => todo.category)
    todo: Todo[]

    @Column()
    create_at: Date

    @Column()
    update_at: Date

}