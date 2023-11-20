<template>
  <div class="max-w-md mx-auto py-5">
    <form @submit="createData" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Nama Handphone
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter handphone name"
          v-model="handphone"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Brand </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="brand"
          type="text"
          placeholder="Enter handphone brand"
          v-model="brand"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Harga Handphone
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="harga"
          type="text"
          placeholder="Enter harga price"
          v-model="price"
        />
      </div>

      <button
        type="submit"
        class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Data
      </button>
    </form>
  </div>

  <div class="flex justify-center py-1">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4 text-xl">Handphone</th>
                <th scope="col" class="px-6 py-4 text-xl">Brand</th>
                <th scope="col" class="px-6 py-4 text-xl">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in info"
                :key="item.id"
                class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200"
              >
                <td class="whitespace-nowrap px-6 py-4 text-xl">
                  {{ item.handphone }}
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-xl">
                  {{ item.brand }}
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-xl">
                  {{ item.price }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreatePage',
  data() {
    return {
      info: [],
      handphone: '',
      brand: '',
      price: ''
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      try {
        const req = await fetch('http://localhost:1337/api/hp', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await req.json()
        console.log(data)
        this.info = data.docs
      } catch (error) {
        console.log(error)
      }
    },
    async createData() {
      try {
        const req = await fetch('http://localhost:1337/api/hp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            handphone: this.handphone,
            brand: this.brand,
            price: this.price
          })
        })
        const data = await req.json()
        console.log(data);
        alert('Data is created!');
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
