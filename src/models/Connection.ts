import {
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm'
import { Contact } from './Contact'

@Entity()
export class Connection {
  @PrimaryGeneratedColumn('increment')
  id: string

  @ManyToOne((type) => Contact, (contact) => contact.connections)
  @JoinColumn({ name: 'contactid' })
  contact: Contact

  @Column()
  contactid: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}
