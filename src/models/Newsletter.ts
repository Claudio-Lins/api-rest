import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface NewsletterInstance extends Model {
  id: number;
  name: string;
  email: string;
}

export const Newsletter = sequelize.define<NewsletterInstance>(
  'Newsletter',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: 'newsletter',
    timestamps: true,
  }
);

// Newsletter.sync({ alter: true })
