import {Model, Column, Table, CreatedAt, UpdatedAt, BelongsTo, ForeignKey, Default} from "sequelize-typescript";
import {Pet} from "./Pet";
import {OrderStatus} from "../util/enum/OrderStatus";

@Table({tableName: 'Orders'})
export class Order extends Model<Order>
{
    @Column
    quantity: number;

    @Column
    shipDate: Date;

    @Default(OrderStatus[OrderStatus.Placed])
    @Column
    status: OrderStatus;

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