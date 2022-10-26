<template>

  <div class="categories">
      <div className="category">
        <div className="ctext">
          <h1>NFT</h1>
          <ul v-for="item in test_data" :key="item.id" :data="item">
            <li>{{item.name}} - {{item.hype}}</li>
          </ul>
          <span><router-link to="top">See more</router-link></span>
        </div>
      </div>

  </div>
</template>

<script>
export default {
    name: "MainPage",
    data() {
    return { 
      seach: '',
      test_data: [
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
  },

}
</script>

<style>
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

  a{
    color: rgb(243, 231, 255);
    padding: 5px 10px;
    transition: all .2s ease-in-out;
    border-radius: 6px;
  }
  a:hover{
    background: #1f1d1d7d;
  }
</style>