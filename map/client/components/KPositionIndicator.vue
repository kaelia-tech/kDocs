<template>
  <div class="row items-center no-padding">
    <q-icon name="las la-crosshairs" round flat dense size="sm" class="text-grey-7" />
    <span class="q-pl-md q-pr-md">
      {{ position }}
    </span>
    <k-tool-bar v-if="!isPicking" :actions="actions" color="primary" dense />
  </div>
</template>

<script>
import formatcoords from 'formatcoords'
import { copyToClipboard } from 'quasar'

export default {
  name: 'k-position-indicator',
  inject: ['kActivity'],
  data () {
    return {
      position: '',
      format: this.$store.get('locationFormat') || 'FFf',
      actions: [],
      isPicking: false
    }
  },
  methods: {
    pick () {
      const pick = async (options, event) => {
        this.isPicking = false
        this.kActivity.$off('mousemove', this.onMoved) 
        this.kActivity.unsetCursor('probe-cursor')
      }
      this.kActivity.$on('mousemove', this.onMoved)
      this.kActivity.setCursor('probe-cursor')
      this.kActivity.$once('click', pick)
      this.isPicking = true
    },
    async onCopy () {
      try {
        await copyToClipboard(this.position)
        this.$toast({ type: 'positive', message: this.$t('KPositionIndicator.POSITION_COPIED') })
      } catch (_) {
        this.$toast({ type: 'error', message: this.$t('KPositionIndicator.CANNOT_COPY_POSITION') })
      }
    },
    onClear () {
      this.position = this.$t('KPositionIndicator.PLACEHOLDER')
      this.pick()
    },
    onMoved (options, event) {
      if (event.latlng) this.position = formatcoords([event.latlng.lat, event.latlng.lng]).format(this.format)
    }
  },
  created () {
    // Load the required components
    this.$options.components['k-tool-bar'] = this.$load('layout/KToolBar')
    // Setup the actions
    this.actions = [
      { name: 'copy', icon: 'las la-copy', label: this.$t('KPositionIndicator.COPY'), handler: this.onCopy },
      { name: 'clear', icon: 'cancel', label: this.$t('KPositionIndicator.CLEAR'), handler: this.onClear }
    ]
  },
  mounted () {
    this.onClear()
  }
}
</script>