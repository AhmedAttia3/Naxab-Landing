<template>
  <section :id="global.currentTab === 'customers' ? texts.customers.navLinks.link7.sectionHash : texts.sellers.navLinks.link7.sectionHash" class="bg-[#343434] pb-0 pt-20 md:py-20 lg:py-24 py px-0 text-[#FFFFFF]">    
    <div class="inner-container px-0 md:px-7 lg:px-1">
       
        <div class="flex flex-wrap gap-y-10 gap-x-16">
          <div class="md:basis-[45%] basis-full w-full sm:w-[350px] md:w-[400px] lg:w-[450px] py-0 md:py-5 lg:py-6 xl:py-7">
              <!-- contact us - title -->
              <div v-if="global.currentTab === 'customers'" class="flex justify-center md:justify-start">
                  <div class="title--divider text-center flex mb-5 md:mb-6 lg:mb-10 px-4">
                    <span :class="`title--divider--start bg-secondary`"></span>
                    <strong
                      :class="`'text-[#FFFFFF]':'text-[#000000]'} title--divider--middle ltr:mx-[0.4rem] ltr:sm:mx-[1.5rem] mx-[1rem] sm:mx-[1.5rem] md:mx-[1.6rem] ltr:lg:mx-[1.8rem] lg:mx-[1.8rem] ltr:3xl:mx-[3rem] 3xl:mx-[3rem] text-[18.5px] ltr:md:text-[19px] md:text-[19px] ltr:lg:text-[24px] lg:text-[24px] ltr:3xl:text-[25px] 3xl:text-[25px] text-bold`"
                    >
                    {{ $t('head_titles.customers.fifth.text') }}
                      <span class="text-secondary">{{$t('head_titles.customers.fifth.highlight')}}</span>
                    </strong>
                    <span class="title--divider--end bg-secondary"></span>
                  </div> 
              </div>
              <div v-else-if="global.currentTab === 'sellers'" class="flex justify-center md:justify-start">
                  <div class="title--divider text-center flex mb-5 md:mb-6 lg:mb-10 px-4">
                    <span :class="`title--divider--start bg-secondary`"></span>
                    <strong
                      :class="`'text-[#FFFFFF]':'text-[#000000]'} title--divider--middle ltr:mx-[0.4rem] ltr:sm:mx-[1.5rem] mx-[1rem] sm:mx-[1.5rem] md:mx-[1.6rem] ltr:lg:mx-[1.8rem] lg:mx-[1.8rem] ltr:3xl:mx-[3rem] 3xl:mx-[3rem] text-[18.5px] ltr:md:text-[19px] md:text-[19px] ltr:lg:text-[24px] lg:text-[24px] ltr:3xl:text-[25px] 3xl:text-[25px] text-bold`"
                    >
                    {{ $t('head_titles.sellers.fifth.text') }}
                      <span class="text-secondary">{{$t('head_titles.sellers.fifth.highlight')}}</span>
                    </strong>
                    <span class="title--divider--end bg-secondary"></span>
                  </div> 
              </div>
              <!-- contact us form -->
              <form class="px-4" @submit.prevent="() => onFormSubmission()">
                <!-- name input -->
                <FormInput                    
                        elementType="input"
                        inputType="text"
                        :label="$t('contact_us.name')"
                        v-model="formState.name"
                        :isSubmitted="isSubmitted"
                        :disabled="isLoading"
                        :isInvalid="!isLoading && isSubmitted && v$.formState.name.$invalid"
                        :isRequired="false"
                        :placeholder="$t('contact_us.enter_name')"
                        :invalidMsg="$t('contact_us.name_invalid')" />
                <!-- phone input -->
                <FormInput
                        elementType="input"
                        inputType="tel"
                        :label="$t('contact_us.phone_number')"                       
                        v-model="formState.phone"
                        :isSubmitted="isSubmitted"
                        :disabled="isLoading"
                        :isInvalid="!isLoading && isSubmitted && v$.formState.phone.$invalid"
                        :isRequired="false"
                        :placeholder="$t('contact_us.enter_your_phone')"
                        :invalidMsg="$t('contact_us.phone_invalid')" />
              <!-- message input -->
              <FormInput                    
                        elementType="textarea"
                        inputType=""
                        :label="$t('contact_us.message')" 
                        v-model="formState.message"
                        :isSubmitted="isSubmitted"
                        :disabled="isLoading"
                        :isInvalid="!isLoading && isSubmitted && v$.formState.message.$invalid"
                        :isRequired="false"
                        :placeholder="$t('contact_us.write_your_message')"
                        :invalidMsg="$t('contact_us.message_invalid')" />
                <!-- backend error -->
                <div
                  v-show="errorReceived && !successMessage"
                  class="alert alert-danger text-red-800 w-full py-2 px-4 mb-2 mt-4 text-center"
                  role="alert"
                >{{ errorReceived }}</div>
              <input
                type="submit"
                :value="`${isLoading ? $t('contact_us.processing') : $t('contact_us.send')}`"
                :class="`${isLoading ? 'disabled' : ''} w-full py-3 px-4 active:brightness-125 font-bold cursor-pointer rounded-[10px] text-[16px] lg:text-[17px] 3xl:[19px] text-secondary submit__button`"
              />
              <!-- request succeeded -->
                <div
                  v-show="!errorReceived && successMessage"
                  class="alert alert-success text-green-500 w-full py-3 px-4 mb-2 mt-6 text-center"
                  role="alert"
                >{{ successMessage }}</div>
              </form>
          </div>

          <!-- getting in touch -->
          <div class="bg-[#272727] flex flex-col items-center md:bg-transparent pt-8 pb-9 md:pt-0 md:pb-0 basis-full w-full md:basis-[45%] sm:w-auto">
            <!-- logo -->
            <div class="mb-8 md:mb-10 lg:mb-16" data-aos-duration="300" data-aos-delay="250" data-aos-once="true" data-aos="zoom-in-up">
              <img :draggable="false" :src="logoImg" width="123" height="86" class="object-contain w-[96px] sm:w-[102px] md:w-[120px] lg:w-[123px] 3xl:w-[138px]" alt=""/>
            </div>
              <!-- app store links on mobile view -->
              <div class="store__links md:hidden flex items-center mb-7 gap-3">
                <a :href="global.currentTab === 'customers' ? texts.customers.app_links.google_store : texts.sellers.app_links.google_store" rel="noopener noreferrer" target="_blank" title="Download our app from the Google Play now">
                  <img :draggable="false" :src="googleStoreImg" width="115" height="32" class="object-contain w-[115px] sm:w-[121px] md:w-[120px] lg:w-[150px] h-auto hover:shadow-md active:opacity-75" alt="download Naxab on Google Play"/>
                </a>
                <a :href="global.currentTab === 'customers' ? texts.customers.app_links.apple_store : texts.sellers.app_links.apple_store" rel="noopener noreferrer" target="_blank" title="Download our app from the Apple store now">
                  <img :draggable="false" :src="appleStoreImg" width="115" height="32" class="object-contain w-[115px] sm:w-[121px] md:w-[120px] lg:w-[150px] h-auto hover:shadow-md active:opacity-75" alt="download Naxab on Apple store"/>
                </a>
              </div>
            <!-- follow us - title -->
              <div v-if="global.currentTab === 'customers'" class="flex justify-center md:justify-start">
                  <div class="title--divider text-center flex mb-5 md:mb-6 lg:mb-9 px-4">
                    <span :class="`title--divider--start bg-secondary`"></span>
                    <strong
                      :class="`'text-[#FFFFFF]':'text-[#000000]'} title--divider--middle ltr:mx-[0.4rem] ltr:sm:mx-[1.5rem] mx-[1rem] sm:mx-[1.5rem] md:mx-[1.6rem] ltr:lg:mx-[1.8rem] lg:mx-[1.8rem] ltr:3xl:mx-[3rem] 3xl:mx-[3rem] text-[18.5px] ltr:md:text-[19px] md:text-[19px] ltr:lg:text-[24px] lg:text-[24px] ltr:3xl:text-[25px] 3xl:text-[25px] text-bold`"
                    >
                    {{ $t('head_titles.customers.sixth.text') }}
                      <span class="text-secondary">{{$t('head_titles.customers.sixth.highlight')}}</span>
                    </strong>
                    <span class="title--divider--end bg-secondary"></span>
                  </div> 
              </div>
              <div v-else-if="global.currentTab === 'sellers'" class="flex justify-center md:justify-start">
                  <div class="title--divider text-center flex mb-5 md:mb-6 lg:mb-9 px-4">
                    <span :class="`title--divider--start bg-secondary`"></span>
                    <strong
                      :class="`'text-[#FFFFFF]':'text-[#000000]'} title--divider--middle ltr:mx-[0.4rem] ltr:sm:mx-[1.5rem] mx-[1rem] sm:mx-[1.5rem] md:mx-[1.6rem] ltr:lg:mx-[1.8rem] lg:mx-[1.8rem] ltr:3xl:mx-[3rem] 3xl:mx-[3rem] text-[18.5px] ltr:md:text-[19px] md:text-[19px] ltr:lg:text-[24px] lg:text-[24px] ltr:3xl:text-[25px] 3xl:text-[25px] text-bold`"
                    >
                    {{ $t('head_titles.sellers.sixth.text') }}
                      <span class="text-secondary">{{$t('head_titles.sellers.sixth.highlight')}}</span>
                    </strong>
                    <span class="title--divider--end bg-secondary"></span>
                  </div> 
              </div>
              <!-- social links -->
              <div class="socials flex items-center gap-4 lg:gap-5 3xl:gap-6 mb-0 md:mb-9">
                  <a :href="texts.links.socials.facebook" rel="noopener noreferrer" target="_blank" title="Find us on Facebook">
                    <img :draggable="false" :src="facebookImg"  class="object-contain w-[38px] h-[38px] lg:w-[40px] lg:h-[40px] hover:translate-y-[-2px] ease-linear duration-150" width="40" height="40" alt="go to our facebook page"/>
                  </a>
                  <a :href="texts.links.socials.instagram" rel="noopener noreferrer" target="_blank" title="Find us on Instagram">
                    <img :draggable="false" :src="instagramImg"  class="object-contain w-[38px] h-[38px] lg:w-[40px] lg:h-[40px] hover:translate-y-[-2px] ease-linear duration-150" width="40" height="40" alt="go to our instagram page"/>
                  </a>
              </div>
              <!-- app store links -->
              <div class="store__links hidden md:flex items-center gap-3">
                <a :href="global.currentTab === 'customers' ? texts.customers.app_links.google_store : texts.sellers.app_links.google_store" class="zoom-on-hover" rel="noopener noreferrer" target="_blank" title="Download our app from the Apple store now">
                  <img :draggable="false" :src="appleStoreImg" width="150" height="43" class="object-contain w-[111px] md:w-[120px] lg:w-[150px] h-auto hover:shadow-md active:opacity-75" alt="download Naxab on Apple store"/>
                </a>
                <a :href="global.currentTab === 'customers' ? texts.customers.app_links.apple_store : texts.sellers.app_links.apple_store" class="zoom-on-hover" rel="noopener noreferrer" target="_blank" title="Download our app from the Google Play now">
                  <img :draggable="false" :src="googleStoreImg" width="150" height="43" class="object-contain w-[111px] md:w-[120px] lg:w-[150px] h-auto hover:shadow-md active:opacity-75" alt="download Naxab on Google Play"/>
                </a>
              </div>
          </div>
        </div>

    </div>
  </section>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { useGlobalStore } from "@/store/Modules/global";
import SectionTitle from './SectionTitle.vue';
import texts from '@/fixtures/texts.js';
import FormInput from '../Generic/FormInput.vue';
import { required, minLength } from '@vuelidate/validators';
import logoImg from '@/assets/imgs/logo2.png';
import facebookImg from '@/assets/imgs/fb.svg';
import instagramImg from '@/assets/imgs/insta.svg';
import googleStoreImg from '@/assets/imgs/store_dark.svg';
import appleStoreImg from '@/assets/imgs/app_store_dark.svg';
import axios from "axios";

const number = (value) => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value) || /^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{11})$/.test(value); 
export default {
  setup(){
      return {
        v$: useVuelidate(),
        global: useGlobalStore()
      }
  },
  data(){
    return {
      logoImg,
      facebookImg,
      instagramImg,
      googleStoreImg,
      appleStoreImg,
      texts,
      isSubmitted: false,
      isLoading: false,
      errorReceived: false,
      successMessage: false,
      formState: {
        name:"",
        phone: "",
        message: ""
      }
    }
  },
  validations() {
    return {
      formState: {
        name: { required },
        phone: { required, number },
        message: { required, minLength: minLength(5) }
      }
    }
  },
  components: {
      SectionTitle,
      FormInput
  },
  methods: {
    onFormSubmission(){
      this.isSubmitted = true;
      this.errorReceived = "";
      this.v$.formState.$touch();
      if (this.v$.formState.$invalid) {
        return;
      } else {
        const formData = new FormData();
        Object.entries(this.formState || {})?.forEach(([Key, value]) => {
          formData.append(Key, value);
        });
        formData.append('title', '-');
        formData.append('app', 'web');
        this.isLoading = true;
        this.successMessage = "";
        axios({
          url: texts.contact_us_request_url,
          method: 'POST',
          data: formData,
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Accept-Language": this.global?.localStorageCopy?.lang || 'ar'
          },
        }).then(response => {
            return response.data;
          }).then((res) => {
              this.isSubmitted = false;
              this.isLoading = false;
              if (res?.status) {
                this.successMessage = res?.message || "تم استقبال رسالتكم بنجاح. شكرا لتواصلكم معنا";
                this.errorReceived = "";
                this.formState.name = "";
                this.formState.phone = "";
                this.formState.message = "";
              } else {
                this.successMessage = "";
                this.errorReceived = res.message;
              }
          })
          .catch(err => {
            this.errorReceived = err.message || 'حدث خطأ ما اثناء ارسال الرسالة. من فضلك عاود المحاولة لاحقا.';
            this.successMessage = "";
            this.isLoading = false;
          });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #contact_us{
    .submit__button{
      background: transparent linear-gradient(180deg, #92278F 0%, #5C2D91 100%) 0% 0% no-repeat padding-box;
      transition: 0.3s linear;
      transition-property: filter;
      &:hover{
        filter: brightness(1.1);
      }
    }

  }
</style>