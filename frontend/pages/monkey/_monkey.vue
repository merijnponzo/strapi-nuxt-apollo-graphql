<template>
<section>
  <h1>Single monkey</h1>
  <pre>
{{monkey}}
</pre>
 <nuxt-link to="/">back</nuxt-link>
 <div v-if="error">
   an error occured, please check your console
 </div>
</section>
</template>

<script>
import { QUERY_SINGLE_MONKEY } from "@/graphql/monkeys.js";
export default {
  components: {},
  data() {
    return {
      monkey:[],
      error:null
    };
  },
  apollo: {
    monkey:{
       query:QUERY_SINGLE_MONKEY,
        //refreshes the query everytime
        fetchPolicy: 'network-only',
        variables(){
          let params = this.$route.params
          return {id:params.monkey}
        },
        result({ data, loading, networkStatus }) {
          
        },
        error(data){
          this.error = data
        }
    }
  },
  computed: {},
};
</script>