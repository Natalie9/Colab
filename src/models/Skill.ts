import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import { Contact } from './Contact'

@Entity()
export class Skill {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column({
    nullable: false,
  })
  name: string

  @ManyToMany((type) => Contact, { cascade: true })
  @JoinTable({
    name: 'contact_skill',
    joinColumns: [{ name: 'skillid' }],
    inverseJoinColumns: [{ name: 'contactid' }],
  })
  contact: Contact[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}
