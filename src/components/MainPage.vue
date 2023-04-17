<template>
  <div class="main_welcome">

    <div class="categories">
      <!-- <BigCard :dataEl="test_data" />
      <BigCard :dataEl="test_data" />
      <BigCard :dataEl="test_data" /> -->

      <BigCard v-for="card in this.big_card" :dataEl="card" :key="card.cat" />
    </div>
    <div class="categories_small">
        <SmallCard v-for="category in this.categories" :category="category" :key="category"/>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import BigCard from './BigCard.vue';
import SmallCard from './SmallCard.vue';


export default {
    name: "MainPage",
    components: {
      BigCard,
      SmallCard
    },
    data() {
    return { 
      categories: [
        // "NFT",
        "Bridge",
        // "DeFi",
        "Dex",
        "GameFi",
        "Infrastructure",
        "Launchpad",
        "Name Service",
        "NFT Market",
        "Official Partners",
        "SocialFi",
        "Tools",
        // "Wallet",
      ],
      big_card: [],
      test_data: {
        category: "NFT",
        list: [
        {
          id: 0,
          name: 'awd1',
          supply: 1009,
          commynity: 'nameOfComm1',
          hype: 85
        },
        {
          id: 1,
          name: 'awd1',
          supply: 27,
          commynity: 'nameOfComm2',
          hype: 85
        },
        {
          id: 2,
          name: 'name tra tra tra',
          supply: 107,
          commynity: 'nameOfComm3',
          hype: 85
        },
        {
          id: 3,
          name: 'UlnraB',
          supply: 102,
          commynity: 'nameOfComm3',
          hype: 85
        },
        {
          id: 2,
          name: 'Z_Nfw',
          supply: 88,
          commynity: 'nameOfComm3',
          hype: 85
        }
      ]
      }
    }
  },
  mounted() {
    axios.get('https://analytics.movedogs.club/api/get_projects_by_cat_byhome')
    .then((response)=>{
      this.big_card = response.data;
    })
  }
}
</script>

<style >
html, body{
  margin: 0;
  padding: 0;
}
  .categories{
    margin-top: 9em;
    display: flex;
    justify-content: center;
  }

.categories_small{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2vh 5vw;
}

@media screen and (max-width: 500px) {
  .categories{
    margin-top: 10em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>