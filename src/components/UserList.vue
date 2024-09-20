<template>
  <div class="text-white">
    <div class="md:h-full flex items-center flex-wrap">
      <div class="container mx-auto max-w-7xl p-4">
        <h1
          class="text-blue-400 font-bold text-center drop-shadow-xl pb-4 md:text-5xl sm:text-4xl text-4xl"
          style="text-shadow: 1px 1px black"
        >
          PROFILES
        </h1>
        <div
          v-if="isloading"
          class="text-white bg-blue-400 sm:w-full sm:text-lg mt-3 w-full h-96 xl:p-60 animate-pulse flex justify-center items-center"
        >
          <p class="text-2xl sm:text-3xl md:text-5xl" style="text-shadow: 1px 1px black">
            <i class="fa-solid fa-spinner fa-spin"></i>
            Processing...
          </p>
        </div>
        <div
          v-else-if="error"
          class="text-white bg-blue-400 mt-3 md:text-5xl sm:text-4xl text-3xl xl:p-60 w-full h-96 flex justify-center items-center"
        >
          <p class="text-2xl sm:text-3xl md:text-5xl" style="text-shadow: 1px 1px black">
            {{ error }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2, md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Cards -->
          <router-link
            :to="{ name: 'UserPosts', params: { id: user.id } }"
            v-for="user in users"
            :key="user.id"
            class="bg-white shadow-sm shadow-black pb-6 hover:scale-105 transition duration-700 ease-in-out rounded-lg overflow-hidden p-4"
          >
            <div class="flex bg-blue-400 p-1 pb-5 justify-between align-center">
              <div class="">
                <p
                  class="font-bold text-xl drop-shadow-xl"
                  
                >
                  {{ user.username }}
                </p>
                <p class="text-xs">{{ user.website }}</p>
              </div>
              <img
                class="inline-block ms h-10 w-10 rounded-full ring-2 ring-white"
                src="https://i.postimg.cc/dV66kwpg/3541871.png"
                alt=""
              />
            </div>
            <div class="grid grid-cols-2 border border-blue-400">
              <div class="border flex p-3 border-blue-400 truncate whitespace-nowrap">
                <p class="text-gray-500 text-xs">
                  <i class="fa-solid fa-envelope pe-1 text-sm" style="color: #8f98a8"></i
                  >{{ user.email }}
                </p>
              </div>
              <div
                class="border p-3 border-blue-400 text-ellipsis overflow-hidden whitespace-nowrap"
              >
                <p class="text-gray-500 text-xs">
                  <i class="fa-solid fa-phone pe-1 text-sm" style="color: #8f98a8"></i
                  >{{ user.phone }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { Getdatas } from "../composables/Getdatas";



export default {
  setup() {
    const { users, isloading, error, fetchUsers } = Getdatas();
    fetchUsers();

    return { users, isloading, error };
  },
};
</script>

<style lang="scss" scoped></style>
