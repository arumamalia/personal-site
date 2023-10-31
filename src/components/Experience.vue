<template>
    <div v-show="show">
        <div class="container-2">
            <div class="star-path path-exp">
                <img src="../components/icons/path-experience.svg">
            </div>
            <div class="display-aboutme">
                <div class="list-aboutme">
                    <div class="container-desc-left">
                        <div class="periode-aboutme periode-aboutme-left">
                            <div class="date-periode-aboutme">Jul 2021 - Present</div>
                        </div>
                    </div>
                    <div class="star">
                        <img src="../components/icons/star-3.svg">
                    </div>
                    <div class="container-desc-right">
                        <div class="desc-aboutme desc-aboutme-right">
                            <div class="font-16-semibold title-aboutme-right">PT. KB Finansia Multi Finance</div>
                            <div class="desc-univ">
                                <div class="font-18-semibold">Front End Developer</div>
                                <ul class="list-activities">
                                    <li>Learning new programming languages such as CSS, HTML, jQuery, PHP, et cetera</li>
                                    <li>Implementing my new skills to the projects</li>
                                    <li>Maintaining the existing website</li>
                                    <li>Improving company website due to the increasing traffic using updated technologies</li>
                                    <li>Implementing query of database SQL on my work</li>
                                    <li>Developing website according to the requirements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list-aboutme">
                    <div class="container-desc-left">
                        <div class="desc-aboutme desc-aboutme-right">
                            <div class="font-16-semibold title-aboutme-right">Glints Academy - Final Project (Photo Galleries App)</div>
                            <div class="desc-univ">
                                <div class="font-18-semibold">Back End Developer</div>
                                <ul class="list-activities">
                                    <li>Experienced on sequelize</li>
                                    <li>Implementing file upload into sequelize</li>
                                    <li>Handling privacy on collection</li>
                                    <li>Experienced on image compress and how to download collection in zip</li>
                                    <li>Experienced on using Amazon S3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="star">
                        <img src="../components/icons/star-1.svg">
                    </div>
                    <div class="container-desc-right">
                        <div class="periode-aboutme periode-aboutme-right">
                            <div class="date-periode-aboutme">Apr 2021 - Jun 2021</div>
                        </div>
                    </div>
                </div>
                <div class="list-aboutme">
                    <div class="container-desc-left">
                        <div class="periode-aboutme periode-aboutme-left">
                            <div class="date-periode-aboutme">Apr 2021 - Apr 2021</div>
                        </div>
                    </div>
                    <div class="star">
                        <img src="../components/icons/star-3.svg">
                    </div>
                    <div class="container-desc-right">
                        <div class="desc-aboutme desc-aboutme-right">
                            <div class="font-16-semibold title-aboutme-right">Glints Academy - Mini Project (Movie Review App)</div>
                            <div class="desc-univ">
                                <div class="font-18-semibold">Back End Developer</div>
                                <ul class="list-activities">
                                    <li>Experienced on Mongoose</li>
                                    <li>Handling uploading image</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: [
        "show"
    ]
}
</script>