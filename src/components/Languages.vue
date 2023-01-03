<template>
    <div v-show="show" class="container-2">
        <div class="star-path">
            <img src="../components/icons/path-languages.svg">
        </div>
        <div class="display-languages">
            <div class="list-aboutme list-languanges-right">
                <div class="star">
                    <img src="../components/icons/star-2.svg">
                </div>
                <div class="desc-aboutme desc-aboutme-right">
                    <p class="font-32-semibold">English - Upper Intermediate</p>
                </div>
            </div>
            <div class="list-aboutme list-languanges-left">
                <div class="desc-aboutme desc-aboutme-left">
                    <p class="font-32-semibold major-aboutme-left">Bahasa Indonesia - Native</p>
                </div>
                <div class="star">
                    <img src="../components/icons/star-1.svg">
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