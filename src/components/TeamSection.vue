<template>
  <div
    class="teamSection text-center flex flex-col gap-5 py-10 sm:py-20 px-5"
    :style="sectionStyle"
  >
    <div
      v-if="props.title"
      class="teamSection_title text-3xl md:text-4xl font-semibold max-w-[800px] mx-auto"
    >
      {{ props.title }}
    </div>
    <div
      v-if="props.subtitle"
      class="teamSection_subtitle max-w-[800px] mx-auto text-lg md:text-xl"
    >
      {{ props.subtitle }}
    </div>
    <div
      class="teamSection_teamMembers grid grid-cols-[repeat(2,1fr)] sm:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] gap-x-5 gap-y-10 sm:gap-y-[50px] mt-5 sm:mt-10"
    >
      <component
        :is="componentTeamMember"
        v-for="(teamMember, idx) in props.teamMembers"
        :key="`team_member_${idx}`"
        class="teamSection_teamMember flex flex-col items-center"
        :class="{ 'cursor-pointer': props.membersClickable }"
        @click="handleClickMember(teamMember)"
      >
        <img
          v-if="teamMember.img"
          :src="teamMember.img"
          class="teamSection_teamMember_img w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] object-cover rounded-full mb-3"
        />
        <div v-if="teamMember.name" class="teamSection_teamMember_name font-semibold">
          {{ teamMember.name }}
        </div>
        <div v-if="teamMember.description" class="teamSection_teamMember_description">
          {{ teamMember.description }}
        </div>
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
import ScrollTransitionContainer from '@/commons/ScrollTransitionContainer.vue'
import type { TeamMember, TeamSectionType } from '@/types/types'
import { getBgColor, getTxtColor } from '@/utils/utils'
import { computed, h } from 'vue'

const props = withDefaults(defineProps<TeamSectionType>(), {
  title: undefined,
  subtitle: undefined,
  teamMembers: () => [],
  bgColor: undefined,
  color: undefined,
  themeColor: undefined,
  animated: true,
  membersClickable: true
})

const emits = defineEmits(['clickMember'])

/** COMPUTED */
const sectionStyle = computed(() => ({
  color: getTxtColor(props.color, props.themeColor),
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
}))

const componentTeamMember = computed(() =>
  props.animated ? h(ScrollTransitionContainer) : h('div')
)

/** METHODS */
const handleClickMember = (teamMember: TeamMember) => {
  if (props.membersClickable) {
    emits('clickMember', teamMember)
  }
}
</script>
