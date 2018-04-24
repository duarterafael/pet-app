import {Model, Column, Table, CreatedAt, UpdatedAt, BelongsTo, ForeignKey, Default, DataType} from "sequelize-typescript";
import {Pet} from "./Pet";
import {OrderStatus} from "./OrderStatus";


@Table
export class Order extends Model<Order>{
    @Column
    quantity: number;

    @Column
    shipDate: Date;

    @Default(OrderStatus.PLACED.toString())
    @Column(DataType.ENUM('OrderStatus'))
    status: OrderStatus;

    @ForeignKey(() => Pet)
    @Column
    petId: number;

    @Column
    @BelongsTo (() => Pet)
    pet: Pet;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
    
}