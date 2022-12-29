import { Model, DataTypes } from 'sequelize';
import database from '../config/database';

class User extends Model {
    id!: string;
    name!: string;
    email!: string;
    status!: string;
    createdAt!: Date;
    updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        status: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize: database,
        tableName: 'users',
        modelName: 'User',
    }
);

export default User;
