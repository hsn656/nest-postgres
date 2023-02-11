import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public first_name: string;

  @Column({ type: 'varchar', length: 120 })
  public middle_name: string;

  @Column({ type: 'varchar', length: 120 })
  public last_name: string;

  @Column({ type: 'varchar', length: 120 })
  public username: string;

  @Column({ type: 'varchar' })
  public password: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @Column({ type: 'date' })
  public dob: string;

  @Column({ type: 'varchar', length: 120 })
  public state: string;

  @Column({ type: 'varchar', length: 120 })
  public city: string;

  @Column({ type: 'varchar', length: 30 })
  public phone: string;

  @Column({ type: 'varchar', length: 20 })
  public gender: string;

  @Column({ type: 'varchar', length: 120 })
  public avatar_url: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
