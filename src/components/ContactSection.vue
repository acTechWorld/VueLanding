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
              v-if="props.options?.firstName?.displayed"
              v-model="firstName"
              class="contactSection_firtName"
              name="firstName"
              :title="props.options?.firstName.title"
              :placeholder="props.options?.firstName.placeholder"
              :required="props.options?.firstName.required"
            />
            <FormInputText
              v-if="props.options?.lastName?.displayed"
              v-model="lastName"
              name="lastName"
              class="contactSection_lastName"
              :title="props.options?.lastName.title"
              :placeholder="props.options?.lastName.placeholder"
              :required="props.options?.lastName.required"
            />
          </div>
          <FormInputText
            v-if="props.options?.email?.displayed"
            v-model="email"
            name="email"
            class="contactSection_email"
            :title="props.options?.email.title"
            :placeholder="props.options?.email.placeholder"
            :required="props.options?.email.required"
            :status="email && !emailValid ? 'error' : 'default'"
          />
          <FormInputText
            v-if="props.options?.companyName?.displayed"
            v-model="companyName"
            class="contactSection_companyName"
            name="companyName"
            :title="props.options?.companyName.title"
            :placeholder="props.options?.companyName.placeholder"
            :required="props.options?.companyName.required"
          />
          <FormInputText
            v-if="props.options?.phoneNumber?.displayed"
            v-model="phoneNumber"
            class="contactSection_phoneNumber"
            name="phoneNumber"
            :title="props.options?.phoneNumber.title"
            :placeholder="props.options?.phoneNumber.placeholder"
            :required="props.options?.phoneNumber.required"
            :status="phoneNumber && !phoneNumberValid ? 'error' : 'default'"
          />
          <FormInputText
            v-if="props.options?.message?.displayed"
            v-model="message"
            class="contactSection_message"
            name="message"
            type="text"
            :title="props.options?.message.title"
            :placeholder="props.options?.message.placeholder"
            :required="props.options?.message.required"
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
  options: () => ({
    firstName: { displayed: true, required: true, title: 'First name', placeholder: 'First name' },
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
  }),
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
const firstNameValid = computed(
  () =>
    !props.options?.firstName?.required || (firstName.value && props.options?.firstName?.required)
)
const lastNameValid = computed(
  () => !props.options?.lastName?.required || (lastName.value && props.options?.lastName?.required)
)
const emailValid = computed(
  () =>
    !props.options?.email?.required ||
    (email.value && regexEmail.test(email.value) && props.options?.email?.required)
)
const companyNameValid = computed(
  () =>
    !props.options?.companyName?.required ||
    (companyName.value && props.options?.companyName?.required)
)
const phoneNumberValid = computed(
  () =>
    !props.options?.phoneNumber?.required ||
    (phoneNumber.value &&
      regexPhoneNumber.test(phoneNumber.value) &&
      props.options?.phoneNumber?.required)
)
const messageValid = computed(
  () => !props.options?.message?.required || (message.value && props.options?.message?.required)
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
    if (props.options?.firstName?.displayed) datas['firstName'] = firstName.value
    if (props.options?.lastName?.displayed) datas['lastName'] = lastName.value
    if (props.options?.email?.displayed) datas['email'] = email.value
    if (props.options?.companyName?.displayed) datas['companyName'] = companyName.value
    if (props.options?.phoneNumber?.displayed) datas['phoneNumber'] = phoneNumber.value
    if (props.options?.message?.displayed) datas['message'] = message.value
    emits('submit', datas)
  }
}
</script>
