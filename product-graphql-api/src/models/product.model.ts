import headphones from "../data/headphones.json";
import type { IProduct } from "./iproduct.model";


function mapHeadphone(raw: any): IProduct {
  return {
    id: raw.id,
    name: raw.name,
    make: raw.make,
    model: raw.model,
    price: raw.price,
    colour: raw.colour,
    description: raw.description,
    seller: raw.seller,
    sellerSite: raw.seller_site,
    imageFile: raw.image_file,
    deliveryCost: raw.delivery_cost_estimate,
    deliveryTime: raw.delivery_time_estimate
  };
}


export const Headphone = {
  findAll: (): IProduct[] => headphones.map(mapHeadphone),
  findById: (id: number): IProduct | undefined =>
    headphones.map(mapHeadphone).find((h) => h.id === id)
};


