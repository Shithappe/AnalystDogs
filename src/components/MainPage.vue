<template>
  <h1>Main Page</h1>

  <div class="categories">
      <div className="category">
        <div className="ctext">
          <h1>USB</h1>
          <ul v-for="item in test_data" :key="item.id" :data="item">
            <li>{{item.name}}</li>
          </ul>
          <span>See more</span>
        </div>
      </div>

      <div className="category">
        <div className="ctext">
          <h1>USB</h1>
          <ul v-for="item in test_data" :key="item.id" :data="item">
            <li>{{item.name}}</li>
          </ul>
          <span>See more</span>
        </div>
      </div>

      <div className="category">
        <div className="ctext">
          <h1>USB</h1>
          <ul v-for="item in test_data" :key="item.id" :data="item">
            <li>{{item.name}}</li>
          </ul>
          <span>See more</span>
        </div>
      </div>

      <br>
      <router-link to="top">to top</router-link>
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
</style>