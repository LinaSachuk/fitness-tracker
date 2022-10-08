export class productsservice{
    private products = ['A book'];

    addProducts(productName:string){
        this.products.push(productName);
    }

    getProducts(){
        return [...this.products];
    }
}