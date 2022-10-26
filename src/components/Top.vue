<template>
  <div class="main">
    <h2>Top of categories</h2>
    <!-- <div class="categories">
      <div className="category">
        <div className="ctext">
          <h1>USB</h1>
          <span>Lorem ipsum dolor, sit amet consectetur.</span>
        </div>
      </div>

      <div className="category">
        <div className="ctext">
          <h1>NFT</h1>
          <span>Lorem ipsum dolor, sit amet consectetur.</span>
        </div>
      </div>

      <div className="category">
        <div className="ctext">
          <h1>BTC</h1>
          <span>Lorem ipsum dolor, sit amet consectetur.</span>
        </div>
      </div>

    </div> -->
    <input className="inpSeach" v-model="seach" v-on:change="seching" type="text" placeholder="Seaching of projects...">
    <div className="sort_tool">
      <button>Name</button>
      <button>Date</button>
      <button>Members</button>
      <button>Hype</button>
    </div>
    <Card v-for="item in sort_data" :key="item.id" :data="item"/>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Top',
  components: {
    Card
  },
  data() {
    return { 
      seach: '',
      test_data: [
        {
          id: 0,
          name: 'awd1',
          supply: '[pawd]',
          commynity: 'nameOfComm1',
          hype: 85
        },
        {
          id: 1,
          name: 'awd1',
          supply: '[pawd]',
          commynity: 'nameOfComm2',
          hype: 85
        },
        {
          id: 2,
          name: 'name tra tra tra',
          supply: 'i dont know what is',
          commynity: 'nameOfComm3',
          hype: 85
        }
      ],
      sort_data: []
    }
  },
  methods: {
    seching() {
      this.sort_data = this.test_data.filter(el => el.name.includes(this.seach));
    }
  },
  mounted() {
    this.sort_data = this.test_data;
  }
}
</script>

<style>
  .inpSeach{
    margin-top: 20px;

    width: 15vw;

    border: none;
    outline: none;
    
    padding: 12px;
    border-radius: 10px;

    color: white;
    background-color: rgb(18, 93, 178, 0.2);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  .inpSeach::placeholder{
    color: rgb(227, 227, 227);
  }
  
  .sort_tool{
    display: flex;
    justify-content: center;
    
    gap: .5em;
  }
  .sort_tool button{
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 5px;
    padding: 5px 10px;
    color: rgb(83, 83, 83);
    background-color: rgba(255, 255, 255, 0);
    font-size: 16px;
    font-weight: 500;
    font-family: "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }
  .sort_tool button:hover{
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 8px;
    transition: .5s ease-in-out;
    background-color: rgba(54, 19, 128, 0.19);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  
  .categories{
    display: flex;
    justify-content: center;
  }
  
  .category{    
    margin: 1em;
    width: 250px;
    padding: .4rem;
    position: relative;
    background: linear-gradient(0.1turn, purple, rgb(185, 27, 213), orange);
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
    
    background-size: 100% 200%;
    transition: all 1.2s ease;
    background-position: 0 0;
  }
  .category:hover{
    transform: scale(1.02);
    background-position:0 100%;
    
    box-shadow: rgba(149, 157, 165, 0.9) 0px 8px 24px;
  }
  
  .ctext{
    border-radius: 20px;
    
    background: #6666667d;
    color: white;
    padding: 2rem;
    text-align: left;
    font-family: "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    text-shadow: 1px 1px 5px rgb(41, 39, 39, 0.5);
  }
  .ctext h1{
    font-size: 48px;
  }

</style>
