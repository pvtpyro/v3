<template>
	<v-container fluid>

		<v-tabs show-arrows slider-color="accent">
			<v-tab>Personal</v-tab>
			<v-tab>Enrollments</v-tab>
			<v-tab>Contacts</v-tab>
			<v-tab>Services</v-tab>
			<v-tab>Notes &amp; Issues</v-tab>
		</v-tabs>

		<v-card class="my-3">
			<v-card-title>Personal</v-card-title>
			<v-card-text class="pb-10">
				<v-row>
					<v-col cols="12" md="2">
						<v-img alt="Logo" class="mx-auto" contain width="100" src="../assets/img/logo.png" transition="scale-transition" />
					</v-col>
					<v-col cols="12" md="10">
						<v-row>
							<v-col cols="12" md="4">
								<v-text-field label="First Name" dense hide-details=""></v-text-field>
							</v-col>
							<v-col cols="12" md="4">
								<v-text-field label="Middle Name" dense hide-details=""></v-text-field>
							</v-col>
							<v-col cols="12" md="4">
								<v-text-field label="Last Name" dense hide-details=""></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" md="4">
								<v-text-field label="Gender" dense hide-details=""></v-text-field>
							</v-col>
							<v-col cols="12" md="4">
								<v-text-field label="DOB" dense hide-details=""></v-text-field>
							</v-col>
							<v-col cols="12" md="4">
								<v-text-field label="Tracking ID" dense hide-details=""></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" md="4">
								<v-text-field label="Ethnicity" dense hide-details=""></v-text-field>
							</v-col>
							<v-col cols="12" md="4">
								<v-text-field label="Family Language" dense hide-details=""></v-text-field>
							</v-col>
							<v-col cols="12" md="4">
								<v-text-field label="Client Language" dense hide-details=""></v-text-field>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>

		<v-card class="my-3">
			<v-card-title>Contacts</v-card-title>
			<v-card-text>
				<v-simple-table class="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Main Phone</th>
							<th>City</th>
							<th>Legal Guardian</th>
							<th>Type</th>
							<th>Relation</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								Jane Doe
							</td>
							<td>
								559-555-5555
							</td>
							<td>
								Fresno
							</td>
							<td>
								Yes
							</td>
							<td>
								Parent/Guardian
							</td>
							<td>
								Mother
							</td>
						</tr>
					</tbody>
				</v-simple-table>
			</v-card-text>
		</v-card>

		<v-row class="my-3">
			<v-col cols="12" md="8">
				<v-card>
					<v-card-title>Address Information</v-card-title>
					<v-card-text>
						<v-row>
							<v-col cols="12" md="6">
								<v-text-field label="First Name" dense hide-details=""></v-text-field>
							</v-col>
							<v-col cols="12" md="6">
								<v-text-field label="Last Name" dense hide-details=""></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" md="6">
								<v-text-field label="Address" dense hide-details=""></v-text-field>
							</v-col>
							<v-col cols="12" md="6">
								<v-text-field label="City" dense hide-details=""></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" md="6">
								<v-text-field label="Apartment #" dense hide-details=""></v-text-field>
							</v-col>
							<v-col cols="12" md="3">
								<v-text-field label="State" dense hide-details=""></v-text-field>
							</v-col>
							<v-col cols="12" md="3">
								<v-text-field label="Zip" dense hide-details=""></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" md="6">
								<v-text-field label="Email" dense hide-details=""></v-text-field>
							</v-col>
							<v-col cols="12" md="6">
								<v-text-field label="Web Address" dense hide-details=""></v-text-field>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-col>
			
			<v-col cols="12" md="4">
				<v-card>
					<v-card-title>Notes</v-card-title>
					<v-card-text>
						<v-text-field label="Notes" dense hide-details=""></v-text-field>
					</v-card-text>
				</v-card>
			</v-col>
			

		</v-row>

	</v-container>
</template>

<script>
	export default {
		name: "Home",

		data: () => ({}),
	};
</script>
