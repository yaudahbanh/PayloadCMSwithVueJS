<template>
  <div class="max-w-md mx-auto py-5">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> ID Handphone </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter handphone name"
          v-model="id"
        />
      </div>

      <button
        type="submit"
        @click="deleteData"
        class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
      >
        Delete Data
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
                <th scope="col" class="px-6 py-4 text-xl">ID</th>
                <th scope="col" class="px-6 py-4 text-xl">Handphone</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in info"
                :key="item.id"
                class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200"
              >
                <td class="whitespace-nowrap px-6 py-4 text-xl">
                  {{ item.id }}
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-xl">
                  {{ item.handphone }}
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
  name: 'DeletePage',
  data() {
    return {
      info: [],
      id: ''
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
    async deleteData() {
      try {
        const req = await fetch(`http://localhost:1337/api/hp/${this.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await req.json()
        console.log(data);
        alert('Data is deleted!');
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
