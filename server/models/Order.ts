import {Model, Column, Table, CreatedAt, UpdatedAt, BelongsTo, ForeignKey} from "sequelize-typescript";
import {Pet} from "./Pet";
//import {OrderStatus} from "./OrderStatus";

@Table({tableName: 'Orders'})
export class Order extends Model<Order>
{
    @Column
    quantity: number;

    @Column
    shipDate: Date;

    @Column
    status: number; //OrderStatus;

    @ForeignKey(() => Pet)
    @Column({field: 'petId'})
    petId: number;

    @BelongsTo (() => Pet)
    pet: Pet;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}