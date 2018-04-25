import {Model, Column, Table, CreatedAt, UpdatedAt, BelongsTo, ForeignKey} from "sequelize-typescript";
import {Pet} from "./Pet";
//import {OrderStatus} from "./OrderStatus";


@Table
export class Order extends Model<Order>
{
    @Column
    quantity: number;

    @Column
    shipDate: Date;

    //@Default(OrderStatus.PLACED.toString())
    @Column//(DataType.ENUM('OrderStatus'))
    status: number;

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
    
    static scope(...args: any[]): typeof Order {
        args[0] = args[0] || 'defaultScope';
        return super.scope.call(this, ...args);
    }

}