<template>
  <Disclosure as="nav" class="bg-blue-400 shadow-xl" v-slot="{ open }">
    <div class="mx-auto 2xl:max-w-full xl:max-w-7xl px-2  sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only"></span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
          <div class="flex flex-shrink-0 pe-14 items-center  bg-blue-400 ">
            <a href="/">
              <span class="text-white text-lg sm:text-xl md:text-2xl "><i class="fa-solid fa-comment pe-3 "
                  style="color: #ffffff;"></i>User's</span>

            </a>
          </div>
          <div class="hidden ps-14 sm:ml-6 2xl:ms-60 sm:block">
            <div class="ps-14 flex space-x-4">
              <ul class="flex tabs text-white space-x-4 ">
                <li class="hover:bg-white hover:text-blue-400 duration-500 rounded-md px-3 py-2 text-sm  font-medium"><a
                    href="/">Home</a></li>
                <li class="hover:bg-white hover:text-blue-400 duration-500 rounded-md px-3 py-2 text-sm  font-medium"><a
                    href="/users">Users</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton></DisclosureButton>
        <ul class=" text-white space-y-4 ">
          <li class="hover:bg-white hover:text-blue-400 rounded-md px-3 py-2 text-base font-medium"><a href="/">Home</a>
          </li>
          <li class="hover:bg-white hover:text-blue-400 rounded-md px-3 py-2 text-base font-medium"><a
              href="/users">Users</a></li>
        </ul>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'


</script>
<style scoped></style>