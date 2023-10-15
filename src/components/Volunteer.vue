<template>
    <div v-show="show" class="container-2">
        <div class="star-path">
            <img src="../components/icons/path-languages.svg">
        </div>
        <div class="display-aboutme">
            <div class="list-aboutme">
                <div class="container-desc-left">
                    <div class="desc-aboutme desc-aboutme-left">
                        <div class="font-18-semibold">Udayana peduli</div>
                        <div class="font-16-medium">Dedicated myself in fundraising and mentoring victims of Mount Agung eruption</div>
                    </div>
                </div>
                <div class="star">
                    <img src="../components/icons/star-1.svg">
                </div>
                <div class="container-desc-right">
                    <div class="periode-aboutme periode-aboutme-right">
                        <div class="date-periode-aboutme">Sept 2017 - Nov 2017</div>
                    </div>
                </div>
            </div>
            <div class="list-aboutme list-aboutme-right">
                <div class="container-desc-left">
                    <div class="periode-aboutme periode-aboutme-left">
                        <div class="date-periode-aboutme">Sep 2017 - Jun 2018</div>
                    </div>
                </div>
                <div class="star">
                    <img src="../components/icons/star-2.svg">
                </div>
                <div class="container-desc-right">
                    <div class="desc-aboutme desc-aboutme-right">
                        <div class="font-18-semibold">Udayana Mengajar</div>
                        <div class="font-16-medium">Dedicated myself to improving the quality of educating in rural villages
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