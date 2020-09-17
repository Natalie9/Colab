import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm'
import { Skill } from './Skill'
import { Connection } from './Connection'

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column({
    nullable: false,
  })
  name: string

  @Column()
  description: string

  @Column()
  phone: string

  @Column({
    unique: true,
  })
  email: string

  @OneToMany((type) => Connection, (connection) => connection.contact, {
    cascade: true,
  })
  connections: Connection[]

  @ManyToMany((type) => Skill, { cascade: true })
  @JoinTable({
    name: 'contact_skill',
    joinColumns: [{ name: 'contactid' }],
    inverseJoinColumns: [{ name: 'skillid' }],
  })
  skills: Skill[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}
