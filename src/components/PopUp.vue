<template>
    <lord-icon type="button" class="mail" src="https://cdn.lordicon.com/pdpnqfoe.json" trigger="hover"
        colors="primary:#426e86,secondary:#f8f1e5" style="width:100px;height:100px" data-bs-toggle="modal"
        data-bs-target="#myModal">
    </lord-icon>

    <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="group-popup d-flex justify-content-center w-100" id="myPopup">
                    <div class="popup-style">
                        <div class="container-popup">
                            <img class="img-contact-me" src="./icons/contact-me.svg">
                            <div class="form-close">
                                <form ref="form" @submit.prevent="sendEmail">
                                    <div class="group">
                                        <div class="group-half">
                                            <div class="form-half">
                                                <label class="tag">Name</label>
                                                <input class="form-control" type="text" v-model="name" id="name" name="name">
                                            </div>
                                            <div class="form-half">
                                                <label class="tag">Email</label>
                                                <input class="form-control" type="email" v-model="email" id="email" name="email">
                                            </div>
                                        </div>
                                        <div class="group-full-sub">
                                            <label class="tag">Subject</label>
                                            <input class="form-control" type="text" v-model="subject" id="subject"
                                                name="subject">
                                        </div>
                                        <div class="group-full-mes">
                                            <label class="tag">Message</label>
                                            <input class="form-control" type="text" v-model="message" id="message"
                                                name="message">
                                        </div>
                                        <div>
                                            <button class="button btn-send" type="submit" ref="Close"
                                                data-bs-dismiss="modal">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                                <div class="close">
                                    <img type="button" data-bs-dismiss="modal" class="close-img"
                                        src="./icons/close.svg">
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

import emailjs from 'emailjs-com';

export default {
    name: 'ContactUs',
    data() {
        return {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    },
    methods: {
        sendEmail() {
            emailjs.sendForm(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_TEMPLATE_ID, this.$refs.form, process.env.VUE_APP_PUBLIC_KEY)
                .then((result) => {
                    // this.$refs.Close.click();
                    console.log('SUCCESS!', result.text);
                    // this.$bvModal.hide('#myModal')
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
            // Reset form field
            this.name = ''
            this.email = ''
            this.subject = ''
            this.message = ''
        }
    }
}
</script>