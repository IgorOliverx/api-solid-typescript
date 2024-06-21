import {Product} from "../../entities/Product";

/**
 * Nosso repositório é um contrato. Contrato são interface que conectam outras partes da aplicação com as implementações concretas sem que a classe necessitante precise conhecer o repositorio
 */
export interface ProductRepository{
    save(product: Product): Promise<void>;
    list(): Promise<Product[]>;
    update(product: Product): Promise<void>;
    find(id: string): Promise<Product | null>;
}