<script setup lang="ts">
import { reactive, computed } from "vue";
import { useTemplateStore } from "@/stores/template";
import router from "@/router/router";

// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import useVuelidate from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
import { useMainStore } from "@/stores/main";
import UserService from "@/services/UserService";

// Main store and Router
const template = useTemplateStore();
const main = useMainStore();

// Input state variables
const state = reactive({
	email: null,
	password: null,
	errorMessage: "",
});

// Validation rules
const rules = computed(() => {
	return {
		email: {
			required,
			email,
			minLength: minLength(3),
		},
		password: {
			required,
			minLength: minLength(5),
		},
	};
});

// Use vuelidate
const v$ = useVuelidate(rules, state);

// On form submission
async function onSubmit() {
	const result = await v$.value.$validate();

	if (!result || !state.email || !state.password) {
		// notify user form is invalid
		return;
	}

	UserService.signInUser(state.email, state.password).then(
		(signedInUserResponse) => {
			if (typeof signedInUserResponse === "string") {
				state.errorMessage = signedInUserResponse;
			} else {
				main.setUser(signedInUserResponse);
				router.push("stash");
			}
		}
	);
}
</script>

<template>
	<!-- Page Content -->
	<div class="hero-static d-flex align-items-center">
		<div class="content">
			<div class="row justify-content-center push">
				<div class="col-md-8 col-lg-6 col-xl-4">
					<!-- Sign In Block -->
					<BaseBlock title="Sign In" class="mb-0">
						<template #options>
							<RouterLink
								:to="{ name: 'reminder' }"
								class="btn-block-option fs-sm"
								>Forgot Password?</RouterLink
							>
							<RouterLink
								:to="{ name: 'signup' }"
								class="btn-block-option"
							>
								<i class="fa fa-user-plus"></i>
							</RouterLink>
						</template>

						<div class="p-sm-3 px-lg-4 px-xxl-5 py-lg-5">
							<h1 class="h2 mb-1"><b>Merchant</b> Idle</h1>
							<p class="fw-medium text-muted">
								Welcome, please login.
							</p>

							<!-- Sign In Form -->
							<form @submit.prevent="onSubmit">
								<div>
									<div class="mb-4">
										<input
											type="text"
											class="form-control form-control-alt form-control-lg"
											id="login-email"
											name="login-email"
											placeholder="Email"
											:class="{
												'is-invalid':
													v$.email.$errors.length,
											}"
											v-model="state.email"
											@blur="v$.email.$touch"
										/>
										<div
											v-if="v$.email.$errors.length"
											class="invalid-feedback animated fadeIn"
										>
											Please enter your email
										</div>
									</div>
									<div class="mb-4">
										<input
											type="password"
											class="form-control form-control-alt form-control-lg"
											id="login-password"
											name="login-password"
											placeholder="Password"
											:class="{
												'is-invalid':
													v$.password.$errors.length,
											}"
											v-model="state.password"
											@blur="v$.password.$touch"
										/>
										<div
											v-if="v$.password.$errors.length"
											class="invalid-feedback animated fadeIn"
										>
											Please enter your password
										</div>
									</div>
									<div class="mb-4">
										<div class="form-check">
											<input
												class="form-check-input"
												type="checkbox"
												value=""
												id="login-remember"
												name="login-remember"
											/>
											<label
												class="form-check-label"
												for="login-remember"
												>Remember Me</label
											>
										</div>
									</div>
								</div>
								<div class="mb-4">
									<button
										type="submit"
										class="btn w-100 btn-alt-primary"
									>
										<i
											class="fa fa-fw fa-sign-in-alt me-1 opacity-50"
										></i>
										Sign In
									</button>
									<Transition name="fade">
										<span
											v-if="state.errorMessage"
											class="text-warning"
											>{{ state.errorMessage }}</span
										>
									</Transition>
								</div>
							</form>
							<!-- END Sign In Form -->
						</div>
					</BaseBlock>
					<!-- END Sign In Block -->
				</div>
			</div>
			<div class="fs-sm text-muted text-center">
				<strong>{{
					template.app.name + " " + template.app.version
				}}</strong>
				&copy;
				{{ template.app.copyright }}
			</div>
		</div>
	</div>
	<!-- END Page Content -->
</template>
