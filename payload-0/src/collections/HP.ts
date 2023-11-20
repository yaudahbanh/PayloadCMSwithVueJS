import { CollectionConfig } from 'payload/types'

const HP: CollectionConfig = {
  slug: 'hp',
  auth: {
    disableLocalStrategy: true
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true
  },
  admin: {
    useAsTitle: 'handphone',
  },
  fields: [
    {
        name : "handphone",
        type : "text",
        label : "Nama Handphone",
        required: true
    },
    {
        name : "brand",
        type : "text",
        label : "Brand",
        required: true
    },
    {
        name : "price",
        type : "text",
        label : "Harga",
        required: true
    }
  ],
}

export default HP
