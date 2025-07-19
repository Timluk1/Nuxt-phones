<script setup lang="ts">
interface Phone {
    id: number;
    name: string;
    image: string;
    price: number;
    isLiked: boolean;
}

const { phone } = defineProps<{
    phone: Phone;
}>();

const isLiked = ref(phone.isLiked);

const toggleLike = () => {
    isLiked.value = !isLiked.value;
};
</script>

<template>
    <div class="phone-card">
        <button class="like-icon">
            <img
                :src="isLiked ? '/icons/red-like.svg' : '/icons/like.svg'"
                alt="Like icon"
                @click="toggleLike"
            />
        </button>
        <div class="image-container">
            <img :src="phone.image" alt="Telephone" />
        </div>
        <p class="phone-name">{{ phone.name }}</p>
        <p class="phone-price">{{ phone.price }} $</p>
        <Button class="buy-button">Buy now</Button>
    </div>
</template>

<style scoped>
.phone-card {
    padding: 24px 16px;
    background-color: var(--card-phone);
}

.phone-img {
    margin: 0 auto;
    margin-bottom: 16px;
}

.image-container {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.like-icon {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.phone-name {
    text-align: center;
    margin-top: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}

.phone-price {
    text-align: center;
    margin-top: 16px;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.03em;
}

.buy-button {
    margin-top: 24px;
}
</style>
