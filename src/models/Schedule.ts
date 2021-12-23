import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface ScheduleInstance extends Model {
  id: number;
  timeStart: number;
  columnDay: number;
  title: string;
  subtitle: string;
  duration: number;
}

export const Schedule = sequelize.define<ScheduleInstance>(
  'Schedule',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    timeStart: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    columnDay: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  },
  {
    tableName: 'schedule',
    timestamps: true,
  }
);

// Schedule.sync({ alter: true })
