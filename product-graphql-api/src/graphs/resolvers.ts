
import { Headphone } from "../models/product.model";

export const resolvers = {
  Query: {
    hello: () => { return "Hello World" },

    getAllProducts: () => {
      return Headphone.findAll()
    },

    getAllHeadphones: () => Headphone,

    getAllHeadphoneById: (_: unknown, args: { id: number }) =>
      Headphone.findById(args.id),


    getAllHeadphoneByMake: (_: unknown, args: { make?: string }) => {
      let all = Headphone.findAll();

      if (args.make && args.make.trim() !== "") {
        all = all.filter(h => h.make.toLowerCase().includes(args.make!.toLowerCase()));
      }
      return all;
    },

    /* // getAllHeadphoneByDesc ( filter: [String!], match: String): [Headphone!]!
       
        getAllHeadphoneByDesc: (_: unknown, args: { make?: string }) => {
          let all = Headphone.findAll();
    
          if (args.make && args.make.trim() !== "") {
            all = all.filter(h => h.make.toLowerCase().includes(args.make!.toLowerCase()));
          }
          return all;
        },
     */

    getAllHeadphoneByDesc: (_: unknown, args: { filter: string[]; match: string; }) => {
      const { filter, match } = args;
      let allHeadphone = Headphone.findAll();

      if (!filter || filter.length === 0) {
        return allHeadphone; // return all if no filter
      }
      const filters = filter.map(f => f.toLowerCase());

      return allHeadphone.filter(hp => {
        const desc = hp.description.toLowerCase();

        if (match === "OR") {
          // at least one keyword matches
          return filters.some(f => desc.includes(f.toLowerCase()));
        } else {
          // default: ALL keywords must match
          return filters.every(f => desc.includes(f.toLowerCase()));
        }
      });
    },


    getHeadphonesFullFilter: (
      _: unknown,
      args: {
        make?: string;
        model?: string;
        price?: number;
        colour?: string;
        descfeature: string[]; match: string;
      }) => {
      const { make, model, price, colour, descfeature, match } = args;
      let allHeadphone = Headphone.findAll();

      if (descfeature && descfeature.length !== 0) {
        const descs = descfeature.map(f => f.toLowerCase());

        allHeadphone = allHeadphone.filter(hp => {
          const desc = hp.description.toLowerCase();

          if (match === "OR") {
            // at least one keyword matches
            return descs.some(f => desc.includes(f.toLowerCase()));
          } else {
            // default: ALL keywords must match
            return descs.every(f => desc.includes(f.toLowerCase()));
          }
        }
      )}


      if (model && model.trim() !== "") {
        allHeadphone = allHeadphone.filter(h => h.model.toLowerCase().includes(model!.toLowerCase()));
      }

      if (price !== undefined) {
        allHeadphone = allHeadphone.filter(h => h.price <= price!);
      }

      if (colour && colour.trim() !== "") {
        allHeadphone = allHeadphone.filter(h => h.colour.toLowerCase() === colour!.toLowerCase());
      }


      return allHeadphone;
    },

  }
};

