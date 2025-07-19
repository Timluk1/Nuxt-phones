export default defineEventHandler((event) => {
    const query = getQuery(event);
    const { brand, sortBy } = query;

    let phones = [
        {
            id: 1,
            rating: 4.5,
            name: "apple iPhone 14 Pro",
            image: "http://localhost:3000/images/1.png",
            price: 999,
            isLiked: false,
        },
        {
            id: 2,
            name: "Samsung Galaxy S23",
            rating: 4.7,
            image: "http://localhost:3000/images/2.png",
            price: 899,
            isLiked: true,
        },
        {
            id: 3,
            name: "Google Pixel 8",
            rating: 3,
            image: "http://localhost:3000/images/2.png",
            price: 799,
            isLiked: false,
        },
        {
            id: 4,
            name: "Google Pixel 8",
            rating: 2,
            image: "http://localhost:3000/images/1.png",
            price: 600,
            isLiked: false,
        },
        {
            id: 5,
            name: "Google Pixel 8",
            rating: 1,
            image: "http://localhost:3000/images/2.png",
            price: 1500,
            isLiked: false,
        },
        {
            id: 6,
            name: "Google Pixel 8",
            rating: 4.7,
            image: "http://localhost:3000/images/3.png",
            price: 403,
            isLiked: false,
        },
    ];

    // Фильтрация по бренду
    if (brand) {
        phones = phones.filter((phone) =>
            phone.name.toLowerCase().includes(brand.toLowerCase()),
        );
    }

    // Сортировка
    if (sortBy === "price") {
        phones.sort((a, b) => a.price - b.price);
    } else if (sortBy === "rating") {
        phones.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "name") {
        phones.sort((a, b) => a.name.localeCompare(b.name));
    }

    return phones;
});
