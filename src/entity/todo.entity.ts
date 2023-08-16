import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Category } from "./category.entity";

@Entity()
export class Todo extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: number
    
    @Column()
    name: string
    
    @Column()
    description: string

    @Column()
    isDone: boolean

    @Column()
    categoryID: number

    @ManyToOne(() => Category, (category) => category.todo)
    category: Category

    @Column()
    create_at: Date

    @Column()
    update_at: Date

}