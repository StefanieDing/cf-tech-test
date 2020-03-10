import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Application {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    first_name: string;

    @Column({ type: 'varchar', length: 50 })
    last_name: string;

    @Column({ type: 'varchar', length: 100 })
    email_address: string;

    @Column({ type: 'varchar', length: 20 })
    phone_number: string;

    @Column({ type: 'varchar', length: 50 })
    company_name: string;

    @Column({ type: 'date' })
    effective_date: Date;

    @Column({ type: 'varchar', length: 20, default: 'PENDING' })
    status: string;

    @CreateDateColumn({ type: 'boolean', default: 'false' })
    primary_al: boolean;

	@CreateDateColumn({ type: 'boolean', default: 'false' })
    primary_gl: boolean;

    @CreateDateColumn({ type: 'boolean', default: 'false' })
    primary_el: boolean;

    @CreateDateColumn({ type: 'boolean', default: 'false' })
    is_deleted: boolean;   
}