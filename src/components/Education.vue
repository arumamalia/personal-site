<template>
    <div v-show="show">
        <div class="container-2">
            <div class="star-path">
                <img src="../components/icons/path-education.svg">
            </div>
            <div class="display-aboutme">
                <div class="list-aboutme">
                    <div class="container-desc-left">
                        <div class="desc-aboutme desc-aboutme-right">
                            <div class="font-16-semibold">Glints Academy X Binar Academy</div>
                            <div class="font-18-semibold">Back End Developer</div>
                            <ul class="list-activities">
                                <li>Learning the fundamentals of programming (Javascript, Data Structures, Relational Database, Authentication, Unit Testing, CI/CD, API Security & Documentation).</li>
                                <li>Developing mini project (Movie review app) and final project (Photo galleries app) as a team.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="star">
                        <img src="../components/icons/star-1.svg">
                    </div>
                    <div class="container-desc-right">
                        <div class="periode-aboutme periode-aboutme-right">
                            <div class="date-periode-aboutme">Mar 2021 - Jun 2021</div>
                        </div>
                    </div>
                </div>
                <div class="list-aboutme">
                    <div class="container-desc-left">
                        <div class="periode-aboutme periode-aboutme-left">
                            <div class="date-periode-aboutme">Jul 2016 - Jul 2020</div>
                        </div>
                    </div>
                    <div class="star">
                        <img src="../components/icons/star-2.svg">
                    </div>
                    <div class="container-desc-right">
                        <div class="desc-aboutme desc-aboutme-right">
                            <div class="font-16-semibold title-aboutme-right">Udayana University</div>
                            <div class="desc-univ">
                                <div class="font-18-semibold">Mechanical Engineering</div>
                                <div class="gpa">GPA: 3.65</div>
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