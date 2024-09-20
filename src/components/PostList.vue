<template>
    <div class="">
        <div
            class="mx-auto grid max-w-2xl 2xl:max-w-full 2xl:px-40 grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-10 sm:px-5 sm:py-4 lg:max-w-7xl  lg:px-8">
            <div v-if="isloading"
                class="text-white  bg-blue-400 sm:w-full sm:text-lg mt-3 w-full h-96 xl:p-60 animate-pulse flex  justify-center items-center">
                <p class="text-2xl sm:text-3xl md:text-5xl " style="text-shadow: 1px 1px black;">
                    <i class="fa-solid fa-spinner fa-spin"></i>
                    Processing...
                </p>
            </div>
            <div v-else-if="error"
                    class="text-white bg-blue-400 mt-3  md:text-5xl sm:text-4xl text-3xl w-full h-96 xl:p-60   flex  justify-center items-center">
                    <p class="text-2xl sm:text-3xl md:text-5xl" style="text-shadow: 1px 1px black;">
                        {{ error }}
                    </p>
                </div>
            <div v-else-if="user">
                <div class="flex">
                    <img class=" h-24 w-24  rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" />

                    <div class="ps-2 pt-5 2xl:mb-10">
                        <h2 class="text-2xl   font-bold tracking-tight text-gray-900 ">{{ user.name }}</h2>
                        <p class="text-sm ">@{{ user.username }}</p>
                    </div>
                </div>
                <div>
                    <div class=" flex truncate  whitespace-nowrap">
                        <p class="text-gray-500 text-sm \"><i class="fa-solid fa-envelope pe-1 text-sm \"
                                style="color: #8f98a8;"></i>{{ user.email }}</p>
                        <p class="text-gray-500 ps-10 text-sm \"><i class="fa-solid fa-phone pe-1 text-sm \"
                                style="color: #8f98a8;"></i>{{ user.phone }}</p>
                    </div>
                    <div class="py-2">
                        <p class="text-gray-500 text-sm \ pb-2"><i class="fa-solid fa-globe \"></i> {{ user.website }}</p>
                        <p class="text-gray-500 text-sm \ pb-2"><i class="fa-solid fa-location-dot \"></i> Address: {{
                            user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}, {{
                                user.address.zipcode }}</p>
                        <p class="text-gray-500 text-sm \ pb-2"><i class="fa-solid fa-building"></i> Works at {{
                            user.company.name }}</p>

                    </div>

                </div>
                <div v-if="pisloading"
                    class="text-white  bg-blue-400 sm:w-full sm:text-lg mt-3 w-full h-96 xl:p-60 animate-pulse flex  justify-center items-center">

                    <p class="text-2xl sm:text-3xl md:text-5xl " style="text-shadow: 1px 1px black;">
                        <i class="fa-solid fa-spinner fa-spin"></i>
                        Posts Loading.....
                    </p>

                </div>
                <div v-else-if="perror"
                  class="text-white bg-blue-400 mt-3  md:text-5xl sm:text-4xl text-3xl w-full h-96  flex  justify-center items-center">
                 <p class="text-2xl sm:text-3xl md:text-5xl" style="text-shadow: 1px 1px black;">
                    {{ error }}
                 </p>
                </div>
                <div v-else class="grid grid-cols-1 sm:grid-cols-2, md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:pt-4">
                    
                                 <!-- Cards -->
                    <div v-for="post in posts" :key="post.id"
                        class="flex flex-col  shadow-lg shadow-blue-400 pb-6 hover:scale-105 transition duration-700 ease-in-out rounded-lg overflow-hidden p-4">
                        <div class="flex  p-1 pb-5 justify-between align-center">

                            <div class=" ">
                                <div class="bg-blue-400 p-3 rounded-full object-fill w-14  text-center ">
                                    <i class="fa-solid fa-comment text-3xl " style="color: #ffffff;"></i>
                                </div>
                                <p class="font-bold text-lg 2xl:text-xl  text-gray-500 ">{{
                                    post.title }}</p>

                            </div>
                        </div>
                        <div
                            class=" bg-blue-400 mt-auto align-middle md:h-40 text-white p-3 lg:h-48 rounded-xl font-semibold text-sm ">

                            <p>{{ post.body }}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-3 p-2 float-end rounded-xl text-sm text-white bg-blue-400 shadow-md shadow-blue-400">
                    <a href="/">Back to Home</a>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { Getdatas } from '../composables/Getdatas';
import { onMounted } from 'vue';


export default {
    setup() {
        const { user, isloading, pisloading, error,perror, posts, getUser, fetchUserPosts } = Getdatas()
        const route = useRoute()
        const userId = route.params.id


        onMounted(() => {
            getUser(userId);
            fetchUserPosts(userId);
            console.log(userId);
            console.log(user.value);
            
            console.log(posts);

          



        });
        return { user, posts, isloading, pisloading, error,perror };
    }
};

</script>

<style lang="scss" scoped></style>