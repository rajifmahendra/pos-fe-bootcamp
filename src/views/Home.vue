<template>
    <div>
        <main class="my-8">
            <div class="container mx-auto px-6">
                <div>
                    <img src="https://media.slidesgo.com/storage/149544/responsive-images/0-banner-infographics___media_library_original_1600_900.jpg"
                        alt="">
                </div>
                <div class="mt-16">
                    <h3 class="text-gray-600 text-2xl font-medium">Our Products</h3>
                    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        <div v-for="(item, index) in products" :key="index"
                            class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                            <div class="max-w-2xl mx-auto">
                                <div
                                    class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img class="rounded-t-lg p-8" style="height: 500px;width: 500px;"
                                            :src="item.images[0]" alt="product image">
                                    </a>
                                    <div class="px-5 pb-5">
                                        <RouterLink
                                            class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white hover:text-blue-300 hover:cursor-pointer"
                                            :to="`/product/${item.id}/detail`">
                                            {{ item.title }}
                                        </RouterLink>
                                        <div class="flex items-center mt-2.5 mb-5">
                                            <svg v-for="(rate, rateIndex) in Math.ceil(item.rating)"
                                                class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                :key="rateIndex" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                            </svg>
                                            <span
                                                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{
                            Math.ceil(item.rating) }}</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-3xl font-bold text-gray-900 dark:text-white">${{
                            item.price }}</span>
                                            <RouterLink :to="`/product/${item.id}/detail`"
                                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Detail
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: 'Home',
    data() {
        return {
            products: []
        }
    },
    mounted() {
        this.fetchProducts()
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                if (response.status !== 200) {
                    return alert('error');
                }
                this.products = response.data.products;
            } catch (error) {
                return alert('error');
            }
        }
    }
}
</script>