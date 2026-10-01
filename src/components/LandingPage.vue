<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle hide-delimiters>
                    <v-carousel-item src="/images/landingpage/carousel1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/landingpage/carousel2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/landingpage/carousel3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/landingpage/carousel4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>

    <!-- About us -->
     <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-card align="center">
                    <v-card-title>Welcome to Phonetic</v-card-title>
                    <v-card-text class="text-body-large"> We are your trusted online destination for the latest smartphones and mobile essentials.</v-card-text>
                    <v-card-text class="text-body-large">Founded with a passion for keeping people seamlessly connected, we bridge the gap between cutting-edge technology and everyday affordability. We carefully curate our inventory to bring you top-tier global brands, certified refurbished favorites, and high-quality accessories, ensuring you find the perfect device to fit your lifestyle.Founded with a passion for keeping people seamlessly connected, we bridge the gap between cutting-edge technology and everyday affordability. We carefully curate our inventory to bring you top-tier global brands, certified refurbished favorites, and high-quality accessories, ensuring you find the perfect device to fit your lifestyle.</v-card-text>
                    <v-card-text class="text-body-large"> By eliminating unnecessary retail overhead, we pass the savings directly to you—combining secure online shopping with fast delivery and dedicated customer support. Whether you are upgrading to the newest flagship or searching for a dependable daily driver, we are here to power your digital life with trust and value.</v-card-text>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

     <!-- categories -->
     <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/images/landingpage/phone1.jpg" cover></v-img>
                    <v-card-title> Smartphones</v-card-title>
                    <v-card-text>Browse the latest Apple, Samsung, Tecno, Vivo smart phone at affordable prices</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/images/landingpage/phone2.jpg" cover></v-img>
                    <v-card-title> Accessories</v-card-title>
                    <v-card-text>Search for latest and compatible headphones, chargers, and more accessories</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/images/landingpage/phone3.jpg" cover></v-img>
                    <v-card-title> Blog</v-card-title>
                    <v-card-text>Understand warranties, shipping and our excellent customer service</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/images/landingpage/phone4.jpg" cover></v-img>
                    <v-card-title> News</v-card-title>
                    <v-card-text>Read the latest news on upcoming launches </v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

     <!-- Footer -->
      <v-container max-width="100%" class="mt-16 bg-secondary" >
        <v-row>
            <v-col md="4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>Subscribe to our mailing list</v-card-title>
                    <v-card-text>Get the latest news, phone tips, and shop updates delivered to your inbox.</v-card-text>
                    <v-text-field label="Email address" outlined class="ma-4" bg-color="white">
                        <template v-slot:append-inner>
                        <v-btn color="primary" > Subscribe </v-btn>
                        </template>
                    </v-text-field>
                    <div class="text-center mb-4">
                        <p>Follow us on:</p>
                        <v-icon icon="mdi-instagram"></v-icon>
                        <v-icon icon="mdi-twitter"></v-icon>
                        <v-icon icon="mdi-facebook"></v-icon>
                    </div>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title> Contact Information</v-card-title>
                    <v-card-text>
                        <p>
                            <v-icon icon="mdi-map-marker-radius-outline"></v-icon>
                            The Phonetic Online Shop
                        </p>
                        <p> 123, Main Street Madaraka, Nairobi </p>
                        <p>
                            <v-icon icon="mdi-phone-outline"></v-icon>
                            +254712345678
                        </p>
                        <p>
                            <v-icon icon="mdi-email-outline"></v-icon>
                            info@phoneticshop.com
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card height="300px" color="secondary" flat>
                    <v-card-title> Quick Links</v-card-title>
                    <v-card-text>About Us</v-card-text>
                    <v-card-text>Smartphones</v-card-text>
                    <v-card-text>Accessories</v-card-text>
                    <v-card-text>News and Events</v-card-text>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
</template>