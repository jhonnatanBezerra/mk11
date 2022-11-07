import { Model, Column, Table, BelongsToMany, Scopes, PrimaryKey, AutoIncrement, UpdatedAt, CreatedAt } from 'sequelize-typescript';

@Table
class Character extends Model<Character>{

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  tier: string; // diamante ouro prata bronze

  @Column
  class: string;

  @Column
  passive: string;

  @Column
  first_special: string;

  @Column
  second_special: string;

  @Column
  third_special: string;

  @Column
  image_url: string;


  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

}

export default Character;