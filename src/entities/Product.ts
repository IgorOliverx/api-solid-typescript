export type ProductProps = {
    id:string;
    name: string;
    price: number;
    quantity: number;
}

/**
 * Observe como o TypeScript é fantástico. Estamos criando uma entidade, onde seus atributos são também um tipo. Para alterar a entidade, eu mexo no tipo, e não na classe.
 */
export class Product {
    // O construtor abaixo inicializa todos os atributos, mas somente para leitura, somente getter são necessários
    private constructor(readonly props: ProductProps) {}

    //Note ainda, que está não é uma model anêmica, pois valida com regras de negócio

    /**
     * Método estático para criar um produto
     * @param name
     * @param price
     */
    public static create(name: string, price: number){
        return new Product({
            id: crypto.randomUUID().toString(),
            name,
            price,
            quantity: 0
        });
    }

    public static with(id: string, name:string, price:number, quantity: number) {
        return new Product({
           id,
           name,
           price,
           quantity,
        });;
    }

    /**
     * Método para aumentar o estoque
     * @param amount
     */
    public buy(amount: number){
        this.props.quantity += amount;
    }

    /**
     * Método para vender
     * @param amount
     */
    public sell(amount: number){
        if(this.props.quantity < amount){
            throw new Error("A quantidade de produtos é insuficiente")
        }
         this.props.quantity -= amount;
    }

    public get id(){
        return this.props.id;
    }
    public get name(){
        return this.props.name;
    }
    public get price(){
        return this.props.price;
    }
    public get quantity(){
        return this.props.quantity;
    }
}
