<template>
  <div>
    <div v-if="hasTopSection" class="flex gap-5 py-10 px-5 border-b">
      <div
        v-if="hasTopFirstSection"
        class="w-1/3 flex flex-col gap-5"
        :class="[hasTopSecondSection ? 'w-1/3' : 'w-full']"
      >
        <div v-if="hasCompanyInfos">
          <img v-if="props.topSection?.companyLogo" :src="props.topSection.companyLogo" />
          <div v-if="props.topSection?.companyName" class="font-semibold text-2xl">
            {{ props.topSection.companyName }}
          </div>
        </div>
        <div v-if="props.topSection?.text">{{ props.topSection.text }}</div>
      </div>
      <div
        v-if="hasTopSecondSection"
        class="grid gap-8"
        :class="[
          hasTopFirstSection
            ? 'grid-cols-[repeat(4,1fr)] w-2/3'
            : 'grid-cols-[repeat(6,1fr)] w-full'
        ]"
      >
        <div
          v-for="category in pagesCategories"
          :key="`pages_${category}`"
          class="flex flex-col gap-3 text-sm"
        >
          <div class="mb-1 cursor-pointer">{{ category }}</div>
          <div
            v-for="page in props.topSection?.pages?.[category]"
            :key="`pages_${category}_${page}`"
            class="font-semibold cursor-pointer"
          >
            {{ page }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="hasBottomSection" class="py-10 px-5 flex justify-between">
      <div v-if="props.bottomSection?.copyrights" class="text-sm">
        {{ props.bottomSection.copyrights }}
      </div>
      <div v-if="hasSocialLinks" class="gap-3 flex">
        <FontAwesomeIcon
          v-for="socialLink in props.bottomSection?.socialLinks"
          :key="`socialLink_${socialLink}`"
          :icon="getSocialLinkIcon(socialLink.type)"
          size="xl"
          @click="goToSocialLink(socialLink.url)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SocialLinkType } from '@/utils/types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    topSection?: {
      pages?: { [category: string]: string[] }
      companyLogo?: string
      companyName?: string
      text?: string
    }
    bottomSection?: {
      socialLinks?: {
        type: SocialLinkType
        url: string
      }[]
      copyrights?: string
    }
  }>(),
  {
    topSection: undefined,
    bottomSection: undefined
  }
)

/** COMPUTED */
const hasTopSection = computed(() => hasTopFirstSection.value || hasTopSecondSection)

const hasTopFirstSection = computed(
  () => props.topSection && (hasCompanyInfos.value || props.topSection.text)
)

const hasTopSecondSection = computed(() => pagesCategories.value.length > 0)

const hasCompanyInfos = computed(
  () => props.topSection && (props.topSection.companyLogo || props.topSection?.companyName)
)

const hasBottomSection = computed(
  () => props.bottomSection && (hasSocialLinks.value || props.bottomSection.copyrights)
)

const hasSocialLinks = computed(
  () =>
    props.bottomSection &&
    props.bottomSection.socialLinks &&
    props.bottomSection.socialLinks.length > 0
)

const pagesCategories = computed(() =>
  props.topSection?.pages ? Object.keys(props.topSection.pages) : []
)

/** METHODS */
const getSocialLinkIcon = (socialLinkType: string) => {
  return 'fa-brands fa-github'
}

const goToSocialLink = (socialLinkUrl: string) => {
  window.location.href = socialLinkUrl
}
</script>
