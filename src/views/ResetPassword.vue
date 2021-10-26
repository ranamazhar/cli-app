<template>
	<div
		class="form-bg d-flex justify-content-center align-items-center vh-100"
	>
		<div class="container">
			<div class="row">
				<div
					class="
						form-wrapper
						col-11 col-sm-11 col-md-11 col-lg-10 col-xl-10
						mx-auto
						my-3
					"
				>
					<div
						class="
							row
							p-0 p-sm-0 p-md-3 p-lg-3 p-xl-3
							data-wrapper
							align-items-center
						"
					>
						<div
							class="
								col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6
								d-flex
								justify-content-center
								align-items-center
								flex-column
								d-none
								d-sm-none
								d-md-block
								d-lg-block
								d-xl-block
							"
						>
							<img
								src="@/assets/images/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
								alt="log-img"
								class="img-fluid"
							/>
						</div>
						<div
							class="
								col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6
								d-flex
								justify-content-center
								align-items-center
								flex-column
							"
						>
							<div class="row w-100">
								<div
									class="
										col-12
										d-flex
										justify-content-center
										align-items-center
										flex-column
									"
								>
									<span
										class="
											user-icon-hol
											mb-3
											d-flex
											justify-content-center
											align-items-center
											flex-column
										"
									>
										<router-link to="/" class="nav-link">
											<img
												src="@/assets/images/logo-light.png"
												alt="user icon"
										/></router-link>
									</span>
									<span class="form-type-title mb-3">
									Forgot Password
									</span>
								</div>
							</div>
							<div class="row w-100">
								<div class="col-12">
									<form
										class="w-100"
										action="/create-account"
										method="POST"
										@submit.prevent
									>
										<div
											class="input-group flex-column mb-3"
										>
											<!-- <label for="email" class="form-label mb-0"
								>Email</label
							> -->
											<input
												id="email"
												type="email"
												class="form-control w-100"
												placeholder="Email Address"
												v-model="FormValues.email"
												autocomplete="off"
												autocapitalize="off"
												autocorrect="off"
												spellcheck="false"
												required
											/>
										</div>
										

										<div class="row">
											<div class="col-12">
												<input
													type="submit"
													class="btn sign-in mb-3"
													value="Reset my password"
													@click="onLogin"
												/>
											</div>
										</div>

										
									
										
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "ResetPassword",

	data() {
		return {

			FormValues: {
				email: "",
				Password: "",
			},
		};
	},

	methods: {
		onLogin() {
			let form = this.FormValues;
			if (
				form.email === "" || 
				form.Password === "" ||
				form.ConfirmPassword === ""
			) {
				alert("Something went wrong");
			} else {
				// now we have to send the request to server to post the data and send email to this given email address.
				axios
					.post(
						"https://seersco-front-end.here/accounts/create",
						form
					)
					.then((response) => {
						alert("You are registered");
					})
					.catch((error) => {
						console.log('error',error);
						alert("Something went wrongs");
					});
				
			}
			// console.log(this.FormValues);
		},
	},
};
</script>

<style scoped>
body {
	font-family: "Poppins", sans-serif;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

.form-wrapper {
	overflow: hidden;
	background: white;
	border-radius: 7px;
	position: relative;
	-webkit-box-shadow: 0 5px 18px rgb(0 0 0 / 10%);
	-moz-box-shadow: 0 5px 18px rgba(0, 0, 0, 0.1);
	box-shadow: 0 5px 18px rgb(0 0 0 / 10%);
}
ul.social-media-links li a {
	box-shadow: 0 5px 18px rgb(0 0 0 / 10%);
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.form-wrapper .form-control {
	border-radius: 4px !important;
	border: 1px solid #9fafc1 !important;
	background-color: transparent !important;
	font-weight: 500;
	color: #9fafc1 !important;
}
.form-label {
	margin-bottom: 0 !important;
	color: #3b4754 !important;
	font-size: 12px !important;
	white-space: nowrap;
}
.bg-grey {
	background: #c9d3dd !important;
}
.btn {
	font-size: 14px;
	padding: 7px 15px;
	width: 100%;
	border-radius: 4px;
	text-align: center;
	white-space: nowrap;
}
.btn:hover {
	-webkit-box-shadow: 0 5px 18px rgb(0 0 0 / 10%);
	-moz-box-shadow: 0 5px 18px rgba(0, 0, 0, 0.1);
	box-shadow: 0 5px 18px rgb(0 0 0 / 10%);
	/* -webkit-transition: all ease .35s;
    -moz-transition: all ease .35s;
      -ms-transition: all ease .35s;
        -o-transition: all ease .35s;
          transition: all ease .35s;
	-webkit-transform: translateY(-5px);
	-moz-transform: translateY(-5px);
	-ms-transform: translateY(-5px);
	-o-transform: translateY(-5px);
	transform: translateY(-5px); */
}
.btn.sign-in {
	background: #29323d !important;
	color: #fff !important;
}
.btn.sign-in:hover {
	background: #4c5e73 !important;
}
.btn.sign-up {
	border: 1px solid #1180f1;
	border-radius: 30px;
	color: #1180f1 !important;
}
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
	box-shadow: 0 0 0 30px white inset !important;
	-webkit-box-shadow: 0 0 0 30px white inset !important;
}
.user-icon-hol {
	width: 70px;
	overflow: hidden;
}

.user-icon-hol .nav-link img {
	width: 100%;
	height: 100%;
}

.or-login-with,
.forget-pass,
.not-member {
	white-space: nowrap;
	color: #3b4754 !important;
	font-size: 14px !important;
}
.form-type-title {
	color: #3b4754 !important;
	font-size: 18px !important;
	font-weight: bold;
}
.forget-pass:hover,
.not-member:hover {
	text-decoration: underline !important;
}

form span {
	display: inline-block;
	color: #29323d !important;
}
.form-bg {
	background-image: url("../assets/images/form-background.svg");
	background-size: cover;
	background-position: right;
	background-repeat: no-repeat;
}
</style>