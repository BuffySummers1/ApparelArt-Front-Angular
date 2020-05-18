import { Tag } from './Tag';
import { Composition } from './Composition';
import { Size } from './Size';


export class Product {
    id: string;
    name: string;
    description: string;
    picture: string;
    price: number;
    stock: number;
    like: number;
    CategoryId: number;
    ColorId: number;
    GenderId: number;
    ShapeId: number;
    Compositions: Composition[];
    Sizes: Size[];
    Tags: Tag[];
    createdAt: Date;
    updatedAt: Date;
    constructor(name: string, description: string, picture: string = '', price: number, stock: number, like: number, CategoryId: number, ColorId: number, GenderId: number, ShapeId: number) {
        this.name = name;
        this.description = description;
        this.picture = picture;
        this.price = price;
        this.stock = stock;
        this.like = like;
        this.CategoryId = CategoryId;
        this.ColorId = ColorId;
        this.GenderId = GenderId;
        this.ShapeId = ShapeId;
    }
}
