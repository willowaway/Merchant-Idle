<script setup lang="ts">
import MonsterService from "@/services/MonsterService";
import { useMainStore } from "@/stores/main";
import type { Monster } from "merchant-idle-middleware";
import { onMounted, reactive } from "vue";
import gladeImg from "/assets/media/Icons/Glade.png";
import thornmereImg from "/assets/media/Icons/Thornmere.png";
import grimhollowImg from "/assets/media/Icons/Grimhollow.png";
import dunmireImg from "/assets/media/Icons/Dunmire.png";

const main = useMainStore();

const state = reactive<{
	gladeMonsters: Monster[];
	thornmereMonsters: Monster[];
	grimhollowMonsters: Monster[];
	dunmireMonsters: Monster[];
}>({
	gladeMonsters: [],
	thornmereMonsters: [],
	grimhollowMonsters: [],
	dunmireMonsters: [],
});

onMounted(async () => {
	const gladeMonsters = await MonsterService.getMonstersByZone("Glade");
	if (gladeMonsters.length > 0) {
		state.gladeMonsters = gladeMonsters;
	}
});
</script>

<template>
	<div class="content">
		<div class="row items-push">
			<div class="col-sm-12 col-lg-6">
				<button
					class="btn btn-lg btn-secondary d-flex justify-content-between align-items-center w-100"
					data-bs-toggle="collapse"
					data-bs-target="#gladeCollapse"
					aria-expanded="false"
				>
					<div>
						<img :src="gladeImg" alt="Glade" class="pe-2" />
						Glade
					</div>
					<span class="caret"></span>
				</button>
				<table id="gladeCollapse" class="collapse table fade">
					<colgroup>
						<col style="width: 64px" />
						<col />
						<col style="width: 128px" />
					</colgroup>
					<tbody>
						<tr
							v-for="monster in state.gladeMonsters"
							:key="monster.id"
						>
							<td>
								<img :src="monster.src" :alt="monster.name" />
							</td>
							<td>{{ monster.name }}</td>
							<td class="align-middle">
								<button class="btn btn-alt-danger w-100">
									Fight
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="col-sm-12 col-lg-6">
				<button
					class="btn btn-lg btn-secondary d-flex justify-content-between align-items-center w-100"
					data-bs-toggle="collapse"
					data-bs-target="#thornmereCollapse"
					aria-expanded="false"
				>
					<div>
						<img :src="thornmereImg" alt="Thornmere" class="pe-2" />
						Thornmere
					</div>
					<span class="caret"></span>
				</button>
				<table id="thornmereCollapse" class="collapse table fade">
					<colgroup>
						<col style="width: 64px" />
						<col />
						<col style="width: 128px" />
					</colgroup>
					<tbody>
						<tr
							v-if="state.thornmereMonsters.length"
							v-for="monster in state.thornmereMonsters"
							:key="monster.id"
						>
							<td>
								<img :src="monster.src" :alt="monster.name" />
							</td>
							<td>{{ monster.name }}</td>
							<td class="align-middle">
								<button class="btn btn-alt-danger w-100">
									Fight
								</button>
							</td>
						</tr>
						<tr v-else>
							Coming soon...
						</tr>
					</tbody>
				</table>
			</div>
			<div class="col-sm-12 col-lg-6">
				<button
					class="btn btn-lg btn-secondary d-flex justify-content-between align-items-center w-100"
					data-bs-toggle="collapse"
					data-bs-target="#grimhollowCollapse"
					aria-expanded="false"
				>
					<div>
						<img
							:src="grimhollowImg"
							alt="Grimhollow"
							class="pe-2"
						/>
						Grimhollow
					</div>
					<span class="caret"></span>
				</button>
				<table id="grimhollowCollapse" class="collapse table fade">
					<colgroup>
						<col style="width: 64px" />
						<col />
						<col style="width: 128px" />
					</colgroup>
					<tbody>
						<tr
							v-if="state.grimhollowMonsters.length"
							v-for="monster in state.grimhollowMonsters"
							:key="monster.id"
						>
							<td>
								<img :src="monster.src" :alt="monster.name" />
							</td>
							<td>{{ monster.name }}</td>
							<td class="align-middle">
								<button class="btn btn-alt-danger w-100">
									Fight
								</button>
							</td>
						</tr>
						<tr v-else>
							Coming soon...
						</tr>
					</tbody>
				</table>
			</div>
			<div class="col-sm-12 col-lg-6">
				<button
					class="btn btn-lg btn-secondary d-flex justify-content-between align-items-center w-100"
					data-bs-toggle="collapse"
					data-bs-target="#dunmireCollapse"
					aria-expanded="false"
				>
					<div>
						<img :src="dunmireImg" alt="Dunmire" class="pe-2" />
						Dunmire
					</div>
					<span class="caret"></span>
				</button>
				<table id="dunmireCollapse" class="collapse table fade">
					<colgroup>
						<col style="width: 64px" />
						<col />
						<col style="width: 128px" />
					</colgroup>
					<tbody>
						<tr
							v-if="state.dunmireMonsters.length"
							v-for="monster in state.dunmireMonsters"
							:key="monster.id"
						>
							<td>
								<img :src="monster.src" :alt="monster.name" />
							</td>
							<td>{{ monster.name }}</td>
							<td class="align-middle">
								<button class="btn btn-alt-danger w-100">
									Fight
								</button>
							</td>
						</tr>
						<tr v-else>
							Coming soon...
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
