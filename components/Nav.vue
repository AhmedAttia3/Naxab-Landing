<template>
  <nav class="flex header__nav ">
    <ul v-if="navlist && Object.keys(navlist).length > 0" @click="(e) => onListCLick(e)" class="flex space-y-3 md:space-y-0 flex-col md:flex-row md:items-center list-none gap-1 md:gap-2 lg:gap-3 w-full">
      <NavItem v-for="(linkItem, index) in Object.values(navlist)" :isActive="activeLink === linkItem.sectionHash" :sectionHash="linkItem.sectionHash" :path="linkItem.path" :title="$t(`headerNav.${linkItem.translationId}`)" :isMobile="isMobile" :translationId="linkItem.translationId" :key="index"/>
    </ul>
  </nav>
</template>

<script>
import NavItem from "./NavItem.vue";
import texts from "@/fixtures/texts.js";

export default {
  computed:{
    navlist(){
      return texts.customers.navLinks
    }
  },
  props: {
    routesNames: {
      type: Object,
      required: true,
      default: () => {}
    },
    activeLink: {
      type: String,
      required: true,
      default: "index"
    },
    closeMobileBar: {
      type: Function
    },
    isMobile: {
        type: Boolean,
        required: false,
        default: false
    }
  },
  data(){
    return {
      texts
    }
  },
  components: {
    NavItem  
  },
  methods: {
    onListCLick(event){  
        if(!this.isMobile){
           return;
        }
        const tagName = event?.target?.tagName;
        if(tagName == 'LI' || tagName == 'A'){
            this.$nextTick(() => {
                this.closeMobileBar?.();
            });
        }
    }
  }
};
</script>

<style>
</style>