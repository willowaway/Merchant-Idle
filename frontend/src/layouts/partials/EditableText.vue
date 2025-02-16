<template>
	<div
		class="w-100 h-100 align-content-center"
		v-if="!isEditing"
		@click="enableEdit"
	>
		{{ modelValue }}
	</div>
	<input
		v-else
		type="text"
		class="form-control form-control-alt w-100 h-100"
		v-model="localText"
		@blur="blurEdit"
		@keyup.enter="disableEdit"
		ref="inputField"
	/>
</template>

<script setup lang="ts">
import { ref, onMounted, withDefaults, watch, nextTick } from "vue";

const props = withDefaults(
	defineProps<{
		modelValue: any;
		onSave: Function;
	}>(),
	{
		text: "",
		onSave: () => {},
	}
);

const emit = defineEmits<{
	(e: "update:modelValue", value: any): void;
}>();

const isEditing = ref(false);
const localText = ref(props.modelValue);
const inputField = ref<HTMLInputElement | null | undefined>(null);

const enableEdit = () => {
	isEditing.value = true;
	localText.value = props.modelValue; // Reset to original value if editing is re-enabled without saving

	nextTick(() => {
		inputField.value?.focus();
	});
};

const disableEdit = () => {
	isEditing.value = false;
	if (localText.value !== props.modelValue && localText.value) {
		emit("update:modelValue", localText.value);
		props.onSave(localText.value);
	}
};

const blurEdit = () => {
	if (isEditing.value) {
		isEditing.value = false;
		if (localText.value !== props.modelValue) {
			emit("update:modelValue", localText.value);
			props.onSave(localText.value);
		}
	}
};
</script>
