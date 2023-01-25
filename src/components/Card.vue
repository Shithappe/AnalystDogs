<template>
  <div className="card">
    <div>{{data.id}}</div>
    <div class="logo_card">
      <img src="https://images.unsplash.com/photo-1665964920600-c6feefef3af1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="">
    </div>
    <div class="title">{{data.title}}</div>
    <!-- <div>{{data.supply}}</div>
    <div>{{data.community}}</div> -->
    <div>
      <span>Twitter</span>
      <br>
      <span>Discord</span>
    </div>
    <div>hype</div>
    <!-- {{data}} -->
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['data'],

}
</script>

<style scoped>
 .card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 50px; */

    width: 60vw;
    margin: 1em auto;
    padding: 25px;

    border-radius: 15px;
    
    transition: all .2s ease-in-out;
    background-color: #65cbfa7f;
  }
  .card:hover{
    transform: scale(1.02);
    background-color: #65cbfa9c;
    box-shadow: rgba(78, 80, 81, 0.4) 0px 8px 24px;
 }

 
  .logo_card img{
   height: 5rem;
   width: 5rem;
   object-fit: cover;
   border-radius: 50%;
   box-shadow: rgba(39, 40, 40, 0.5) 0px 8px 24px;
  }

  .title{
    width: 30%;
  }
</style>