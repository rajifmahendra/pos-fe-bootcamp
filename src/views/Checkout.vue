<template>
    <div>
        <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->

            <div class="flex justify-start item-start space-y-2 flex-col">
                <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                    Order #13432</h1>
                <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM
                </p>
            </div>
            <div
                class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div
                    class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8 border-gray shadow-md">
                    <div
                        class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p
                            class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                            Customer’s Cart</p>
                        <div v-for="(item, index) in carts" :key="index"
                            class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div class="pb-4 md:pb-8 w-full md:w-40">
                                <img class="w-full hidden md:block" :src="item.product.images[0]" alt="product image" />
                                <img class="w-full md:hidden" :src="item.product.images[0]" alt="product image" />
                            </div>
                            <div
                                class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                <div class="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3
                                        class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                        {{ item.product.title }}</h3>
                                    <div class="flex justify-start items-start flex-col space-y-2">
                                        <p class="text-sm dark:text-white leading-none text-black"><span
                                                class="dark:text-gray-400 text-green-500">Category: </span> {{
                            item.product.category }}
                                        </p>
                                        <p class="text-sm dark:text-white leading-none text-black"><span
                                                class="dark:text-gray-400 text-green-500">Brand: </span> {{
                            item.product.brand }}</p>
                                        <p class="text-sm dark:text-white leading-none text-black"><span
                                                class="dark:text-gray-400 text-green-500">Description: </span> {{
                                            item.product.description }}</p>
                                    </div>
                                </div>
                                <div class="flex justify-between space-x-8 items-start w-full">
                                    <p class="text-base dark:text-white xl:text-lg leading-6"></p>
                                    <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{{ item.qty
                                        }}</p>
                                    <p
                                        class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                        ${{item.total_price}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col border-gray shadow-md">
                    <div
                        class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-3">
                        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-1 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                            <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                            <div
                                class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div class="flex justify-between w-full">
                                    <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">${{ totalPrice }}
                                    </p>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">$8.00</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${{
                                    totalPrice + 8 }}</p>
                            </div>

                        </div>
                    </div>
                    <router-link to="/payment"
                        class="flex w-full justify-center items-center md:justify-start md:items-start">
                        <button
                            class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Pay
                            Now</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from "@/stores/cart"
import _ from "lodash"
import { computed } from 'vue';

export default {
    name: 'Checkout',
    setup() {
        const cartStore = useCartStore();
        const totalPrice = computed(() => parseFloat((_.sumBy(cartStore.carts, 'total_price')).toFixed(2)));

        return {
            carts: cartStore.carts,
            totalPrice
        };
    },
}
</script>