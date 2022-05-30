export interface IEntityService {
    getAll(entity: any): Promise<any[]>;
    getById(id: string): Promise<any>;
    create(entity: any): Promise<any>;
    update(entity: any): Promise<any>;
    delete(id: string): Promise<any>;
}
