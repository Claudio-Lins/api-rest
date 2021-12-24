import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface VoluntariadoInstance extends Model {
  id: number;
  name: string;
  email: string;
  telemovel: string;
  files: [Object]
}

export const Voluntariado = sequelize.define<VoluntariadoInstance>(
  'Voluntariado',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    telemovel: {
      type: DataTypes.STRING,
    },
    fileUrl: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: 'voluntariados',
    timestamps: true,
  }
);

// Voluntariado.sync({ alter: true })