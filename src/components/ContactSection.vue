<template>
  <div class="contactSection flex flex-col lg:flex-row gap-5" :style="sectionStyle">
    <div class="contactSection_left w-full p-10" :class="{ 'lg:w-1/2': props.img }">
      <div class="contactSection_left_container max-w-[600px] mx-auto flex flex-col gap-10">
        <div v-if="props.title || props.subtitle" class="contactSection_top flex flex-col gap-5">
          <div v-if="props.title" class="contactSection_title text-3xl md:text-4xl font-semibold">
            {{ props.title }}
          </div>
          <div v-if="props.subtitle" class="contactSection_subtitle text-lg md:text-xl">
            {{ props.subtitle }}
          </div>
        </div>
        <div class="contactSection_middle flex flex-col gap-4">
          <div class="contactSection_names flex gap-5">
            <FormInputText
              v-if="usedOptions?.firstName?.displayed"
              v-model="firstName"
              class="contactSection_firtName"
              name="firstName"
              :title="usedOptions?.firstName.title"
              :placeholder="usedOptions?.firstName.placeholder"
              :required="usedOptions?.firstName.required"
            />
            <FormInputText
              v-if="usedOptions?.lastName?.displayed"
              v-model="lastName"
              name="lastName"
              class="contactSection_lastName"
              :title="usedOptions?.lastName.title"
              :placeholder="usedOptions?.lastName.placeholder"
              :required="usedOptions?.lastName.required"
            />
          </div>
          <FormInputText
            v-if="usedOptions?.email?.displayed"
            v-model="email"
            name="email"
            class="contactSection_email"
            :title="usedOptions?.email.title"
            :placeholder="usedOptions?.email.placeholder"
            :required="usedOptions?.email.required"
            :status="email && !emailValid ? 'error' : 'default'"
          />
          <FormInputText
            v-if="usedOptions?.companyName?.displayed"
            v-model="companyName"
            class="contactSection_companyName"
            name="companyName"
            :title="usedOptions?.companyName.title"
            :placeholder="usedOptions?.companyName.placeholder"
            :required="usedOptions?.companyName.required"
          />
          <FormInputText
            v-if="usedOptions?.phoneNumber?.displayed"
            v-model="phoneNumber"
            class="contactSection_phoneNumber"
            name="phoneNumber"
            :title="usedOptions?.phoneNumber.title"
            :placeholder="usedOptions?.phoneNumber.placeholder"
            :required="usedOptions?.phoneNumber.required"
            :status="phoneNumber && !phoneNumberValid ? 'error' : 'default'"
          />
          <FormInputText
            v-if="usedOptions?.message?.displayed"
            v-model="message"
            class="contactSection_message"
            name="message"
            type="text"
            :title="usedOptions?.message.title"
            :placeholder="usedOptions?.message.placeholder"
            :required="usedOptions?.message.required"
          />
        </div>
        <CTAButton
          v-bind="props.submitButton"
          :disabled="!sendAvailable"
          class="contactSection_submitButton min-w-[120px]"
          @click="handleSubmit"
        />
      </div>
    </div>
    <img
      v-if="props.img"
      :src="props.img"
      class="contactSection_img hidden lg:flex lg:w-1/2 object-cover h-auto"
    />
  </div>
</template>

<script setup lang="ts">
import CTAButton from '@/commons/CTAButton.vue'
import FormInputText from '@/commons/FormInputText.vue'
import { ContactSectionType } from '@/types/types'
import { getBgColor, getTxtColor } from '@/utils/utils'
import { computed, ref } from 'vue'
const props = withDefaults(defineProps<ContactSectionType>(), {
  title: undefined,
  subtitle: undefined,
  img: undefined,
  submitButton: () => ({
    name: 'submit',
    label: 'Send',
    icon: 'envelope',
    themeColor: 'tertiary'
  }),
  options: undefined,
  bgColor: undefined,
  color: undefined,
  themeColor: undefined
})

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexPhoneNumber = /^\+\d{1,3}\d{6,14}$/
const firstName = ref()
const lastName = ref()
const email = ref()
const phoneNumber = ref()
const companyName = ref()
const message = ref()

const emits = defineEmits(['submit'])

/** COMPUTED */

const usedOptions = computed(
  () =>
    props.options || {
      firstName: {
        displayed: true,
        required: true,
        title: 'First name',
        placeholder: 'First name'
      },
      lastName: { displayed: true, required: true, title: 'Last name', placeholder: 'Last name' },
      email: { displayed: true, required: true, title: 'Email', placeholder: 'Email' },
      companyName: {
        displayed: true,
        required: false,
        title: 'Company name',
        placeholder: 'Company name'
      },
      message: {
        displayed: true,
        required: true,
        title: 'Message',
        placeholder: 'Leave us a message...'
      }
    }
)
const firstNameValid = computed(
  () =>
    !usedOptions.value?.firstName?.required ||
    (firstName.value && usedOptions.value?.firstName?.required)
)
const lastNameValid = computed(
  () =>
    !usedOptions.value?.lastName?.required ||
    (lastName.value && usedOptions.value?.lastName?.required)
)
const emailValid = computed(
  () =>
    !usedOptions.value?.email?.required ||
    (email.value && regexEmail.test(email.value) && usedOptions.value?.email?.required)
)
const companyNameValid = computed(
  () =>
    !usedOptions.value?.companyName?.required ||
    (companyName.value && usedOptions.value?.companyName?.required)
)
const phoneNumberValid = computed(
  () =>
    !usedOptions.value?.phoneNumber?.required ||
    (phoneNumber.value &&
      regexPhoneNumber.test(phoneNumber.value) &&
      usedOptions.value?.phoneNumber?.required)
)
const messageValid = computed(
  () =>
    !usedOptions.value?.message?.required || (message.value && usedOptions.value?.message?.required)
)

const sendAvailable = computed(
  () =>
    firstNameValid.value &&
    lastNameValid.value &&
    emailValid.value &&
    companyNameValid.value &&
    phoneNumberValid.value &&
    messageValid.value
)

const sectionStyle = computed(() => ({
  color: getTxtColor(props.color, props.themeColor),
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
}))

/** METHODS */
const handleSubmit = () => {
  if (sendAvailable.value) {
    const datas = {}
    if (usedOptions.value?.firstName?.displayed) datas['firstName'] = firstName.value
    if (usedOptions.value?.lastName?.displayed) datas['lastName'] = lastName.value
    if (usedOptions.value?.email?.displayed) datas['email'] = email.value
    if (usedOptions.value?.companyName?.displayed) datas['companyName'] = companyName.value
    if (usedOptions.value?.phoneNumber?.displayed) datas['phoneNumber'] = phoneNumber.value
    if (usedOptions.value?.message?.displayed) datas['message'] = message.value
    emits('submit', datas)
  }
}
</script>
