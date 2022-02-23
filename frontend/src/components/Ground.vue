<template>
  <div class="ground">
    <Header/>
    <Memo/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Memo from "./Memo.vue";
export default {
  components: {
    Header, Footer, Memo
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
