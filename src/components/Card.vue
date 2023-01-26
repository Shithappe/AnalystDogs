<template>
  <div className="card">
    <div>{{index + 1}}</div>
    <!-- <hr> -->
    <div class="logo_card">
      <img :src="data.img" alt="">
    </div>
    <div class="title">{{data.title}}</div>
    <div>
      <span>Twitter</span>
      <br>
      <span>Discord</span>
    </div>
    <div class="member">
      <span>{{ data.members }}</span>
      <img src="../assets/twitter-64.png" alt="">
    </div>
    <div><span>Hype</span><progress :max="this.max_hype" :value="this.data.hype"></progress></div>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['index', 'data', 'max_hype'],

}
</script>

<style scoped>
 .card{
    display: flex;
    align-items: center;
    gap: 50px;

    width: 60vw;
    margin: 1em auto;
    padding: 1.2rem ;

    border-radius: 15px;
    
    transition: all .2s ease-in-out;
    background-color: #65cbfa7f;
    box-shadow: rgba(39, 40, 40, 0.2) 0px 8px 24px;

    z-index: 2;
  }
  .card:hover{
    transform: scale(1.02);
    background-color: #65cbfa9c;
    box-shadow: rgba(78, 80, 81, 0.4) 0px 8px 24px;
 }

 
  .logo_card img{
   height: 4rem;
   width: 4rem;
   object-fit: cover;
   border-radius: 15%;
   box-shadow: rgba(39, 40, 40, 0.2) 0px 8px 24px;
  }

  .title{
    width: 50%;
    float: left;
    text-align: left;
    /* margin-right: 1.8vw; */
  }

  .member{
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .member img{
    width: 15px;
  }
</style>