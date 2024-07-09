<template>
  <div
    class="duration-300 transition-all flex flex-col"
    :class="[displayMobileDropdown ? 'h-[100vh] max-h-[100vh]' : 'h-14 max-h-14']"
  >
    <div
      class="flex gap-10 font-semibold h-14 px-4"
      :style="sectionStyle"
      :class="{ 'sticky top-0': props.sticky }"
    >
      <div
        v-if="props.companyLogo || props.companyName"
        class="flex gap-2 items-center cursor-pointer"
      >
        <img v-if="props.companyLogo" :src="props.companyLogo" class="h-full" />
        <div v-if="props.companyName">
          {{ props.companyName }}
        </div>
      </div>
      <div v-if="props.menuItems && props.menuItems.length > 0" class="flex">
        <div
          v-for="(menuItem, idx) in props.menuItems"
          :key="`menuItem_${idx}`"
          class="px-2 items-center hidden md:flex"
        >
          <div v-if="menuItem.category" class="items-center flex h-full">
            <DropdownComponent
              v-if="menuItem.subMenuItems && menuItem.subMenuItems.length > 0"
              class="group"
            >
              <template #header>
                {{ menuItem.category }}
                <FontAwesomeIcon
                  icon="chevron-down"
                  class="ml-1 duration-300 group-hover:rotate-180"
                  size="sm"
                />
              </template>
              <template #content>
                <div
                  v-for="(subMenuItem, idxSubMenu) in menuItem.subMenuItems"
                  :key="`menuItem_${idx}_${idxSubMenu}`"
                  class="py-2 pl-4 pr-10 flex items-center group/sub hover:bg-[linear-gradient(rgb(0_0_0/5%)_0_0)] gap-2"
                  :class="[
                    subMenuItem.icon ? 'pr-6' : 'pr-4',
                    menuItem.large ? 'w-[250px]' : 'w-[200px]'
                  ]"
                  :style="subMenuItemStyle(subMenuItem)"
                >
                  <img
                    v-if="subMenuItem.img && menuItem.large"
                    :src="subMenuItem.img"
                    class="h-8"
                  />
                  <div class="flex flex-col gap-1">
                    <div class="font-medium group-hover/sub:font-semibold">
                      {{ subMenuItem.label }}
                    </div>
                    <div v-if="subMenuItem.subtitle" class="text-sm line-clamp-2">
                      {{ subMenuItem.subtitle }}
                    </div>
                  </div>
                  <FontAwesomeIcon
                    v-if="subMenuItem.icon"
                    class="opacity-0 group-hover/sub:opacity-100 ml-auto group-hover/sub:translate-x-2 transition-all duration-300"
                    :icon="subMenuItem.icon"
                  />
                </div>
              </template>
            </DropdownComponent>
          </div>
          <div v-else class="cursor-pointer">
            {{ menuItem.label }}
          </div>
        </div>
      </div>
      <div class="md:hidden ml-auto self-center cursor-pointer grid">
        <FontAwesomeIcon
          size="lg"
          icon="bars"
          class="transition-all duration-300 col-start-1 row-start-1"
          :class="
            displayMobileDropdown ? 'opacity-0 scale-50 invisible' : 'opacity-100 scale-100 visible'
          "
          @click="displayMobileDropdown = true"
        />
        <FontAwesomeIcon
          size="lg"
          icon="xmark"
          class="transition-all duration-300 col-start-1 row-start-1"
          :class="
            displayMobileDropdown ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-50 invisible'
          "
          @click="displayMobileDropdown = false"
        />
      </div>
    </div>
    <div
      class="flex-1 md:hidden bg-bg-secondary transition-all duration-300"
      :class="[displayMobileDropdown ? 'opacity-100' : 'opacity-0']"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { HeaderSectionType, HeaderSubMenuItemType } from '@/types/types'
import DropdownComponent from '@/commons/DropdownComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { getBgColor, getTxtColor } from '@/utils/utils'
import { computed, ref } from 'vue'
const props = withDefaults(defineProps<HeaderSectionType>(), {
  companyLogo: undefined,
  companyName: undefined,
  menuItems: () => [],
  color: undefined,
  themeColor: undefined,
  bgColor: undefined,
  sticky: false
})

const displayMobileDropdown = ref(false)

/** COMPUTED **/
const sectionStyle = computed(() => ({
  color: getTxtColor(props.color, props.themeColor),
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
}))

/** METHODS **/
const subMenuItemStyle = (subMenuItem: HeaderSubMenuItemType) => ({
  color: getTxtColor(subMenuItem.color, subMenuItem.themeColor),
  backgroundColor: getBgColor(subMenuItem.bgColor, subMenuItem.themeColor)
})
</script>
