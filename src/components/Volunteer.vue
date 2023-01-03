<template>
    <div v-show="show" class="container-2">
        <div class="star-path">
            <img src="../components/icons/star-path-edu.svg">
        </div>
        <div class="display-aboutme">
            <div class="list-aboutme list-aboutme-left">
                <div class="desc-aboutme desc-aboutme-left">
                    <p class="font-32-semibold title-aboutme-left">Udayana peduli</p>
                    <p class="font-24-medium major-aboutme-left">Dedicated myself in fundraising and mentoring victims of Mount Agung eruption</p>
                </div>
                <div class="star">
                    <img src="../components/icons/star-1.svg">
                </div>
                <div class="periode-aboutme periode-aboutme-right">
                    <p class="date-periode-aboutme">Sept 2017 - Nov 2017</p>
                </div>
            </div>
            <div class="list-aboutme list-aboutme-right">
                <div class="periode-aboutme periode-aboutme-left">
                    <p class="date-periode-aboutme">Sep 2017 - Jun 2018</p>
                </div>
                <div class="star">
                    <img src="../components/icons/star-2.svg">
                </div>
                <div class="desc-aboutme desc-aboutme-right">
                    <p class="font-32-semibold">Udayana Mengajar</p>
                    <p class="font-24-medium">Dedicated myself to improving the quality of educating in rural villages
                    </p>
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