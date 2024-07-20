// src/stores/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        carts: []
    }),
    actions: {
        loadCarts() {
            // Load carts from localStorage or any other source
            const storedCarts = localStorage.getItem('carts');
            if (storedCarts) {
                this.carts = JSON.parse(storedCarts);
            }
        },
        saveCarts() {
            // Save carts to localStorage or any other source
            localStorage.setItem('carts', JSON.stringify(this.carts));
        },
        syncCarts() {
            // Optionally sync carts with server
            // Example: axios.post('/api/carts/sync', this.carts)
        },
        addToCart(item) {
            this.carts.push(item);
            this.saveCarts();
        },
        removeFromCart(index) {
            this.carts.splice(index, 1);
            this.saveCarts();
        },
        clearCart() {
            this.carts = [];
            this.saveCarts();
        }
    }
});
