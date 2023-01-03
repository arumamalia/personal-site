<template>
    <div v-show="show" class="container-2">
        <div class="star-path">
            <img src="../components/icons/star-path-edu.svg">
        </div>
        <div class="display-aboutme">
            <div class="list-aboutme list-aboutme-left">
                <div class="desc-aboutme desc-aboutme-left">
                    <p class="font-24-semibold title-aboutme-left">Glints Academy X Binar Academy</p>
                    <p class="font-32-semibold major-aboutme-left">Back End Developer</p>
                </div>
                <div class="star">
                    <img src="../components/icons/star-1.svg">
                </div>
                <div class="periode-aboutme periode-aboutme-right">
                    <p class="date-periode-aboutme">Mar 2021 - Jun 2021</p>
                </div>
            </div>
            <div class="list-aboutme list-aboutme-right">
                <div class="periode-aboutme periode-aboutme-left">
                    <p class="date-periode-aboutme">Jul 2016 - Jul 2020</p>
                </div>
                <div class="star">
                    <img src="../components/icons/star-2.svg">
                </div>
                <div class="desc-aboutme desc-aboutme-right">
                    <p class="font-24-semibold">Udayana University</p>
                    <div class="desc-univ">
                        <p class="font-32-semibold">Mechanical Engineering</p>
                        <p class="gpa">GPA: 3.65</p>
                        <ul class="list-activities">
                            <li>Tresurer at Student Association of Mechanical Engineering</li>
                            <li>Photography Staff at Udayana Focus</li>
                        </ul>
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