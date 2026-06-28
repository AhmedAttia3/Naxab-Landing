<template>
  <section :id="'stats-section'" class="features__slides pb-7 pt-10 lg:pb-9 lg:pt-20 mt-5 md:mt-8 lg:mt-14 xl:mt-16 3xl:mt-20 min-h-[400px]">
    <div>
      <SectionTitle :inverted="true" :text="$t('head_titles.sellers.third.text')" :highlighted="$t('head_titles.sellers.third.highlight')"/>
      <div class="inner-container">
        <ul class="list-none grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-2 gap-x-12 facts-list mt-2 sm:mt-8 md:mt-12">
          <li v-for="(factItem, index) in texts.sellers.facts_list" class="text-white flex flex-nowrap items-start gap-1 sm:gap-2 font-normal text-[16px] md:text-[18px] lg:text-[19px]" :key="index" >
            <span class="bullet-point flex justify-center items-center">•</span>
            <p>{{ $t(`${factItem}`) }}</p>
          </li>
        </ul>
        <div class="flex flex-col max-w-[620px] m-auto items-center w-full text-[16px] sm:text-[18px] md:text-[19px] mt-8 md:mt-7 lg:mt-10">
          <strong class="text-secondary font-bold">{{ $t('joining_invetation_seller_text_1')}}</strong>
          <div class="text-white font-normal">
            {{ $t('joining_invetation_seller_text_2')}}
          </div>
          <a :href="texts.join_us_button_link" class="bg-secondary decoration-none hover:brightness-125 ease-linear duration-150  mt-8 mb-3 text-[#92278F] font-bold cursor-pointer px-5 py-1.5 md:px-6 md:py-1.5 xl:px-8 xl:py-2 text-center rounded-[12px] text-[17.5px] md:text-[18.5px] lg:text-[19.5px]">
            {{ $t('joining_invetation_seller_button_1') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
import texts from "@/fixtures/texts.js";
export default {
    data() {
       return{
        texts
       }
    },
    components: {
        SectionTitle
    }
}
</script>

<style lang="scss" scoped>
.features__slides{
    background:  transparent linear-gradient(180deg, #92278F 0%, #5C2D91 100%) 0% 0% no-repeat padding-box;
    .facts-list{
      li{
        .bullet-point{
          color: var(--secondary-color); 
          font-weight: bold;
          width: 27px; 
          height: 27px;
          font-size: 2.2rem;
          @media only screen and (max-width: 819px){
            margin-right: 0;
            width: 25px; 
            height: 25px;
          }
        }
      }
    }
}
</style>
