<template>
  <div v-if="readOnly" :id="properties.name + '-field'">
    {{ model }}
  </div>
  <q-input v-else
    :for="properties.name + '-field'"
    type="number"
    v-model.number="model"
    :label="label"
    clearable
    @blur="onChanged"
    @input="onChanged"
    :disabled="disabled"
    :error="hasError"
    :error-message="errorLabel"
    bottom-slot>
    <!-- Helper -->
    <template v-if="helper" v-slot:hint>
      <span v-html="helper"></span>
    </template>
  </q-input>
</template>

<script>
import mixins from '../../mixins'

export default {
  name: 'k-number-field',
  mixins: [mixins.baseField]
}
</script>
