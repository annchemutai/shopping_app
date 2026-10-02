import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {

    const createProductsList = () =>[
        {
            id: 1,
            name: 'Sony Headphones',
            image: 'images/products/product1.jpg',
            price: 10000,
            category: 'HeadPhones',
            description: 'Noice Cancelling headphones, comfortable to waer all day long',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id: 2,
            name: 'iphone Wired Earphones',
            image: 'images/products/product2.jpg',
            price: 2000,
            category: 'HeadPhones',
            description: 'Simple wired headphones, comfortable to waer all day long',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id: 3,
            name: 'Ugreen Charger',
            image: 'images/products/product3.jpg',
            price: 5000,
            category: 'Chargers',
            description: 'Wireless charging with a stand, making it easy to use your phone as secondary display',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
         {
            id: 4,
            name: 'Sony Headphones',
            image: 'images/products/product1.jpg',
            price: 10000,
            category: 'HeadPhones',
            description: 'Noice Cancelling headphones, comfortable to waer all day long',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id: 5,
            name: 'iphone Wired Earphones',
            image: 'images/products/product2.jpg',
            price: 2000,
            category: 'HeadPhones',
            description: 'Simple wired headphones, comfortable to waer all day long',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id: 6,
            name: 'Ugreen Charger',
            image: 'images/products/product3.jpg',
            price: 5000,
            category: 'Chargers',
            description: 'Wireless charging with a stand, making it easy to use your phone as secondary display',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
         {
            id: 7,
            name: 'Sony Headphones',
            image: 'images/products/product1.jpg',
            price: 10000,
            category: 'HeadPhones',
            description: 'Noice Cancelling headphones, comfortable to waer all day long',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id: 8,
            name: 'iphone Wired Earphones',
            image: 'images/products/product2.jpg',
            price: 2000,
            category: 'HeadPhones',
            description: 'Simple wired headphones, comfortable to waer all day long',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id: 9,
            name: 'Ugreen Charger',
            image: 'images/products/product3.jpg',
            price: 5000,
            category: 'Chargers',
            description: 'Wireless charging with a stand, making it easy to use your phone as secondary display',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        
    ]

    const products = ref(createProductsList())

    const selectedProductId = ref(null)
    const selectedProduct = computed(() => {
        return products.value.find(product => product.id === selectedProductId.value)
    })

    function selectProduct(id) {
        selectedProductId.value = id
    }

    const resetProducts = () => {
        products.value = createProductsList()
    }

    function addProduct(data){
        const lastId = products.value.length > 0 ? products.value[products.value.length - 1].id : 0
        data.id = lastId + 1
        products.value.push(data)
    }
    return{ products, selectedProductId, selectedProduct, selectProduct, resetProducts, addProduct}

},
{
    persist: true,
}
)